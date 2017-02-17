var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')
var fs = require('fs')
//var livereload = require('gulp-livereload')

gulp.task('js', function () {
  gulp.src(['ng/module.js', 'ng/**/*.js'])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(ngAnnotate())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('assets'))
  //.pipe(livereload())
})

gulp.task('watch:js', ['js'], function () {
  //livereload.listen()
  gulp.watch('ng/**/*.js', ['js'])
})

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
  require('./gulp/' + task)
})

// run a task for both watch:css and watch:js and nodemon
gulp.task('dev', ['watch:css', 'watch:js','dev:server'])
