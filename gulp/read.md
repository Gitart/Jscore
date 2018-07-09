# Пример работы с Gulp

1. Инсталяция 
2. Создания инфраструктуры проекта
3. Создание настроечного файла 

### gulpfile.js

```js
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
```

### Запуск 

gulp

