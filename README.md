# Ideal Website Starting Project

This project is intended to be a simple, easy to use, barebones website. No back-end is implemented so it can be used with many different back-end languages. This project only includes:

  - jQuery
  - Bootstrap
  - Some cool little npm scripts (described in some details below)
  - Dev Dependencies in order to make everything work

In order to run this you need npm installed, start by typing:

```sh
$ npm install
```

With all modules ready, you will have the following useful scripts:

##### build-js
Uses [browserify](https://github.com/substack/node-browserify) in order to make the file `content/js/main.js` browser-ready and outputs the result in `public/js/script.js`.

##### build-sass
Compiles the file `content/sass/main.scss` using [node-sass](https://github.com/sass/node-sass) and add browser prefixes using [autoprefixer](https://github.com/postcss/autoprefixer). The output goes to `public/css/style.css`.

##### build-min-js
The same as [build-js](#build-js) but also minifies the resulting js using [uglifyjs](https://github.com/mishoo/UglifyJS).

##### build-min-sass
The same as [build-sass](#build-sass) but also minifies the resulting css using [clean-css](https://github.com/jakubpawlowicz/clean-css).

##### build
Uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run both [build-js](#build-js) and [build-sass](#build-sass).

##### build-min
Uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run both [build-min-js](#build-min-js) and [build-min-sass](#build-min-sass).

##### watch-js
Uses [nodemon](https://github.com/remy/nodemon) to watch the js folder for changes and call [build-js](#build-js) according.

##### watch-sass
Uses [nodemon](https://github.com/remy/nodemon) to watch the sass folder for changes and call [build-sass](#build-sass) according.

##### watch
Uses [concurrently](https://github.com/kimmobrunfeldt/concurrently) to run both [watch-js](#watch-js) and [watch-sass](#watch-sass) at the same time.

To run any of these scripts just type:

```sh
$ npm run <command-name>
```