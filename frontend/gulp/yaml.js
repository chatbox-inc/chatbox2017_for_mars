"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const {src,dest,jade_option} = global;

gulp.task("yaml",()=> {
    return gulp.src(`${src}../api/news/yml/**/*.yml`)
        .pipe($.yaml({
        }))
        .pipe(gulp.dest(`${dest}/../api/news/json/`));
});

global.build.push("yaml")
