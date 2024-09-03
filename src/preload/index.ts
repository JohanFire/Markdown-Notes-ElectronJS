import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error('contextIsolation must be enabnled in the BrowserWindow.')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error(error)
}
