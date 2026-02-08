

const DB_NAME = 'wisemonk-auth'
const DB_VERSION = 1
const STORE_USERS = 'users'


function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION)
    req.onerror = () => reject(req.error)
    req.onsuccess = () => resolve(req.result)
    req.onupgradeneeded = (e) => {
      const db = e.target.result
      if (!db.objectStoreNames.contains(STORE_USERS)) {
        db.createObjectStore(STORE_USERS, { keyPath: 'email' })
      }
    }
  })
}


export function addUser(user) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_USERS, 'readwrite')
      const store = tx.objectStore(STORE_USERS)
      const req = store.add(user)
      req.onsuccess = () => resolve()
      req.onerror = () => reject(req.error)
    })
  })
}

export function getUserByEmail(email) {
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_USERS, 'readonly')
      const store = tx.objectStore(STORE_USERS)
      const req = store.get(email)
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => reject(req.error)
    })
  })
}

export function userExists(email) {
  return getUserByEmail(email).then((u) => !!u)
}
