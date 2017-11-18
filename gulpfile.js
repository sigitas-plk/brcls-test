(function () {
    'use strict';
    var gulp = require('gulp');
    var browserSync = require('browser-sync');

    //lazy load gulp plugins
    var $ = require('gulp-load-plugins')({lazy: true});

    //configuration files
    var config = require('./gulp.config.js')();

//===== Default Task | File Watch ========
    gulp.task('default', ['compile-css', 'compile-html', 'compile-js', 'move-templates','start-browserSync'], function () {
        gulp.watch([config.sass.watch], ['compile-css']);
        gulp.watch([config.js.watch], ['compile-js', browserSync.reload]);
        gulp.watch([config.html.watch], ['compile-html', browserSync.reload]);
        gulp.watch([config.html.templates.watch], ['move-templates', browserSync.reload]);
    });
//====== Tasks ======================
    gulp.task('start-browserSync', function () {
        browserSync(config.browserSync);
    });

    gulp.task('compile-css', function () {
        gulp.src(config.sass.in)
            .pipe($.sass(config.sass.sassOpts))
            .pipe($.pleeease(config.sass.pleeeaseOpts))
            .pipe(gulp.dest(config.sass.out))
            .pipe(browserSync.reload({stream: true}));
    });

    gulp.task('compile-js', function () {
        gulp.src(config.js.in)
            .pipe(gulp.dest(config.js.out))
    });

    gulp.task('compile-html', function () {
        gulp.src(config.html.in)
            .pipe($.preprocess())
            .pipe(gulp.dest(config.html.out));
    });

    gulp.task('move-templates', function () {
        gulp.src(config.html.templates.in)
            .pipe(gulp.dest(config.html.templates.out));
    });
//==== Error Handling ==========
    var gulp_src = gulp.src;
    gulp.src = function () {
        return gulp_src.apply(gulp, arguments)
            .pipe($.plumber(function (error) {
                $.util.log($.util.colors.red('Error( ' + error.plugin + ' ):' + error.message));
                this.emit('end');
            }));
    };
}());