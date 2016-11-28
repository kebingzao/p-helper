var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require("gulp-autoprefixer"),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del');

var wwwDir = 'workspace';
var buildDir = 'build';

gulp.task('styles',function(){
  gulp.src(`${wwwDir}/less/*.less`)
    .pipe(less())
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest(`${buildDir}/css`))
    .pipe(notify('Style task complete'))
})



gulp.task('scripts',function(){
  gulp.src(`${wwwDir}/js/*.js`)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(`${buildDir}/js`))
    .pipe(notify('Scripts task complete'))
});


gulp.task('clean',function(cb){
  del([buildDir],cb)
});


gulp.task('default',['clean'],function(){
  gulp.start('styles','scripts');
});

gulp.task('watch', ['styles'], function(){
  gulp.watch(`${wwwDir}/less/*/less`,['styles']);
});
