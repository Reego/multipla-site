import React from 'react';
import { graphql, navigate } from 'gatsby';

import '../style/form.css';

import SEO from '../components/seo';

import Layout from '../components/layout';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
};

class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            'redirect': false,
        };
    }

    componentDidUpdate() {
        if (this.state.redirect) {
            navigate('/enviado');
        }
    }

    render() {

        const data = this.props.data

        const frontmatter = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;

        const displayImage = frontmatter['contactDisplayImage'];
        const text = frontmatter['contactText'];

        return (
        <div className='mainContent'>
            <div className='formDescription'>
                <div className='formDescriptionImage' style={{background:"url('" + displayImage + "')", backgroundSize:'cover'}}></div>
            </div>
            <div className='formBreak'></div>
            <h1 className='contentTitle'>Fale connosco</h1>
            <p className='contentDescription'>{ text }</p>
            <div className='formBreak'></div>
            <div className='mainForm'>
                {/* action='/enviado'*/}
                <form onSubmit={this.formSubmission.bind(this)} className='serviceBoxWide' method='post' action='/enviado' name='mensagems' data-netlify-honeypot="bot-field" netlify>
                    <input type="hidden" name="bot-field"/>
                    <input type="hidden" name="form-name" value="mensagems" />
                    <h1>Contato</h1>
                    <div className='formBreakSmall'></div>
                    <p className='formText'>Email</p>
                    <input type='email' name='email' className='textInput' placeholder='email' required/>
                    <div className='formBreak'></div>
                    <p className='formText'>Mensagem</p>
                    <textarea name='conteudo' rows='5' placeholder='mensagem'></textarea>
                    <div className='formBreak'></div>
                    <input className='submitButton' type='submit' value='Submeter'/>
                </form>
            </div>
        </div>
        );
    }

    formSubmission(e) {

        e.preventDefault();

        const elements = e.target.elements;

        const form = {
            'bot-field': elements['bot-field'].value,
            'form-name': elements['form-name'].value,
            'email': elements['email'].value,
            'conteudo': elements['conteudo'].value,
        }

        fetch('/', {
            'method':'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(form)
        })
            .then(() => {
                this.setState(
                {
                    'redirect': true,
                });
            })
            .catch(err => {

            });
    }
}

export default ({ data }) => (
    <Layout>
        <SEO>
            <title>Contato</title>
        </SEO>
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
