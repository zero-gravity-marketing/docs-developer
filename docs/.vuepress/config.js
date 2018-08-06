module.exports = {
  title: 'ZGM',
  themeConfig: {
  	nav: [
      { text: 'Wordpress', link: '/wordpress.html'  },
  		{	text: 'Dev Logins', link: 'https://app.asana.com/0/451921135192359/board'	}
  	],
  	sidebar: [
      {
        title: 'General',
        collapsable: false,
        children: [
          '/dev-kick-off',
          '/project-management',
          '/qa'
        ]
      },
      {
        title: 'Hosting',
        collapsable: false,
        children: [
          '/cloudways',
          '/wpengine'
        ]
      },
  		{
        title: 'Platforms',
        collapsable: false,
        children: [
          '/wordpress'
        ]
      },
      {
        title: 'Coding Standards',
        collapsable: false,
        children: [
          '/html',
          '/css',
          '/js',
          '/php',
        ]
      },
  	]
  }
}