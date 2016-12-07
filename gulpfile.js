var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	brosweify = require('gulp-browserify'),
	concat = require('gulp-concat');

var coffeeSources = ['components/coffee/tagline.coffee'];
var jsSources = [
	'components/scripts/rclick.js',
	'components/scripts/pixgrid.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'
	];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
			.pipe(gulp.dest('components/scripts'))
});

//Comine all scripts into one file
gulp.task('js', function(){
	gulp.src(jsSources)//load in the array of source scripts
		.pipe(concat('script.js'))//Specify name of file containing all scripts(must match name in HTML)
		.pipe(brosweify())
		.pipe(gulp.dest('builds/development/js'))//Specify location of file to be stored
	});