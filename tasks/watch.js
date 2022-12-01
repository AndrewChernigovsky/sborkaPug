/**
 * Watch for file changes
 */
'use strict';

const gulp = require('gulp');

module.exports = function (options) {
  return () => {
    gulp.watch(`[!./${options.src}/js/**/*, ./${options.src}/js/**/*]`, gulp.series(options.tasks.buildCustomJs));

    gulp.watch(`./${options.src}/js/**/*`, gulp.series(options.tasks.buildCustomJs));

    gulp.watch(`./${options.src}/js/another/*.js`, gulp.series(options.tasks.developJS));

    gulp.watch(`./${options.src}/scss/**/*`, gulp.series(options.tasks.buildSass, options.tasks.buildSassCustom));

    gulp.watch(`./${options.src}/pug/**/*`, gulp.series(options.tasks.fileIncludepug));

    gulp.watch(`./${options.src}/fonts/**/*.{eot,svg,ttf,woff,woff2}`, gulp.series(options.tasks.copyFolders));

    gulp.watch(`./${options.src}/php/**`, gulp.series(options.tasks.copyPHP));

    gulp.watch(`./${options.src}/icon-svg/*.svg`, gulp.series(options.tasks.svgSprite));

    gulp.watch(`./${options.src}/images/**/*.+(${options.imageExtensions})`);

    gulp.watch([`./${options.dest}/**/*`, `!./${options.dest}/**/*.map`, `./*.html`]).on('change', options.browserSync.reload);
  };
};
