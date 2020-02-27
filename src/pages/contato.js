import React from 'react';
import { graphql } from 'gatsby';

import '../style/form.css';

import Layout from '../components/layout';

const Page = ({ data }) => {
    const frontmatter = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

    const displayImage = frontmatter['contactDisplayImage'];
    const text = frontmatter['contactText'];

    return (
    <div className='mainContent'>
        <div className='formDescription'>
            <div className='formDescriptionImage' style={{background:"url('" + displayImage + "", backgroundSize:'cover'}}></div>
        </div>
        <div className='formBreak'></div>
        <h1 className='contentTitle'>Contata-nos</h1>
        <p className='contentDescription'>{ text }</p>
        <div className='formBreak'></div>
        <div className='mainForm'>
            <form className='serviceBoxWide' method='post' action='/enviado' name='Mensagem' data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field"/>
                <h1>Contato</h1>
                <div className='formBreakSmall'></div>
                <p className='formText'>Email</p>
                <input name='email' className='textInput' type='text' placeholder='email' required/>
                <div className='formBreak'></div>
                <p className='formText'>Mensagem</p>
                <textarea name='conteudo' rows='5' placeholder='mensagem'></textarea>
                <div className='formBreak'></div>
                <input className='submitButton' type='submit' value='Submeter'/>
            </form>
        </div>
    </div>
    );
};

export default ({ data }) => (
    <Layout>
        <Page data={data}/>
    </Layout>
)

export const query = graphql`
{
  allFile(filter: {name: {eq: "config"}}) {
    edges {
      node {
        name
        childMarkdownRemark {
          frontmatter {
            contactDisplayImage
            contactText
          }
        }
      }
    }
  }
}`;
