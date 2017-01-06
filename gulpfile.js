// Include gulp
var gulp = require("gulp");

// Include Our Plugins
var jshint = require("gulp-jshint");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var moreCSS = require("gulp-more-css");
var cssnano = require("gulp-cssnano");
var jade = require("gulp-jade");
var livereload = require("gulp-livereload");

// Lint Task
gulp.task("lint", function() {
  return gulp.src("src/js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
});

// Compile Our Sass
gulp.task("sass", function() {
  return gulp.src("src/scss/*.scss")
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"))
});

// Concatenate & Minify JS
gulp.task("scripts", function() {
  return gulp.src("src/js/*.js")
    // .pipe(rename("common.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
});

// Minify CSS
gulp.task("minifys", function() {
  return gulp.src("dist/css/*.css")
    .pipe(cssnano())
    .pipe(gulp.dest("dist/css"))
});

gulp.task("template", function() {
  var locals = new Object();

  gulp.src("src/template/*.jade")
    .pipe(jade({
      locals: locals
    }))
    .pipe(gulp.dest("dist/"))
});

// Watch Files For Changes
gulp.task("watch", function() {
  livereload.listen();
  gulp.watch("src/js/*.js", ["lint", "scripts"]);
  gulp.watch("src/scss/*.scss", ["sass"]);
  gulp.watch("src/template/*.jade", ["template"]);
});

// Default Task
gulp.task("default", ["lint", "sass", "scripts", "template", "watch"]);
