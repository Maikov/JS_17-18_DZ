var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
    gulp.run('minify-js', 'minify-css');
    gulp.watch(['./js/src/*.js', './css/src/*.css'], function(event) {
    gulp.run('minify-js', 'minify-css');
    });
});

gulp.task('minify-js', function(){
    gulp.src('./js/src/*.js')
        .pipe(concat('script.main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/dist'));
});

gulp.task('minify-css', function() {
    return gulp.src('css/src/*.css')
        .pipe(concat('css.main.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css/dist'));
});

