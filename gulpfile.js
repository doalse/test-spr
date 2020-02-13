const gulp = require('gulp'),
      prefixer = require('gulp-autoprefixer'),
      sass = require('gulp-sass'),
      rigger = require('gulp-rigger'),
      imagemin = require('gulp-imagemin'),
      pngquant = require('imagemin-pngquant'),
      rimraf = require('rimraf'),
      browserSync = require("browser-sync"),
      reload = browserSync.reload;                 


const path = {
  build: { //Тут мы укажем куда складывать готовые после сборки файлы
      html: 'build/',
      js: 'build/js/',
      css: 'build/css/',
      img: 'build/img/'
  },
  src: { //Пути откуда брать исходники
      html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
      js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
      style: 'src/style/main.scss',
      img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
  },
  watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      style: 'src/style/**/*.scss',
      img: 'src/img/**/*.*'
  },
  clean: './build'
};  

const config = {
  server: {
      baseDir: "./build"
  },
  // tunnel: true,
  // host: 'localhost',
  // port: 9000,
  // logPrefix: "OK"
};   

function htmlBuild() {
 return gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(rigger()) //Прогоним через rigger
    .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
    .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений 
}

function jsBuild() {
  return gulp.src(path.src.js) //Найдем наш main файл
    .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    .pipe(reload({stream: true})); //И перезагрузим сервер
}
 
function styleBuild() {
  return gulp.src(path.src.style) //Выберем наш main.scss
    .pipe(sass()) //Скомпилируем
    .pipe(prefixer()) //Добавим вендорные префиксы
    .pipe(gulp.dest(path.build.css)) //И в build
    .pipe(reload({stream: true}));
}

function imageBuild() {
  return gulp.src(path.src.img) //Выберем наши картинки
    .pipe(imagemin({ //Сожмем их
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()],
        interlaced: true
    }))
    .pipe(gulp.dest(path.build.img)) //И бросим в build
    .pipe(reload({stream: true}));
}

function fontsBuild() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
}

function clean(cb) {
    rimraf(path.clean, cb);
}

gulp.task('htmlBuild', htmlBuild);
gulp.task('jsBuild', jsBuild);
gulp.task('styleBuild', styleBuild);
gulp.task('imageBuild', imageBuild);
gulp.task('clean', clean);
gulp.task('build', gulp.series('clean', 'htmlBuild', 'jsBuild', 'styleBuild', 'imageBuild'));

gulp.task('watch', function(){
  gulp.watch(path.watch.html, gulp.series('htmlBuild'));
  gulp.watch(path.watch.style, gulp.series('styleBuild'));
  gulp.watch(path.watch.js, gulp.series('jsBuild'));
  gulp.watch(path.watch.img, gulp.series('imageBuild'));
}); 

gulp.task('webserver', function () {
    browserSync(config);
}); 

gulp.task('default', gulp.parallel('build', 'webserver', 'watch'));

