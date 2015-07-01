var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');

var AUTOPREFIXER_BROWSERS = [
  'last 2 version', 'Explorer >= 8', 'Android >= 2.3'
];

/* sass task */
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    // .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src/scss'}))
    // .pipe(sourcemaps.init({loadMaps: true}))
    // .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});
