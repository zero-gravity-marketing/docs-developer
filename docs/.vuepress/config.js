module.exports = {
  head: [
    ['link', { rel: 'stylesheet', href: `https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css` }],
    ['script', { src: `https://code.jquery.com/jquery-3.3.1.slim.min.js` }],
    ['script', { src: `https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js` }],
    ['script', { src: `https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js` }],
    ['script', { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }],
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
  ],
  title: 'ZGM',
  themeConfig: {
  	nav: [
      { text: 'Wordpress', link: '/wordpress.html'  },
  		{	text: 'Dev Logins', link: 'https://app.asana.com/0/451921135192359/board'	},
      {
        text: 'Admin',
        link: '/admin/',
      }
  	],
  	sidebar: [
      {
        title: 'General',
        collapsable: false,
        children: [
          '/project-management',
          '/qa'
        ]
      },
      // {
      //   title: 'Hosting',
      //   collapsable: false,
      //   children: [
      //     '/cloudways',
      //     '/wpengine'
      //   ]
      // },
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
          // '/js',
          '/php',
        ]
      },
  	]
  }
}