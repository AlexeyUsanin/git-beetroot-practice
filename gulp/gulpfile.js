const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const del = require('del');
const zip = require('gulp-zip');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

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

function buildCss() {
  return gulp.src('./src/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('build/css'));
}

function buildJS() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
}

function buildHTML() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('build'));
}

function clean() {
  return del('build');
}

function archive() {
  return gulp.src('build/**/*')
    .pipe(zip('build.zip'))
    .pipe(gulp.dest('./'));
}

function optimizeImg() {
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
}

exports.default = liveReload;
exports.build = gulp.series(clean, gulp.parallel(buildCss, buildJS, buildHTML, optimizeImg), archive);