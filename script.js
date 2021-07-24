/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: 'https://vajra.ai'
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
        },
        {
          title: 'Chatbot Types',
          link: '/chatbot-types'
        
        },
        {
          title: 'What Chatbots can Do',
          link: '/what-chat-bots-can-do-for-us'
        },
        {
          title: 'Special to Vajra',
          link: '/special-to-vajra'
        },

        
      ]
    }

  ],

  
})
