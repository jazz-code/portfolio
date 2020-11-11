import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta name="image" property="og:image" content="/src/images/portfolio.png"/>
        
        
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://anthonyrende.com/"/>
        <meta property="og:title" content="Hi, my name is Anthony,I'm a Software Developer."/>
        <meta property="og:description" content="Welcome to my portoflio"/>
        <meta property="og:image" content="/src/images/portfolio.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://anthonyrende.com/"/>
        <meta property="twitter:title" content="Hi, my name is Anthony,I'm a Software Developer."/>
        <meta property="twitter:description" content="Welcome to my portoflio"/>
        <meta property="twitter:image" content="/src/images/portfolio.png"/>
      </Helmet>
      <App />
    </>
  );
};
