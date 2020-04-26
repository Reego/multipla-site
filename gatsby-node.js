/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!')
}

exports.createPages = async ( { graphql, actions }) => {

    const { createPage } = actions
    const serviceTemplate = path.resolve('./src/templates/service.js')
    const result = await graphql(`
        {
          allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/static/assets/services/"}}}) {
            edges {
              node {
                frontmatter {
                  serviceName
                  body
                  image
                }
                id
              }
            }
          }
        }
    `);

    const services = result.data.allMarkdownRemark.edges;

    if(services.length > 0) {
        for(let i = 0; i < services.length; i++) {
            createPage({
                path: '/servico/' + services[i].node.id,
                component: projectTemplate,
                context: {
                    serviceName: services[i].node.frontmatter.serviceName,
                    body: services[i].node.frontmatter.body,
                    image: services[i].node.frontmatter.image,
                    index: i,
                },
            });
        }
    }
}