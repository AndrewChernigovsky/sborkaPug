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

//  Форматирование файлов .pug в файлы .html
 requireTask(`${gulpConfig.task.fileIncludepug}`, `./${gulpConfig.folder.tasks}/`, {
    templates: gulpConfig.fileIncludepug.templates,
    dest: gulpConfig.fileIncludepug.dest,
});

//  Форматирование файлов .scss в файлы .css style.min.css
requireTask(`${gulpConfig.task.buildSass}`, `./${gulpConfig.folder.tasks}/`, {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
    mainScss: gulpConfig.file.mainScss,
    mainScssMin: gulpConfig.file.mainScssMin,
});

  // Создание единого стилевого файла для библиотек vendor.min.css
  requireTask(`${gulpConfig.task.buildStylesVendors}`, `./${gulpConfig.folder.tasks}/`, {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
    vendorScss: gulpConfig.file.vendorScss,
    vendorScssMin: gulpConfig.file.vendorScssMin,
  });
  
// Форматирование файлов .scss в файлы .css style.min.css
  requireTask(`${gulpConfig.task.buildSassCustom}`, `./${gulpConfig.folder.tasks}/`, {
    src: gulpConfig.folder.src,
    sassFilesInfo: gulpConfig.getPathesForSassCompiling(),
    dest: gulpConfig.folder.build,
  });

// Смена расширения картинок
requireTask(`${gulpConfig.task.imageWebP}`, `./${gulpConfig.folder.tasks}/`, {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
	checkProduction: true,
});
// Минификация картинок
requireTask(`${gulpConfig.task.imageMin}`, `./${gulpConfig.folder.tasks}/`, {
	src: gulpConfig.folder.src,
	dest: gulpConfig.folder.build,
	checkProduction: true,
});

// Удаление папки билда
requireTask(`${gulpConfig.task.cleanBuild}`, `./${gulpConfig.folder.tasks}/`, {
    src: gulpConfig.folder.build,
});


// Копирование всех папок и файлов
requireTask(`${gulpConfig.task.copyFolders}`, `./${gulpConfig.folder.tasks}/`, {
    dest: gulpConfig.folder.build,
    foldersToCopy: gulpConfig.getPathesToCopy(),
});

// Наблюдение всех папок и файлов
requireTask(`${gulpConfig.task.browserSync}`, `./${gulpConfig.folder.tasks}/`, {
    mainHtml: gulpConfig.file.mainHtml,
    browserSync,
  });

requireTask(
    `${gulpConfig.task.watch}`,
    `./${gulpConfig.folder.tasks}/`,
    {
      src: gulpConfig.folder.src,
      dest: gulpConfig.folder.build,
      imageExtensions: gulpConfig.imageExtensions,
      browserSync,
      tasks: {
        buildCustomJs: gulpConfig.task.buildCustomJs,
        buildSass: gulpConfig.task.buildSass,
        fileIncludepug: gulpConfig.task.fileIncludepug,
        copyFolders: gulpConfig.task.copyFolders,
      },
    },
    false
);

// Базовый скрипт с библиотеками
requireTask(`${gulpConfig.task.buildCustomJs}`, `./${gulpConfig.folder.tasks}/`, {
    src: gulpConfig.folder.src,
    dest: gulpConfig.folder.build,
    mainJs: gulpConfig.file.mainJs,
    checkProduction: true,
  });

// ТАСКИ ЗАДАЧИ СКРИПТЫ
// ТАСКИ ЗАДАЧИ СКРИПТЫ
// ТАСКИ ЗАДАЧИ СКРИПТЫ
// ТАСКИ ЗАДАЧИ СКРИПТЫ

gulp.task(
    'default',
    gulp.series(
		gulpConfig.task.cleanBuild,
		gulpConfig.task.fileIncludepug,
		gulp.parallel(
			gulpConfig.task.buildStylesVendors,
			gulpConfig.task.buildSass,
		),
		gulpConfig.task.imageMin,
		gulpConfig.task.imageWebP,
		gulpConfig.task.copyFolders,
		gulp.parallel(gulpConfig.task.browserSync, gulpConfig.task.watch),
    )
);

gulp.task(
    'build',
    gulp.series(
		gulpConfig.task.fileIncludepug,
		gulp.parallel(
			gulpConfig.task.buildStylesVendors,
			gulpConfig.task.buildSass,
		),
		gulpConfig.task.imageMin,
		gulpConfig.task.imageWebP,
		gulpConfig.task.copyFolders,
    )
);

gulp.task(
    'opt',
    gulp.series(
		gulpConfig.task.imageMin
    )
);
