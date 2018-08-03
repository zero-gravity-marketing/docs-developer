module.exports = {
  title: 'ZGM',
  themeConfig: {
  	nav: [
  		{	text: 'Another Page', link: '/wordpress.html'	}
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
        title: 'Servers',
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