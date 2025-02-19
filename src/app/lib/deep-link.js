const globalState = require('./glob-state')
const {
  isDev
} = require('../common/runtime-constants')

exports.registerDeepLink = async function () {
  // Early return if already registered
  if (globalState.get('deepLinkRegistered')) {
    return
  }
  try {
    const electronAppUniversalProtocolClient = require('electron-app-universal-protocol-client').default
    electronAppUniversalProtocolClient.on(
      'request',
      async (url) => {
        if (url.startsWith('electerm://')) {
          const opts = url.slice(11)
          const optsObj = require('querystring').parse(opts)
          const win = globalState.get('win')
          if (win) {
            const port = optsObj.port ? ':' + optsObj.port : ''
            win.webContents.send('add-tab-from-command-line', {
              options: optsObj,
              argv: [
                `${optsObj.user || ''}@${optsObj.host || ''}${port}`
              ]
            })
          }
        }
      }
    )

    await electronAppUniversalProtocolClient.initialize({
      protocol: 'electerm',
      mode: isDev ? 'development' : 'production' // Make sure to use 'production' when script is executed in bundled app
    })
    globalState.set('deepLinkRegistered', true)
  } catch (e) {
    console.error(e)
  }
}
