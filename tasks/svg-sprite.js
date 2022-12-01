const gulp = require('gulp');
const svgSprite = require('gulp-svgstore');
const rename = require('gulp-rename');

module.exports = function (options) {
  return () => {
    return gulp.src(`./${options.src}/icon-svg/*.svg`)
      .pipe(svgSprite({
        inlineSvg: true
      }))
      .pipe(rename("sprite.svg"))
      .pipe(gulp.dest(`./${options.src}/images/sprite`));
  };
};
