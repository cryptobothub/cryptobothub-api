module.exports = {
  title: 'cryptobothub｜您提供币安、火币、欧意等交易所API',
  description: '集成现货、合约等行情数据',
  theme: 'api',
  base: '/',
  locales: {
    '/': {
      lang: 'zh-hans',
      title: 'cryptobothub｜为您提供币安、火币、欧意等交易所API',
      text: '中文',
      description: ''
    },
    '/us/': {
      lang: 'en-US',
      title: 'cryptobothub｜Provide you with the aggregation API of Binance, Huobi, Ouyi and other exchanges',
      text: 'english',
      description: ''
    }
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文'
      },
      '/us/': {
        selectText: 'Languages',
        label: 'English'
      },
    },

    // Assumes GitHub. Can also be a full GitLab url.
    repo: '',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: '',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page',
    // lastUpdated: 'Last Updated', // string | boolean
    lastUpdated: true // string | boolean

    // sidebarGroupOrder: [
    //   'getting-started',
    //   'configurations',
    // ],
  }
}
