# Пример работы с Gulp

1. Инсталяция 
2. Создания инфраструктуры проекта
3. Создание настроечного файла 
4. Обучение


## Инсталяция
https://webdesign-master.ru/blog/tools/2016-03-09-gulp-beginners.html
1. Установка NODE.JS   
2. Уситановка GULP

```
npm i gulp -g
```


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

## Обязательно
Должна быть заадача по умолчанию.
**gulp.task('default'**   


### Запуск 

gulp

