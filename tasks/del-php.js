/**
 * Copy folders to another folder
 */
 'use strict';

 const gulp = require('gulp');
 const del = require('del');

 module.exports = function(options) {

   return async () => {
	const deletedPaths = await del([
		`${options.src}/php/**`,
	  ], { force: true });
 }};