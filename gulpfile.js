// DECLARAÇÃO DE VARIÁVEIS PARA UTILIZAÇÃO INTERNA
var gulp = require('gulp');
var del = require('del');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');

// Comando para copipar itens do projeto
gulp.task('copy', ['clean'], function () {
  return gulp.src([
    // Cópia do arquivo index.html
    __dirname + '/src/index.html'
  ])
    // Anexar o arquivo copiado à pasta destino
    .pipe(gulp.dest(__dirname + '/dist'));
});

// Comando para deletar a pasta /dist criada com arquivos copiados
gulp.task('clean', function () {
  del.sync(__dirname + '/src/dist/**');
});

// Concatenar todos os módulos do projeto em um único arquivo js
gulp.task('build:modules', function () {
  return gulp.src(__dirname + '/src/app/**/**/*.module.js')
    //.pipe(uglify()) comentado, necessário implementar arquivo alias
    .pipe(concat('modules/modulesJs.min.js'))
    .pipe(gulp.dest('src/dist'));
});

// Comando para minificar todos os arquivos JS do projeto
gulp.task('build:js', function () {
  return gulp.src(__dirname + '/src/app/**/**/*.js')
    //.pipe(uglify())
    .pipe(concat('js/scripts.min.js'))
    .pipe(gulp.dest('src/dist'));
});

// Comando para minificar todos os arquivos css do projeto
gulp.task('build:css', function () {
  return gulp.src(__dirname + '/src/app/**/**/*/*.css')
    .pipe(uglifycss({
      "maxLineLen": 5000,
      "uglyComments": true
    }))
    .pipe(concat('style/styles.min.css'))
    .pipe(gulp.dest('src/dist'));
});

// Comando para minificar todos os arquivos sass do projeto
gulp.task('build:sass', function () {
  return gulp.src(__dirname + '/src/app/**/lib/style/main.sass')
    .pipe(uglifycss())
    .pipe(concat('styles/sassStyles.min.css'))
    .pipe(gulp.dest('src/dist'));
});

// comando para injetar todos os arquivos minificados no arquivo principal (index.html)
gulp.task('inject:project', function () {
  var resources = gulp.src(__dirname + '/src/dist/*/**', { read: false });
  return gulp.src(__dirname + '/src/index.html')
    .pipe(inject(resources,
      { ignorePath: '/src' }
    ))
    .pipe(gulp.dest(__dirname + '/src'));
});

// Sequence para executar os comandos na sequencia descrita abaixo.
var runSequence = require('run-sequence');
gulp.task('build', function (done) {
  return runSequence('clean', ['build:modules'],['build:js', 'build:css', 'build:sass'], 'inject:project', done);
});