const {src,dest,watch} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const sync = require("browser-sync").create();
function generateCSS(cb) {
    src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css'))
        .pipe(sync.stream());
    cb();
}

exports.css = generateCSS;


function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('sass/*.scss', generateCSS);
    watch("index.html").on('change', sync.reload);
    cb();
}

exports.sync = browserSync;