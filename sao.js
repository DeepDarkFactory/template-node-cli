module.exports = {
  prompts: {
    project: {
      required: true,
      message: `What's the name of the new project?`,
      default: `:folderName:`
    },
    tagline: {
      message: `How would you describe the new project (one-liner)?`,
      default: `Yet Another Commandline Tool`
    },
    version: {
      message: `Module semver?`,
      default: `0.0.0`,
      store: true
    },
    name: {
      message: `What's your name?`,
      default: `:gitUser:`,
      store: true
    },
    username: {
      message: `What's your GitHub username?`,
      default: `:gitUser:`,
      store: true
    },
    nodeTarget: {
      message: `What node version are you targeting?`,
      default: `6`,
      store: true
    },
    includeTravis: {
      type: `confirm`,
      message: `Include Travis-CI config file and badge?`,
      default: true,
      store: true
    },
    includeCodecovIo: {
      type: `confirm`,
      message: `Include codecov.io badge?`,
      default: true,
      store: true
    },
    prettier: {
      type: `confirm`,
      message: `Include prettier-eslint?`,
      default: true,
      store: true
    }
  },
  filters: {
    '.eslintrc': `prettier`,
    '.eslintignore': `prettier`,
    '.travis.yml': `includeTravis`
  },
  installDependencies: true,
  gitInit: true
}
