'use strict';

const e = React.createElement;


function Image( name, src) {
    src = "src/images/slides/";
    this.photoName = name;
    this.photoSrc = src;
  }

  const domContainer = document.querySelector('#x');
  const element = <h1>test</h1>;
  ReactDOM.render(e(element), domContainer);