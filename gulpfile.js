var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gzip = require('gulp-gzip');
var jade = require('gulp-jade');

//FULL BUILD.
// gulp.task('deps',function(){
// 	gulp.src('js/deps/*.js')
// 		.pipe(stylus())
// 		.pipe(concat('style.css'))
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('build/'))
// });


gulp.task('css',function(){
	return gulp.src('client/css/main.styl')
		.pipe(concat('style.styl'))
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(gulp.dest('client/css/'))
});


gulp.task('jade',function(){
	return gulp.src('client/views/header.jade')
		.pipe(concat('index.html'))
		.pipe(jade())
		.pipe(gulp.dest('client/'))
});


gulp.task('watch',function(){
	gulp.watch('client/css/*.styl',['css']).on('error',function(e){
		console.log(e)
	});
	gulp.watch('client/**/*.jade',['jade']).on('error',function(e){
		console.log(e)
	});
});