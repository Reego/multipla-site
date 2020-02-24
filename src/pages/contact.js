import React from 'react';
import '../style/form.css';

import Layout from '../components/layout';

const Page = () => (
    <div className='mainContent'>
        <div className='formDescription'>
            <div className='formDescriptionImage'></div>
        </div>
        <div className='formBreak'></div>
        <h1 className='contentTitle'>Contata-nos</h1>
        <p className='contentDescription'>Mande uma mensagem:</p>
        <div className='formBreak'></div>
        <div className='mainForm'>
            <form className='serviceBoxWide'>
                <h1>Contato</h1>
                <div className='formBreakSmall'></div>
                <p className='formText'>Email</p>
                <input className='textInput' type='text' placeholder='email' required/>
                <div className='formBreak'></div>
                <p className='formText'>Mensagem</p>
                <textarea rows='5' placeholder='mensagem'></textarea>
                <div className='formBreak'></div>
                <input className='submitButton' type='submit' value='Submeter'/>
            </form>
        </div>
    </div>
);

export default () => (
    <Layout>
        <Page/>
    </Layout>
)
