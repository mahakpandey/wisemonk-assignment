

const PBKDF2_ITERATIONS = 100_000
const SALT_LENGTH = 16
const HASH_LENGTH = 32
const KEY_ALGORITHM = 'PBKDF2'
const HASH_ALGORITHM = 'SHA-256'


function encodeUtf8(str) {
  return new TextEncoder().encode(str)
}


function generateSalt() {
  return crypto.getRandomValues(new Uint8Array(SALT_LENGTH))
}


export async function hashPassword(password) {
  const salt = generateSalt()
  const key = await crypto.subtle.importKey(
    'raw',
    encodeUtf8(password),
    { name: KEY_ALGORITHM },
    false,
    ['deriveBits']
  )
  const hashBuffer = await crypto.subtle.deriveBits(
    {
      name: KEY_ALGORITHM,
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: HASH_ALGORITHM,
    },
    key,
    HASH_LENGTH * 8
  )
  return {
    salt: b64Encode(salt),
    hash: b64Encode(new Uint8Array(hashBuffer)),
  }
}


export async function verifyPassword(password, saltB64, hashB64) {
  const salt = b64Decode(saltB64)
  const storedHash = b64Decode(hashB64)
  const key = await crypto.subtle.importKey(
    'raw',
    encodeUtf8(password),
    { name: KEY_ALGORITHM },
    false,
    ['deriveBits']
  )
  const hashBuffer = await crypto.subtle.deriveBits(
    {
      name: KEY_ALGORITHM,
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: HASH_ALGORITHM,
    },
    key,
    HASH_LENGTH * 8
  )
  const computed = new Uint8Array(hashBuffer)
  if (computed.length !== storedHash.length) return false
  // Constant-time comparison to avoid timing attacks
  let diff = 0
  for (let i = 0; i < computed.length; i++) diff |= computed[i] ^ storedHash[i]
  return diff === 0
}

function b64Encode(bytes) {
  return btoa(String.fromCharCode(...bytes))
}

function b64Decode(str) {
  return new Uint8Array([...atob(str)].map((c) => c.charCodeAt(0)))
}
