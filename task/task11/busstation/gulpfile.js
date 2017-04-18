var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-clean-css');
 
gulp.task('testless',function(){
    gulp.src('*.less')
        .pipe(less())
        /*.pipe(cssmin())*/
        .pipe(gulp.dest('css'));
});
gulp.task('testwatch',function(){
    gulp.watch('*.less',['testless']);
})