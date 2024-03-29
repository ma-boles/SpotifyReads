/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!--
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet">
    <title>Spotify Reads</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from 'next/app';
import reportWebVitals from './reportWebVitals';
import { ShelfProvider } from './contexts/ShelfContext';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShelfProvider>
      <Layout>
        <App />
      </Layout>
    </ShelfProvider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

/*import React from 'react';
import { ShelfProvider } from './contexts/ShelfContext';
import HeadComponent from '../components/HeadComponent';
import Layout from './layout';
import HomeContent from '../components/HomeContent'

export default function Home() {

  const homeMetadata = {
    title: 'Home | Spotify Reads',
    description: 'Welcome to Spotify Reads - Keep track of your monthly Spotify audiobooks.'
  };

  return (
    <>
      <Layout metadata={homeMetadata}>
        <HeadComponent metadata={homeMetadata} />
        <HomeContent />
      </Layout>
    </>
  );
};*/

/*import Home from './home/page';


function App() {
  return (
    <div>

    <div /*className='app'*//*> */  
     /* <Home />
         
    </div>
    </div>

  );
}

{/*export default App;

import React from "react";
import { ShelfProvider } from "../contexts/ShelfContext";

export default function MyApp({ Component, pageProps }) {
    return (
        <ShelfProvider>
            <Component {...pageProps} />
        </ShelfProvider>
    );
};*/
/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom';

/*const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
*/