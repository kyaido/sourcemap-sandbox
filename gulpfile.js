var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss  = require('gulp-minify-css');

/* sass task */
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      // outputStyle: 'compressed'
    }))
    .pipe(minifyCss({advanced:false}))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('dist/css/'));
});