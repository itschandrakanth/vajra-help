/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: 'Introduction',
          link: '/introduction'
        },
        {
          title: 'How Chatbots work',
          link: '/how-chatbots-work'
        }
      ]
    }
  ]
})
