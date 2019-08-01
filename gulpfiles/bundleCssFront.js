const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass'); // Sass пакет
const cssnano = require('gulp-cssnano'); // Минификация CSS
const rename = require('gulp-rename'); // Переименование файлов
const autoprefixer = require('gulp-autoprefixer'); // Автоматическое добавление префиксов
//const md5 = require("gulp-md5");
const path = require('path');

exports.buildCss = buildCss;
exports.devCss = devCss;

let path_scss = path.resolve(__dirname, '../src/scss/style.scss');


function buildCss(){
	return src(path_scss)
		.pipe(sass({uotputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(path.resolve(__dirname, '../dist/css')))
}

function devCss(){
	return src(path_scss)
		.pipe(sass({uotputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(path.resolve(__dirname, '../dist/css')))
}
