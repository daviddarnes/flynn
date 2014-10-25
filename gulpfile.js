// Requirements
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
	gulp.src('./less/grid.less')
	.pipe(less())
	.pipe(gulp.dest('./'));
});