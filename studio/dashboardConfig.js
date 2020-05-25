export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecc15775669657b823cd0ae',
                  title: 'Sanity Studio',
                  name: 'orenJS-site-studio',
                  apiId: '4306a313-0682-4ad8-919e-602c9f47454e'
                },
                {
                  buildHookId: '5ecc157745228af5f57994c5',
                  title: 'Portfolio Website',
                  name: 'orenJS-site',
                  apiId: '7bb634e2-9182-47a0-a2bb-a420a565a5b0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orenJSdevs/orenJS-site',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://orenJS-site.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
