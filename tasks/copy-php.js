/**
 * Copy folders to another folder
 */
 'use strict';

 const gulp = require('gulp');
 const del = require('del');

 module.exports = function(options) {
	return () => {
		return gulp.src(`${options.src}/php`, { dot: true })
		.pipe(gulp.dest(`./${options.dest}/`));
	  };
 };