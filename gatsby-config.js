module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `505f942053132510646f5b322b03f4`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        // previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        // disableLiveReload: false,

        // Custom API base URL
        // apiUrl: ' https://site-api.datocms.com/',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        // localeFallbacks: {
        //   it: ['en'],
        // }
      }
    }
  ]
}
