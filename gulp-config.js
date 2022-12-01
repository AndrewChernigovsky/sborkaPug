module.exports = {
  folder: {
    tasks: 'tasks',
    src: 'src',
    build: 'assets',
    prod: 'production',
  },
  file: {
    mainHtml: 'assets/index.html',
    mainJs: 'app.js',
    vendorJs: 'vendor.js',
    vendorJsMin: 'vendor.min.js',
    mainScss: 'styles.scss',
    mainScssMin: 'styles.min.css',
    vendorScss: 'vendor.scss',
    vendorScssMin: 'vendor.min.css',
    // js
    developJs: 'develop-app.js',
  },
  fileIncludepug: {
    templates: 'src/pug/templates',
    dest: 'assets',
  },
  fileIncludepugProd: {
    templates: 'src/pug/templates',
    dest: 'production',
  },
  task: {
    fileIncludepug: 'gulp-pug',
    fileIncludepugProd: 'gulp-pugProd',
    esLint: 'es-lint',
    buildCustomJs: 'build-custom-js',
    buildJsVendors: 'build-js-vendors',
    buildSass: 'build-sass',
    buildSassCustom: 'build-sass-custom',
    buildStylesVendors: 'build-styles-vendors',
    imageMin: 'image-min',
    imageWebP: 'image-webp',
    svgSprite: 'svg-sprite',
    squoosh: 'squoosh',
    cleanProd: 'clean-production',
    cleanBuild: 'clean-build',
    copyFolders: 'copy-folders',
    copyPHP: 'copy-php',
    delPHP: 'del-php',
    copyFoldersProduction: 'copy-folders-production',
    browserSync: 'browser-sync-server',
    watch: 'watch',
    // js
    developJS: 'developJS-build-custom',
  },
  autoprefixer: {
    browserslist: ['.browserslistrc'],
  },
  imageExtensions: 'jpg|jpeg|png|svg|gif|ico|tiff',
  getPathesForSassCompiling: function () {
    return {
      files: [],
      isGcmq: false,
    };
  },
  getPathesToCopyForProduction: function () {
    return [
      './**/*',
      '!.*',
      '!.*/**',
      '.htaccess',
      `!${this.folder.prod}`,
      `!${this.folder.build}/images/info.txt`,
      `!{${this.folder.src},${this.folder.src}/**}`,
      '!{tasks,tasks/**}',
      '!{node_modules,node_modules/**}',
      '!CONTRIBUTING.md',
      '!gulpfile.js',
      '!gulp-config.js',
      '!LICENSE',
      '!package.json',
      '!package-lock.json',
      '!README.md',
      '!readme.txt',
      '!{sys_icon,sys_icon/**}',
    ];
  },
  getPathesToCopy: function () {
    return [
      `./${this.folder.src}/**`,
      `!{${this.folder.src}/icon-svg,${this.folder.src}/icon-svg/**}`,
      `${this.folder.src}/images/**/*}`,
      `!{${this.folder.src}/js,${this.folder.src}/js/**}`,
      `!{${this.folder.src}/pug,${this.folder.src}/pug/**}`,
      `!{${this.folder.src}/scss,${this.folder.src}/scss/**}`,
      `!{${this.folder.src}/fonts/**}`,
      `{${this.folder.src}/php/**}`,
      `!{${this.folder.src}/vendor_entries,${this.folder.src}/vendor_entries/**}`,
    ];
  },
  getPathesToCopyPHP: function () {
    return [
		`${this.folder.src}/php/**`,
	]
  },
};
