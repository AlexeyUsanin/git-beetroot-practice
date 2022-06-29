const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

function liveReload() {
  browserSync.init({
    server: './src'
  });

  gulp.watch('src/sass/*.scss', cssTranspile);
  gulp.watch('src/scripts/*.js', jsCompile);
  gulp.watch("src/*.html").on('change', browserSync.reload);
}

function cssTranspile() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
}

function jsCompile() {
  return gulp.src('./src/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./src/js'));
}

exports.default = liveReload;
exports.sass = cssTranspile;
exports.js = jsCompile;