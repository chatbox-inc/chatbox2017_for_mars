"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

const {src,dest,jade_option} = global;

gulp.task("sitemap",()=> {
    return gulp.src(`${dest}/**/*.html`,{
        read: false
    })
        .pipe($.sitemap({
            siteUrl: "http://chatbox-inc.com"
        }))
        .pipe(gulp.dest(`${dest}/`));
});

global.build.push("sitemap")
