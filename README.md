# Solid web application skeleton

This base project helps to get started with Solid web application development.

For building, it uses:

* Webpack to create a web application distribution and supplies a developer friendly web server.
* Yarn for node package dependency management.

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
```
