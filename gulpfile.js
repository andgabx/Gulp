const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function SassCompiler() {
    return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/'))
}

gulp.task('default', SassCompiler);