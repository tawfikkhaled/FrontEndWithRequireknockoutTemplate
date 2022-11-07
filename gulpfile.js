"use strict";
exports.__esModule = true;
var gulp = require("gulp");
var ts = require("gulp-typescript");
var less = require("gulp-less");
var project = ts.createProject("./tsconfig.json");
var srcFiles = "./src/**/*.ts";
var dest = "./dist";//if using independently
var dest2 = "../backend/dist/public/dict";//if using with backend in ../backend

var staticFiles = "./src/**/*.{json,html,css,js}";
var lessFiles = "./src/**/*.less";

function watchTs() {
    return gulp.watch(srcFiles, tscompile);
}
function tscompile() {
    let stream = gulp.src(srcFiles).pipe(project())
     return stream.pipe(gulp.dest(dest2)).pipe(gulp.dest(dest))
}
function staticFilesWatchAndCopy() {
    return gulp.watch(staticFiles, copyStaticFiles);
}
function copyStaticFiles() {
    let stream = gulp.src(staticFiles)
     return stream.pipe(gulp.dest(dest2)).pipe(gulp.dest(dest))
}

function lessFilesWatchAndCopy() {
    return gulp.watch(lessFiles, lessCompile);
}
function lessCompile() {
    let stream = gulp.src(lessFiles).pipe(less())
    return stream.pipe(gulp.dest(dest)).pipe(gulp.dest(dest2))
}
exports.watch = gulp.series(tscompile, copyStaticFiles, lessCompile,
    gulp.parallel(watchTs, staticFilesWatchAndCopy, lessFilesWatchAndCopy));

