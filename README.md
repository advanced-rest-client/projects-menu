[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/projects-menu.svg)](https://www.npmjs.com/package/@advanced-rest-client/projects-menu)

[![Build Status](https://travis-ci.org/advanced-rest-client/projects-menu.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/projects-menu)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/projects-menu)

# projects-menu

A list of saved request items in the ARC main menu

```html
<projects-menu></projects-menu>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/projects-menu
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/projects-menu/projects-menu.js';
    </script>
  </head>
  <body>
    <projects-menu></projects-menu>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/projects-menu/projects-menu.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <projects-menu></projects-menu>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/projects-menu
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```
