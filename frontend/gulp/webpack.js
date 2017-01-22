"use strict";

const gulp = require("gulp");
const $ = require("gulp-load-plugins")();
const webpack = require("webpack")

const {src,dest,webpack_config} = global;

const webpackDevConfig = {
    "entry": {
        "common": `${src}assets/js/common.js`
    },
    "output": {
        "filename": `[name].bundle.js`
    },
    externals: {
//                "vue": "Vue"
    },
    module: {
        loaders: [
            { test: /\.js/,exclude: /node_modules/, loader: "babel" ,query:{presets:"es2015"}},
            { test: /\.html/, loader: "html" },
            { test: /\.vue/, loader: "vue" ,query:{presets:"es2015"}},
        ]
    },
    resolve: {
        extensions:["",".js"]
    },
    plugins:[
        //new webpack.optimize.UglifyJsPlugin()
    ],
    dev: true,
    devtool: "source-map"
}

let options = require("../../webpack.config")

gulp.task("webpack",()=> {
    let srcPattern = [
        `${src}assets/js/**/*.js`
    ];
    return gulp.src(srcPattern)
        .pipe($.plumber({
            errorHandler: $.notify.onError('<%= error.message %>')
        }))
        .pipe($.webpack(options,webpack))
        .pipe(gulp.dest(`${dest}assets/js/`));
});

gulp.task("webpack:watch",()=>{
    let target = [
        `${src}assets/js/**/*`,
    ];
    return gulp.watch(target,["webpack"])
});

global.watch.push("webpack:watch")
global.build.push("webpack")
