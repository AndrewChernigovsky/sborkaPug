'use strict';

  const gulpConfig = require('./gulp-config.js');
  const gulp = require('gulp');
  const browserSync = require('browser-sync').create();

function requireTask(taskName, path, options, dependencies) {
    let settings = options || {};
    const taskFunction = function (callback) {
      if (settings.checkProduction) {
        settings.isProduction = process.argv[process.argv.length - 1] === 'build';
      }

      let task = require(path + taskName + '.js').call(this, settings);

      return task(callback);
    };

    settings.taskName = taskName;

    if (!Array.isArray(dependencies)) {
      gulp.task(taskName, taskFunction);
    } else if (dependencies.length === 1) {
      gulp.task(taskName, gulp.series(dependencies[0], taskFunction));
    } else {
      gulp.task(taskName, gulp.series(dependencies, taskFunction));
    }
 }

 requireTask(`${gulpConfig.task.fileIncludepug}`, `./${gulpConfig.folder.tasks}/`, {
    templates: gulpConfig.fileIncludepug.templates,
    dest: gulpConfig.fileIncludepug.dest,
});

gulp.task(
    'default',
    gulp.series(
		gulpConfig.task.fileIncludepug
    )
);
