const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const  minify  =  require ('gulp-minify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

function bs() {
	serveSass();
	browserSync.init({
			server: {
					baseDir: "./"
			},
			socket: {
				domain: "localhost:3000"
			}
	});
	watch("./*.html").on('change', browserSync.reload);
	watch("./sass/**/*.sass", serveSass);
	watch("./sass/**/*.scss", serveSass);
	watch("js/main.js").on('change', browserSync.reload);
};

function css(done) {
	src('css/**/**.css')
			.pipe(autoprefixer({
				cascade: false
			}))
			.pipe(cleanCSS ({ совместимость :  'ie8'}))
			.pipe(dest('build/css'));
	done();
};

// function js(done) {
// 	src(['js/**.js'])
// 		.pipe(minify({
// 			ext: {
// 				min: '.js'
// 			},
// 			ignoreFiles: ['*.min.js']
// 		}))
// 		.pipe(filter('js/*.min.js'))
// 		.pipe(dest('build/js'));
// 	done();
// };

	function js(done) {
	src(['js/**/**.js', '!js/**/**.min.js'])
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(dest('build/js'));
	src('js/**.min.js').pipe(dest('build/js'));
	done();
};

function html(done) {
	src('**.html').pipe(htmlmin({ collapseWhitespace: true})).pipe(dest('build/'))
	done();
}

function php(done) {
	src('**.php').pipe(dest('build/'));
	src('phpmailer/**/**').pipe(dest('build/phpmailer/'));
	done();
}

function fonts(done) {
	src('fonts/**/**').pipe(dest('build/fonts'))
		done();
	}

function imagemin(done) {
	src(['img/**/**/*.jpg', 'img/**/**/*.png'])
	.pipe(tinypng({
		key: 'V2q52Q3BZrYfqFNj1cySy9Gt9n3kRfDQ'
	}))
	.pipe(dest('build/img/'));
	src('img/**/**/*.svg')
	.pipe(dest('build/img/'));
	done();
}

function serveSass() {
	return src('./sass/**/*.sass', './sass/**/*.scss')
    .pipe(sass())
		.pipe(dest('./css'))
		.pipe(browserSync.stream());
};


exports.serve = bs;
exports.build = series(css, js, html, php, fonts, imagemin);