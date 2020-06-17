module.exports = {
  siteMetadata: {
    title: 'Static Fuse',
    description: 'Headless WordPress with Gatsby FTW.',
    author: 'Bradley',
    twitter: '@bradbaumi',
    siteUrl: `https://staticfuse.com `,
  },
  plugins: [
    {
      resolve: `@staticfuse/gatsby-theme-publisher`,
      options: {
        starterPages: true,
        mailChimpEndpoint: 0,
        dynamicComments: 1,
        gaTrackingId: 0,
        wordPressUrl: `https://baumidesign.com.au/bradnjem/`,
        blogURI: '/blog'
      },
    },
  ],
}