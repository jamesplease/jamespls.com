const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const del = require('del');

function cleanCss(cb) {
  del('./css/style.css', cb);
}

function buildStylus() {
  return gulp.src('./css/stylus/style.styl')
    .pipe($.stylus())
    .pipe(gulp.dest('./css'))
    .pipe($.livereload());
}

function watch() {
  $.livereload.listen();
  var watcher = gulp.watch('./css/stylus/**/*', ['stylus']);
}

// Remove the built CSS file
gulp.task('clean-css', cleanCss);

// Compile our Stylus
gulp.task('stylus', buildStylus);

// Build the stylus, then watch for changes
gulp.task('watch', ['clean-css', 'stylus'], watch);

// Build the site
gulp.task('build', ['clean-css', 'stylus']);

// An alias of build
gulp.task('default', ['build']);
