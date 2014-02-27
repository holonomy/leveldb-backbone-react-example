var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();

gulp.task('js-build', function () {
  return watchify('./src/client.js')
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./static'))
    .pipe(refresh(server));
});

gulp.task('js-watch', function () {
  return browserify('./src/client.js')
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./static'))
});

gulp.task('css-watch', function () {
  return gulp.src('./src/index.less')
    .pipe(less())
    .pipe(gulp.dest('static'))
    .pipe(refresh(server));
});

gulp.task('css-build', function () {
  return gulp.src('./src/index.less')
    .pipe(less({
      compress: true
    }))
    .pipe(gulp.dest('static'))
});
 
gulp.task('lr-server', function (cb) {
  server.listen(35729, cb);
});
 
gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['js-watch']);
  gulp.watch('./src/**/*.less', ['css-watch']);
});

gulp.task('develop', ['lr-server', 'js-watch', 'css-watch', 'watch']);

gulp.task('default', ['js-build', 'css-build']);
