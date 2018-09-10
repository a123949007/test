const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')();

require('./tasks/gulpfile-dev.js')(gulp, plugins);

gulp.task('default', ['dev']);
