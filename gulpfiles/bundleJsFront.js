const { src, dest, series, parallel } = require('gulp');
//const fs = require('fs');
const path = require('path');
//const md5 = require("gulp-md5");
//const through = require('through2');
const uglifyJs = require('gulp-uglifyjs');
//const UglifyJS = require('uglify-js');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

exports.buildJs = buildJs;
exports.devJs = devJs;

let path_js = path.resolve(__dirname, '../src/js/*.js');

function buildJs() {
	return src(path_js)
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglifyJs())
		.pipe(concat('script.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(path.resolve(__dirname, '../dist/js')))
}

function devJs(){
	return src(path_js)
		.pipe(concat('script.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest(path.resolve(__dirname, '../dist/js')))
}