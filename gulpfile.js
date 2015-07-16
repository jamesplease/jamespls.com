const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');

// Remove the built CSS file
gulp.task('clean-css', function(cb) {
  del('./css/style.css', cb);
});

gulp.task('stylus', function() {
  return gulp.src('./css/stylus/style.styl')
    .pipe($.stylus())
    .pipe(gulp.dest('./css'))
});
