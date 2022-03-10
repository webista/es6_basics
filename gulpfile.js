const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
sass.compiler = require("node-sass");

// Paths
const paths = {
  html: {
    src: "src/*.html",
    dest: "dist/"
  },
  styles: {
    scss: "src/scss/**/*.scss",
    scssMain: "src/scss/main.scss",
    css: "src/css/",
    dest: "dist/css/"
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/"
  }
};

// Compile Sass into CSS
gulp.task("sass", () => {
  return gulp
    .src(paths.styles.scssMain)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.css))
    .pipe(browserSync.reload({ stream: true }));
});

// Watching .scss, .js, .html files
gulp.task("watch", () => {
  gulp.watch(paths.styles.scss, gulp.series("sass"));
  gulp.watch(paths.scripts.src).on("change", browserSync.reload);
  gulp.watch(paths.html.src).on("change", browserSync.reload);
});

// Local server with Browser sync
gulp.task("serve", () => {
  browserSync.init({
    server: "src"
  });
});

gulp.task("default", gulp.parallel("serve", "watch"));
