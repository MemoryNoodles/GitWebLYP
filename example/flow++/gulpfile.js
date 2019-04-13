var gulp = require('gulp');
var browserSync = require('browser-sync').create();
// 使用变量引用 `reload` 方法
var reload = browserSync.reload;
gulp.task('html', function(){
    gulp.src('./index.html')
        .pipe(reload({ stream:true }))
})
//静态服务器
gulp.task('default',['html'],function () {

    browserSync.init({
        server: {
            baseDir: "./"
        },
    });
    gulp.watch(["./*.html"], ['html']);
})/**
 * Created by lyp on 2017/7/31.
 */
