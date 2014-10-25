// Requirements
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

// Final CSS task
gulp.task('less', function () {
	gulp.src('./less/grid.less')
	.pipe(less())
	.pipe(gulp.dest('./'));
});

// Demo page task
gulp.task('demo', function () {
	gulp.src(['./less/grid.less', './less/demo.less'])
	.pipe(less())
	.pipe(gulp.dest('./demo/'));
});

