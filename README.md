# d2l-labs-carded-table

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/carded-table/carded-table.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/carded-table/carded-table)
[![Greenkeeper badge](https://badges.greenkeeper.io/BrightspaceUILabs/carded-table.svg)](https://greenkeeper.io/)
[![Build status][ci-image]][ci-url]

Carded table component

## Installation

To install from NPM:

```shell
npm install @brightspace-ui-labs/carded-table
```

## Usage

```html
<script type="module">
    import '@brightspace-ui-labs/carded-table/carded-table.js';
</script>
<d2l-labs-carded-table>My element</d2l-labs-carded-table>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

### Running the demos

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

### Testing

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[ci-url]: https://travis-ci.org/BrightspaceUILabs/carded-table
[ci-image]: https://travis-ci.org/BrightspaceUILabs/carded-table.svg?branch=master

### Running the demos

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

### Testing

To lint:

```shell
npm run lint
```

To run local unit tests:

```shell
npm run test:local
```

To run a subset of local unit tests, modify your local [index.html](https://github.com/BrightspaceUILabs/carded-table/blob/master/test/index.html), or start the dev server and navigate to the desired test page.

To run linting and unit tests:

```shell
npm test
```

## Versioning, Releasing & Deploying

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version, create a tag, and trigger a deployment to NPM.
