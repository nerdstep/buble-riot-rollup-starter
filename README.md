# buble-riot-rollup-starter [![Build Status](https://travis-ci.org/yamafaktory/buble-riot-rollup-starter.svg?branch=master)](https://travis-ci.org/yamafaktory/buble-riot-rollup-starter) [![npm version](https://img.shields.io/npm/v/buble-riot-rollup-starter.svg?style=flat)](https://www.npmjs.com/package/buble-riot-rollup-starter) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> A starter project to build [Riot](http://riotjs.com/) applications with [Bublé](https://buble.surge.sh/guide/) and [Rollup](http://rollupjs.org/).

This project is based on [buble-react-rollup-starter](https://github.com/yamafaktory/buble-react-rollup-starter) and provides a basic boilerplate to get started with Riot using ES2015/16 which is then bundled with Rollup and compiled by Bublé into ES5 code.

## Installation

Clone this repository:

```bash
git clone https://github.com/nerdstep/buble-riot-rollup-starter
cd buble-riot-rollup-starter
npm install
```

Or install from *npm*:

```bash
npm i buble-riot-rollup-starter
```

## Usage

### Development

A basic workflow involving [Browsersync](https://www.browsersync.io/) is already implemented. Running the following command will open your default browser pointing to the `html/index-dev.html` file. Any modification of one of the files included in the *src* directory will trigger a new development build and refresh your browser:

```bash
npm start
```

You can also generate a development build by running the following command:

```bash
npm run build:dev
```

### Production

First run the following command:

```bash
npm run build
```

Then open the `html/index.html` file in your browser.

The Rollup production configuration file switch the NodeJS environment to production and minify the code with [UglifyJS](http://lisperator.net/uglifyjs/).

## Linting

The code quality is checked by the [JavaScript Standard Style](http://standardjs.com/).

## License

Released under the [MIT license](https://opensource.org/licenses/MIT) by Justin Williams.
