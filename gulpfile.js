const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
// const plumber = require("gulp-plumber");
// const less = require("gulp-less");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const purgecss = require("gulp-purgecss");
const cssnano = require("cssnano");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");
const rev = require("gulp-rev");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
// Development mode
// const devBuild = process.env.NODE_ENV !== "production";

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
  // gulp.watch(paths.scripts.src, gulp.series("js"));
  gulp.watch(paths.scripts.src).on("change", browserSync.reload);
  gulp.watch(paths.html.src).on("change", browserSync.reload);
});

// Local server with Browser sync
gulp.task("serve", () => {
  browserSync.init({
    server: "src"
  });
});

// Just copying html files from src to dist folder
gulp.task("html", () => {
  return gulp.src(paths.html.src).pipe(gulp.dest(paths.html.dest));
});

// Minify CSS
// TODO add Rev
// TODO add Header
gulp.task("min-css", () => {
  // let revName = "main.css?v=" + new Date().getTime().toString();
  return (
    gulp
      .src("src/css/main.css")
      .pipe(
        purgecss({
          content: [paths.html.src],
          // whitelist: ["is-complete"],
          whitelistPatterns: [/is-/]
        })
      )
      .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(
      //   rename({
      //     basename: "main",
      //     suffix: ".min",
      //     extname: ".css",
      //   })
      // )
      // .pipe(rename(revName))
      .pipe(gulp.dest(paths.styles.dest))
  );
});

// Minify JS
// TODO add Rev
// TODO add Header
gulp.task("min-js", () => {
  return (
    gulp
      .src(paths.scripts.src)
      // .src(["src/js/lazyLoad.js", "src/js/tooltip.js", "src/js/main.js"])
      // .pipe(sourcemaps.init())
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe(concat("main.js"))
      .pipe(uglify())
      // .pipe(sourcemaps.write())
      // .pipe(
      //   rename({
      //     basename: "main",
      //     suffix: ".min",
      //     extname: ".js",
      //   })
      // )
      .pipe(gulp.dest(paths.scripts.dest))
  );
});

// Images processing
gulp.task("images", () => {
  return gulp
    .src(files.src.img)
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(dir.build.img));
});

// Clean dist dir
gulp.task("clean", () => {
  return del(["dist/*.html", "dist/css", "dist/js"]);
});

// Static asset rev
gulp.task("rev-css", () => {
  return gulp.src(paths.styles.dest).pipe(rev()).pipe(gulp.dest(paths.styles.dest));
});

gulp.task("default", gulp.parallel("serve", "watch"));
gulp.task("build", gulp.series("clean", "html", "min-css", "min-js"));

// Compile Less into CSS
/*
gulp.task("less", (event) => {
  console.log(event);
  const stream = gulp.src(files.src.lessMain);
  return stream
    .pipe(
      less().on("error", (error) => {
        stream.end();
        console.error(error);
        return "Compile Less error: \n" + error.message;
      })
    )
    .pipe(gulp.dest(dir.src.css))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});
*/
