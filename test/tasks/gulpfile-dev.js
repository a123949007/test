module.exports = function(gulp, plugins){
    const browserSync = require('browser-sync'),
          reload = browserSync.reload;

    console.log(plugins);
    const config = {
        js: {
            watch: ['src/script/**', '!src/script/lib/**'],
            from: ['src/script/**', '!src/script/lib/**'],
            to: 'dist/script'
        },
        html:{
            watch: ['src/**/*.html'],
            from: ['src/**/*.html'],
            to: 'dist/'
        },
        css: {
            watch: ['src/sass/**/*.scss'],
            from: ['src/sass/**/*.scss'],
            to: 'dist/css/',
        }
    }

    // 编译sass
    gulp.task('compile_sass', function(){
        return gulp.src(config.css.from)
            .pipe(plugins.plumber({errorHandler: plugins.notify.onError({
                title: 'SASS编译错误',
                message: "Error: <%= error.message %>"
            })}))
            .pipe(plugins.sass())
            .pipe(plugins.plumber.stop())
            .pipe(plugins.concat('page.css'))
            .pipe(gulp.dest(config.css.to))
    })

    gulp.task('move_tpl', function(){
        return gulp.src(config.html.from)
            .pipe(gulp.dest(config.html.to));
    });

    // 编译ES6
    gulp.task('compile_es6', function(){
        return gulp.src(config.js.from)
            .pipe(plugins.plumber({errorHandler: plugins.notify.onError({
                title: 'ES6编译错误',
                message: "Error: <%= error.message %>"
            })}))
            .pipe(plugins.babel({
                presets: ['es2015']
            }))
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.js.to));
    });

    gulp.task('watch', function(){
        gulp.watch(config.js.watch, ['compile_es6']).on('change', reload);
        gulp.watch(config.html.watch, ['move_tpl']).on('change', reload);
        gulp.watch(config.css.watch, ['compile_sass']).on('change', reload);
    });

    gulp.task('clean', function(){

    })


    gulp.task('copy', function(){
        return gulp.src('')
    })

    gulp.task('server', function(){
        browserSync.init({
            server: {
                baseDir: './dist',
                index: 'index.html'
            },
            ui: false,
            directory: false,
            port: 8090,
            open: false
        });
    });

    gulp.task('dev', ['server', 'compile_sass', 'compile_es6', 'watch', 'move_tpl'], function(){
        // do sth
    });
}
