/**
 * default setting
 */

export default {
  hotkey: 'Control+2',
  sshReadyTimeout: 50000,
  scrollback: 3000,
  onStartSessions: [],
  fontSize: 16,
  fontFamily: 'Fira Code, mono, courier-new, courier, monospace',
  execWindows: 'System32/WindowsPowerShell/v1.0/powershell.exe',
  execMac: 'zsh',
  execLinux: 'bash',
  execWindowsArgs: [],
  execMacArgs: [],
  execLinuxArgs: [],
  enableGlobalProxy: false,
  disableConnectionHistory: false,
  disableTransferHistory: false,
  terminalBackgroundImagePath: '',
  terminalBackgroundFilterOpacity: 1,
  terminalBackgroundFilterBlur: 0,
  terminalBackgroundFilterBrightness: 1,
  terminalBackgroundFilterGrayscale: 0,
  terminalBackgroundFilterContrast: 1,
  rendererType: 'canvas',
  terminalType: 'xterm-256color',
  keepaliveCountMax: 10,
  saveTerminalLogToFile: false,
  checkUpdateOnStart: true,
  cursorBlink: false,
  cursorStyle: 'block',
  useSystemTitleBar: false,
  opacity: 1,
  defaultEditor: '',
  terminalWordSeparator: './\\()"\'-:,.;<>~!@#$%^&*|+=[]{}`~ ?',
  confirmBeforeExit: false,
  initDefaultTabOnStart: true,
  screenReaderMode: false,
  autoRefreshWhenSwitchToSftp: false,
  addTimeStampToTermLog: false,
  sftpPathFollowSsh: false,
  keepaliveInterval: 0,
  backspaceMode: '^?',
  showHiddenFilesOnSftpStart: true,
  terminalInfos: [
    'uptime',
    'cpu',
    'mem',
    'activities',
    'network',
    'disks'
  ],
  filePropsEnabled: [
    'name',
    'size',
    'modifyTime'
  ],
  hideIP: false,
  dataSyncSelected: 'all',
  baseURLAI: 'https://api.deepseek.com',
  modelAI: 'deepseek-chat',
  roleAI: '终端专家,提供不同系统下命令,简要解释用法,用markdown格式',
  apiPathAI: '/chat/completions'
}
