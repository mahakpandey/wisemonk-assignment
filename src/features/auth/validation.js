
const MIN_PASSWORD_LENGTH = 8
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSignup({ fullName, email, password, confirmPassword }) {
  const name = (fullName ?? '').trim()
  const em = (email ?? '').trim().toLowerCase()
  if (!name) return 'Full name is required.'
  if (!em) return 'Work email is required.'
  if (!EMAIL_REGEX.test(em)) return 'Please enter a valid email address.'
  if (!password) return 'Password is required.'
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`
  }
  if (password !== confirmPassword) return 'Passwords do not match.'
  return null
}

export function validateLogin({ email, password }) {
  const em = (email ?? '').trim().toLowerCase()
  if (!em) return 'Work email is required.'
  if (!EMAIL_REGEX.test(em)) return 'Please enter a valid email address.'
  if (!password) return 'Password is required.'
  return null
}
