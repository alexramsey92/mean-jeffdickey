var gulp = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('css', function(){
  gulp.src('css/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('assets'))
    .pipe(livereload())
})

gulp.task('watch:css', function(){
  livereload.listen()
  gulp.watch('css/**/*.styl', ['css'])
})
