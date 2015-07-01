var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
  'last 2 version', 'Explorer >= 8', 'Android >= 2.3'
];

/* sass task */
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest('dist/css/'));
});
