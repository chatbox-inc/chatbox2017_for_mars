"use strict"

var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var sass = require('gulp-sass');
var outputPath = 'styleguide';

const {src,dest,scss_option} = global;

// サーバを生成するタスク : ウォッチ機能も付くでよ
gulp.task('styleguide:generate', function() {
    let target = [
        `${src}assets/scss/**/*.scss`,
    ];
    gulp.watch(target,['styleguide:build'])
    return gulp.src(src+'assets/scss/**/*.scss')
        .pipe(styleguide.generate({
            title: 'My Styleguide',
            server: true,
            port: 4000,
            rootPath: outputPath,
            overviewPath: 'Styleguide.md',
            enableJade: true
        }))
        .pipe(gulp.dest(outputPath));
});

// サーバを生成せずビルドするだけ
gulp.task('styleguide:generateOnly', function() {
    return gulp.src(src+'assets/scss/**/*.scss')
        .pipe(styleguide.generate({
            title: 'My Styleguide',
            rootPath: outputPath,
            overviewPath: 'Styleguide.md',
            enableJade: true
        }))
        .pipe(gulp.dest(outputPath));
});


gulp.task('styleguide:applystyles', function() {
    return gulp.src(src+'assets/scss/**/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(styleguide.applyStyles())
        .pipe(gulp.dest(outputPath));
});

// スタイルガイドに必要な画像を移動させる
gulp.task('styleguide:image', function(){
    return gulp.src(dest+'/image/**/*.png')
        .pipe(gulp.dest("./styleguide/image"));
});

gulp.task('styleguide:build', ['styleguide:generateOnly', 'styleguide:applystyles']);

gulp.task('styleguide:server', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('styleguide', ['styleguide:build',"styleguide:image"]);

//global.watch.push("styleguide:watch")
//global.build.push("styleguide:generate")
//global.build.push("styleguide:applystyles")
