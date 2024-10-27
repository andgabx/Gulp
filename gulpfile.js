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
        .pipe(autoprefixer({ 
            overrideBrowserslist: ['last 2 versions'], 
            cascade: false }))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
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
    gulp.watch('css/scss/**/*.scss', SassCompiler); // watches all the .scss files and runs the SassCompiler task
    gulp.watch('*.html').on('change', browserSync.reload); // gonna reload right after we change any html file
}

// gulp.task('default', gulpWatch); 

gulp.task('all', gulp.parallel(SassCompiler, gulpWatch, browserSyncServer)); // Run all the tasks in parallel
