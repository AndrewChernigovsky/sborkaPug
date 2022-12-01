/**
 * Minify images
 */
'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const gulpif = require('gulp-if');

module.exports = function (options) {

  return () => {
    return gulp
		.src(`./${options.src}/images/**/*`)
		.pipe(imagemin([
			imagemin.jpegtran({
			progressive: true
			}),
			imagemin.optipng({
			optimizationLevel: 5
			}),
			imagemin.svgo({
			plugins: [{
				removeViewBox: false
			}]
			})
		]))
		.pipe(gulpif(!options.isProduction,  gulp.dest(`./${options.src}/images/`)))
		.pipe(gulpif(options.isProduction, gulp.dest(`./${options.dest}/images/`)));
  };
};
