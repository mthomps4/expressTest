'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// gulp.task("concat",function(){
//   //sample function here.
//   gulp.src([files])
//   .pipe(concat('app.js'))
//   .pipe(gulp.dest('js')); //places in js folder
// });

// gulp.task("minFile",function(){
//   //sample function here.
//   gulp.src("js/app.js")
//   .pipe(uglify())
//   .pipe(rename("app.min.js"))
//   .pipe(gulp.dest('js'));
// });

gulp.task("default",["hello"],function(){
  console.log("default gulp run");
});
