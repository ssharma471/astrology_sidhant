// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react'; // Make sure to import React

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
