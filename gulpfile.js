import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

function SassCompiler() {
    return gulp
        .src('css/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest('css/'));
}

gulp.task('default', SassCompiler);
