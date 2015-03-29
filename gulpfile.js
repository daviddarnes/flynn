// Requirements
var gulp = require('gulp');
var path = require('path');
var less = require('gulp-less');
var sass = require('gulp-sass');

// LESS task
gulp.task('less', function () {
	gulp.src('./grid/grid.less')
	.pipe(less())
	.pipe(gulp.dest('./grid'));
});

// SASS task
gulp.task('sass', function () {
	gulp.src('./grid/grid.scss')
	.pipe(sass())
	.pipe(gulp.dest('./grid'));
});
