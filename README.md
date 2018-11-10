# Solid web application skeleton

This base application project helps getting started with Solid web application development.

For building, it uses:

* [Yarn](https://yarnpkg.com/) for application project management (building, dependencies, etc).
* [Webpack](https://webpack.js.org/) to create a web application distribution and supplies a developer friendly web server.
* [Babel](https://babeljs.io/) for compiling the Javascript source to web browser compatible code.

Included dependencies are:

* rdflib and solid-auth-client for working with a Solid POD (and other RDF data).
* React, a web component framework (DOM overlay).
* Material-UI, a React extension with useful web components.

## Getting started

```bash
# In case you don't already have yarn
npm install -D yarn
rm package-lock.json

# Enables executing binaries/scripts from node_modules
. .bashrc-npm-do

# Installs dependencies
npm-do yarn install

# Starts the webpack development web server
npm-do yarn start

# Builds a distributable, see "build/" directory
npm-do yarn build
```
