var gulp       = require('gulp'),
    ts         = require('gulp-typescript'),
    merge      = require('merge2'),
    mocha      = require('gulp-mocha'),
    sourcemaps = require('gulp-sourcemaps'),
    tsd        = require('gulp-tsd'),
    gutil      = require('gulp-util'),
    del        = require('del'),
    gsync       = require('gulp-sync')(gulp),
    bump       = require('gulp-bump');

var PATHS = {
    lib: 'lib',
    build: 'build',
    test: 'test'
};

var tsProject = ts.createProject({
    declarationFiles: true,
    noEmitOnError: true,
    module: 'commonjs',
    target: 'es5',
    sortOutput: true,
    typescript: require('typescript') //usefull during typescript 1.5 alpha
});


/**
 * BUMP tasks
 */
gulp.task('bump', function() {
    gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest('./'));
});
gulp.task('bump:minor', function() {
    gulp.src('./package.json')
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
});
gulp.task('bump:major', function() {
    gulp.src('./package.json')
        .pipe(bump({type: 'major'}))
        .pipe(gulp.dest('./'));
});

/**
 * BUILD task
 */
gulp.task('build', function() {
    var tsResult = gulp.src([
        'cli.ts',
        PATHS.lib + '/**/*.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
        tsResult.dts.pipe(gulp.dest(PATHS.build + '/definitions')),
        tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(PATHS.build + '/js'))
    ]);
});
gulp.task('build:watch', ['build'], function() {
    gulp.watch([
        PATHS.lib + '/**/*.ts'
    ], ['build']);
});
gulp.task('tsd:install', function(callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});



/**
 * TEST tasks
 */
gulp.task('test', function () {
    return gulp.src(PATHS.test + '/**/*.js', {read: false})
        .pipe(mocha({
            reporter: 'spec',
            globals: {
                should: require('should')
            }
        }))
        .on('error', gutil.log);
});
gulp.task('test:watch', ['test'], function () {
    gulp.watch([
        PATHS.lib + '/**/*.js',
        PATHS.test + '/**/*.js'
    ], ['test']);
});


gulp.task('clean', function(cb) {
    del([
        'build',
        'typings'
    ], cb);
});


gulp.task('ci', gsync.sync(['clean', 'tsd:install', 'build', 'test']));
