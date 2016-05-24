// USE ES6 FEATURES IN THIS FILE
'use strict';

var SETUP = {
    SCRIPTS_TO_INCLUDE: [
                    'libs/scripts/external/*.js',
                    'libs/scripts/initialize/namespace.js',
                    'libs/scripts/initialize/namespace.jquery.js',
                    'libs/scripts/extension/*.js',
                    'libs/scripts/utilities/*.js',
                    'libs/scripts/components/**/*.js', 'libs/scripts/components/*.js',
                    'libs/scripts/init.js'
                ],
    ICON_FORMATS: ['ttf', 'eot', 'woff', 'woff2', 'svg']
};

var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    connect = require('gulp-connect'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    svgless = require('gulp-svg-less'),
    svgmin = require('gulp-svgmin'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    jsdoc = require('gulp-jsdoc3');

// JS concate, minify, sourcemap
gulp.task('script', function() {
    return gulp.src(SETUP.SCRIPTS_TO_INCLUDE)
        //.pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        //.pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// // Check JavaScript code style with jscs
// gulp.task('jscs', function() {
//     return gulp.src(SETUP.SCRIPTS_TO_INCLUDE)
//       .pipe(jscs())
//       .pipe(jscs.reporter())
//       .pipe(jscs.reporter('fail'));
// });

// // Check JavaScript code with jshint
// gulp.task('jshint', function() {
//     return gulp.src(SETUP.SCRIPTS_TO_INCLUDE)
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// // Generate font icons and less from SVG
// gulp.task('iconfont', function() {
//     gulp.src(paths.iconfontsrc)
//     .pipe(iconfontCss({
//         fontName: fontName,
//         path: paths.lessicontemplate,
//         targetPath: paths.lessicontarget,
//         fontPath: paths.iconfont,
//         cssClass: fonticoncssprefix
//     }))
//     .pipe(iconfont({
//         fontName: fontName,// required
//         prependUnicode: true, // recommended option
//         formats: SETUP.ICON_FORMATS, // default, 'woff2' and 'svg' are available
//         timestamp: runTimestamp // recommended to get consistent builds when watching files
//     }))
//    .pipe(gulp.dest(paths.fontdest));
// });

// // SVG to less mixins
// gulp.task('iconsvg', function() {
//     return gulp
//         .src(paths.iconsvgsrc)
//         .pipe(svgmin())
//         .pipe(svgless({
//             fileName: svglessfile,
//             mixinPrefix: svgmixinprefix,
//             addSize: false,
//             outputMixin: true
//         }))
//         .pipe(gulp.dest(paths.svgfontdest));
// });

// Less to CSS, concate, minify, sourcemap
gulp.task('style', function() {
    return gulp.src('libs/styles/main.less')
        //.pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('main.css'))
        //.pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// Task : html
gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

// Task : watch
gulp.task('watch', function() {
    gulp.watch(['index.html'], ['html']);
    gulp.watch(['libs/styles/**/*.less'], ['style']);
    gulp.watch(['libs/scripts/**/*.js'], ['script']);
});

// Task : Connect server
gulp.task('connect', function() {
    return connect.server({
        root: 'dist/',
        port: 8001,
        host: 'localhost',
        livereload: true
    });
});

// Task : fonts
//gulp.task('fonts', ['iconfont', 'iconsvg']);

// Task : Default
gulp.task('default', ['html', 'style', 'script', 'connect', 'watch']);
