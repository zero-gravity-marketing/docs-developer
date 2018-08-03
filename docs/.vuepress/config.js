module.exports = {
  title: 'ZGM',
  themeConfig: {
  	nav: [
  		{	text: 'Another Page', link: '/wordpress.html'	}
  	],
  	sidebar: [
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
          '/php',
          '/css',
          '/js',
        ]
      },
  	]
  }
}