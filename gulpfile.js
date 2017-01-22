const gulp = require("gulp");
const runSequence = require("run-sequence");

global.watch = [];
global.build = [];

global.src = "./frontend/";
global.dest = "./public/";

// require("./frontend/gulp/pug.js")
require("./frontend/gulp/jade.js")
require("./frontend/gulp/sass.js")
// require("./frontend/gulp/webpack.js")
require("./frontend/gulp/styleguide.js")
require("./frontend/gulp/browserSync.js")
require("./frontend/gulp/yaml.js")

const {src,dest} = global;

gulp.task("image",()=>{
    gulp.src(src + "assets/images/**/*")
        .pipe(gulp.dest(dest + "assets/images/"))
    gulp.src(src + "assets/images/**/*")
        .pipe(gulp.dest(dest + "../styleguide/assets/images/"))
})

global.build.push("image")

gulp.task("lib",()=>{
    gulp.src(src + "lib/**/*")
        .pipe(gulp.dest(dest + "assets/lib/"))
})

global.build.push("lib")

require("./frontend/gulp/sitemap.js")

gulp.task("watch",global.watch)

gulp.task("build",(cb)=>{
    global.build.push(cb)
    runSequence.apply(this,global.build)
})

gulp.task("default",["watch"])
