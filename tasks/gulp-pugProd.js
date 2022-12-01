'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

module.exports = function (options) {
  return () => {
    return gulp
      .src(`./${options.templates}/**/*.pug`)
      .pipe(
        pug({
          pretty: false,
        })
      )
      .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
      .pipe(gulp.dest(options.dest));
  };
};
