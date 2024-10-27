import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);

function SassCompiler() {
    return gulp
        .src('css/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest('css/'));
}

gulp.task('default', SassCompiler);

function browserSyncServer() {
    browserSync.init({
        server: {
            baseDir: './',
        },
    });
}

gulp.task('browser-sync', browserSyncServer);

function gulpWatch() {
    gulp.watch('css/scss/**/*.scss', SassCompiler); // Watch all the .scss files, then run the SassCompiler task
}

gulp.task('default', gulpWatch); 

