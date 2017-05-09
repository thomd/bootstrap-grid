var gulp = require('gulp')
var sass = require('gulp-sass')
var minifyCss = require('gulp-minify-css')
var sourcemap = require('gulp-sourcemaps')

gulp.task('default', function() {
  gulp.start('css')
  gulp.watch('./scss/*.scss', ['css'])
})

gulp.task('css', function() {
  gulp.src('./scss/*.scss')
  .pipe(sourcemap.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCss({'compatibility': 'ie9'}))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('.'))
})
