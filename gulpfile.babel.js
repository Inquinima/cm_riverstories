// Set Sourcemaps and learn to use it

// Q: What does all that do?
// A: Takes files from 'app' folder and builds HTML from Pug, CSS from SCSS, JS.
// Using BrowserSync+Watcher function to keep track of any change
// and auto-refresh page to display changes.
import gulp from 'gulp';
import { task, src, dest, watch, parallel, series } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass( dartSass );
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import browserSync from 'browser-sync';
import { init, reload } from 'browser-sync';
import { sync } from 'del';
import autoprefixer from 'gulp-autoprefixer';
import pug from 'gulp-pug';
import nu from 'gulp-html';
import run from 'gulp-run';
    
// Converts SCSS to CSS and writes sourcemaps to separate folder.
task('scss', function(){
  return src(['app/scss/**/*.scss'])
    // .pipe(sourcemaps.init())
    // .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.write('./maps'))
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer({
      browsers: ['last 8 versions']
    }))
    .pipe(dest('app'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(gulp.dest('app/assets/css'))
    .pipe(reload({stream: true}))
});

// builds external plugins CSS libraries used.
// You have to manually add path to plugin's CSS if there is any.
task('css', function(){
  return src([
    'node_modules/tailwindcss/base.css',
    'node_modules/tailwindcss/components.css',
    'node_modules/tailwindcss/utilities.css',
    // 'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    // 'node_modules/magnific-popup/dist/magnific-popup.css'
    ])
    .pipe(concat('_libs.scss'))
    .pipe(dest('app/scss'))
    .pipe(reload({stream: true}));
});

// builds external plugins JS libraries used.
// You have to manually add path to plugin's JS if there is any.
task('js', function(){
  return src([
    'node_modules/lozad/dist/lozad.min.js',
    'node_modules/slick-carousel/slick/slick.js',
    // 'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
    // 'node_modules/simple-parallax-js/dist/simpleParallax.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(dest('app/assets/js'))
    .pipe(reload({stream: true}));
});
// watches for JS changes, reloads page if there was any.
task('script', function(){
  return src('app/js/*.js')
  .pipe(reload({stream: true}));
});

// watches for HTML changes, reloads page if there was any.
task('html', function(){
  return src('app/*.html')
  .pipe(reload({stream: true}));
});

// gulp.task('tailwinding', function(){
//   return gulp.src('app/tailwind.css')
//   .pipe(browserSync.reload({stream: true}));
// });

// Builds HTML from Pug files.
task('pug', function(){
  return src('app/*.pug')
    .pipe(pug({
        pretty:true
      })
    )
    .pipe(dest('app'));
});

task('tailwind', function() {
  return run('npx tailwindcss -i ./app/style.css -o ./app/tailwind.css --watch').exec();
  // return true;
});

// Watches your development folder.
task('browser-sync', function() {
  init({
    server: {
      baseDir: "app/"
    }
  });
});

// Uncomment this to use tunneling, comment previous task.
// task('browser-sync', function(){
//   browserSync.init({
//       server: {
//           baseDir: "app/"
//       },
//       online: true,
//       tunnel: 'quin'
//   })
// });

task('nuValidity', function(){
  return src('app/*.html')
    .pipe(nu());
    // .pipe(gulp.dest());
});

// Watcher function.
task('watch', function(){
  watch(['app/*.pug', 'app/components/*.pug'], parallel('pug'));
  watch('app/scss/**/*.scss', parallel('scss'));
  watch('app/*.html', parallel('html', 'nuValidity'));
  watch('app/js/*.js', parallel('script'));
});

// Deletes previous dist version to build following version safely.
task('clean', async function(){
  sync('dist');
});

// Building tasks.
task('export', async function(){
  let buildHtml = src('app/**/*.html')
    .pipe(dest('dist'));

  let BuildCss = src('app/**/*.css')
    // .pipe(gulp.dest('dist/assets/css'));
    .pipe(dest('dist'));

  let BuildJs = src('app/assets/js/**/*.js')
    .pipe(dest('dist/assets/js'));
    
  let BuildFonts = src('app/assets/fonts/**/*.*')
    .pipe(dest('dist/assets/fonts'));

  let BuildImg = src('app/assets/img/**/*.*')
    // .pipe(tinypng({
    //   key: 'wT3gZYM1NgHS23Zr6np9RzTrN86d7tqz',
    //   sigFile: 'images/.tinypng-sigs',
    //   log: true
    // }))
    .pipe(dest('dist/assets/img'));   
});

// Defined series of tasks: cleans 'dist' folder and then builds your project.
// Launch command: 'guld build' 
task('build', series('clean', 'export'));

// Launch command: 'gulp'
task('default', parallel('css', 'scss', 'html', 'script', 'js','browser-sync', 'watch'));