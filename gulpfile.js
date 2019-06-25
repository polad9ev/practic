const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const tinypng = require('gulp-tinypng-compress')


function minifyCSS(cb) {
  return gulp.src('./src/css/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist/css/'))

  cb();
};

function minifyJS(cb) {
  return gulp.src('./src/js/**/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))

  cb();
};

function minifyHtml(cb) {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist/'))

  cb();
};

function moveFonts(cb) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))

  cb();
};

function tinyPng(cb) {
  gulp.src('src/img/**/*')
  .pipe(tinypng({
        key: 'wZ68ren0iuHQmZ6wEqNmLxgN5slrcQBL'
      }))
  .pipe(gulp.dest('dist/img'));

  cb();
};

exports.minifyJS = minifyJS
exports.minifyCSS = minifyCSS
exports.minifyHtml = minifyHtml
exports.moveFonts = moveFonts
exports.tinyPng = tinyPng
exports.default = gulp.parallel(minifyJS, minifyCSS, minifyHtml, moveFonts, tinyPng)