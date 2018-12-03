var gulp = require('gulp'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concatCss = require('gulp-concat-css');

gulp.task('default', function() {
  gulp.src('app/css/*.css')
    .pipe(concatCss("main.css"))
    .pipe(minifyCss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/css'));
})
gulp.task('watch', function() {
  gulp.watch('app/css/*.css', ['default'])
})