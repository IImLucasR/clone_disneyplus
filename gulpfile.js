const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
    return gulp.src("./src/styles/*.scss")
        .pipe(sass({ outputStyle: "compacted" }))
        .pipe(gulp.dest("./dist/css"));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles)) // [] <- Dentro aqui será a função que será executada, ou gulp.parallel
}