/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { getSession, setSession, clearSession } from "./session.js";
import { validateSignup, validateLogin } from "./validation.js";
import { hashPassword, verifyPassword } from "./crypto.js";
import { addUser, getUserByEmail, userExists } from "./db.js";

const AuthContext = createContext(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

function getInitialState() {
  const session = getSession();
  return {
    user: session ? { email: session.email, fullName: session.fullName } : null,
    isAuthenticated: !!session,
  };
}

export function AuthProvider({ children }) {
  const [state, setState] = useState(getInitialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = useCallback(() => setError(null), []);

  const signup = useCallback(
    async (fullName, email, password, confirmPassword) => {
      setError(null);
      const validationError = validateSignup({
        fullName,
        email,
        password,
        confirmPassword,
      });
      if (validationError) {
        setError(validationError);
        return;
      }
      const em = email.trim().toLowerCase();
      setLoading(true);
      try {
        const exists = await userExists(em);
        if (exists) {
          setError("An account with this email already exists.");
          return;
        }
        const { hash } = await hashPassword(password);
        const createdAt = new Date().toISOString();
        const fullNameTrimmed = fullName.trim();
        await addUser({
          email: em,
          passwordHash: hash,
          fullName: fullNameTrimmed,
          createdAt,
        });
        const session = {
          email: em,
          fullName: fullNameTrimmed,
          loggedInAt: createdAt,
        };
        setSession(session);
        setState({
          user: { email: session.email, fullName: session.fullName },
          isAuthenticated: true,
        });
      } catch (e) {
        setError(e?.message ?? "Signup failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const login = useCallback(async (email, password) => {
    setError(null);
    const validationError = validateLogin({ email, password });
    if (validationError) {
      setError(validationError);
      return;
    }
    const em = email.trim().toLowerCase();
    setLoading(true);
    try {
      const user = await getUserByEmail(em);
      if (!user) {
        setError("No account found with this email.");
        return;
      }
      const ok = await verifyPassword(password, user.passwordHash);
      if (!ok) {
        setError("Incorrect password.");
        return;
      }
      const session = {
        email: user.email,
        fullName: user.fullName ?? user.email,
        loggedInAt: new Date().toISOString(),
      };
      setSession(session);
      setState({
        user: { email: session.email, fullName: session.fullName },
        isAuthenticated: true,
      });
    } catch (e) {
      setError(e?.message ?? "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setState({ user: null, isAuthenticated: false });
    setError(null);
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      loading,
      error,
      clearError,
      signup,
      login,
      logout,
    }),
    [state, loading, error, clearError, signup, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
