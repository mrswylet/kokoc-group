const { src, dest, series, parallel, watch } = require('gulp');
const del = require('del');
const path = require('path');

const { buildJs, devJs } = require('./gulpfiles/bundleJsFront');
const { buildCss, devCss } = require('./gulpfiles/bundleCssFront');


exports.build = series(deleteDirectory, parallel(buildJs, buildCss));

exports.dev = series(deleteDirectory, parallel(devJs, devCss), function () {
	watch('./src/scss/**/*.*', devCss);
	watch('./src/js/**/*.*', devJs);
});

function deleteDirectory(cb) {
	let dir = path.resolve(__dirname, './dist');
	del.sync(dir, {force: true});
	cb();
}
