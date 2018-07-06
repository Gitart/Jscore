var gulp = require('gulp');
   


// Собираем Stylus
gulp.task('stylus', function() {
    gulp.src('./a/screen.styl')
    .on('error', console.log)          // Если есть ошибки, выводим и продолжаем
    .pipe(gulp.dest('./public/css/'))  // записываем css
});




// / Запуск сервера разработки gulp watch
gulp.task('default', function() {
        gulp.watch('./a/**/*.*', function() {
        console.log("Проверка sql"); 
        gulp.run('stylus');
        });
});
