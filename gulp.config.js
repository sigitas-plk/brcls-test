module.exports = function () {
    var rootDir = 'src/';
    var outDir = 'app/';
    return {
        sass: {
            in: rootDir + 'sass/*.scss',
            watch: [rootDir + 'sass/**/*', rootDir + 'sass/*.scss'],
            out: outDir+'css',
            sassOpts: {
                outputStyle: 'compressed', //values: nested, expanded, compact, compressed
                precision: 3,
                errLogToConsole: true,
                sourceComments: false
            },
            pleeeaseOpts: {
                sass: false,
                minifier: false,
                autoprefixer: {browsers: ['last 3 version', '>1%']},
                pseudoElements: true,
                mqpacker: true
            }
        },
        js: {
            in: [rootDir + 'js/*.js', rootDir+'js/components/*.js'],
            watch: [rootDir + 'js/**/*', rootDir + 'js/*.ts', rootDir+'components/*.js'],
            out: outDir + 'components',
            jsLintOpts: {

            }
        },
        html: {
            in: rootDir + 'html/*.html',
            watch: [rootDir + 'html/partials/*.html', rootDir + 'html/*.html'],
            out: outDir,
            templates: {
                in: rootDir + 'html/components/*.html',
                watch: rootDir + 'html/components/*.html',
                out: outDir + 'components'
            }
        },
        browserSync: {
            server: {
                baseDir: './app',
                index:"index.html"
            },
            open: false,
            notify: true,
            port: 3010,
            ui: false
        }
    }
};