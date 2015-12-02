/*!
 * https://packagecontrol.io/packages/SCSS <-- drop into packages dir, restart sublime
 * gulp
 * $ gem install sass
 * $ gem install compass --pre
 * $ compass init
 * $ sudo npm cache clean
 * $ sudo npm install -g n
 * $ sudo n stable
 * $ npm init
 * $ npm install -g gulp
 * $ npm install gulp gulp-ruby-sass gulp-compass gulp-autoprefixer gulp-sourcemaps gulp-minify-css gulp-uglify del browser-sync gulp-useref gulp-if run-sequence --save-dev
 */

 // Load plugins
var gulp = require('gulp')
	,sass = require('gulp-ruby-sass')
	,compass = require('gulp-compass')
	,autoprefixer = require('gulp-autoprefixer')
	,sourcemaps = require('gulp-sourcemaps')
	,minifyCSS = require('gulp-minify-css')
	,uglify = require('gulp-uglify')
	,browsersync = require('browser-sync')
	,del = require('del')
	,useref = require('gulp-useref')
	,gulpIf = require('gulp-if')
	,runSequence = require('run-sequence')
	,cp           = require('child_process');


// Development Tasks 
// -----------------

 /**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browsersync.notify("Jekyll build complete...");
	return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
	.on('close', done);
});

// Live reload task via Browser Sync
gulp.task('browsersync', function() {
	browsersync({
		server: {
			baseDir: "_site"
		}
	});
});

// Compile our SASS into CSS into one minified file
gulp.task('sass', function() {
	return sass('_sass/styles.scss', { compass: true, sourcemap: true })
	    .pipe(autoprefixer('last 2 version'))
	    .pipe(gulp.dest('_assets/css/'))
	    .pipe(browsersync.reload({stream:true}));
});

// Watchers: Rebuild jekyll site and reload browser as we develop
gulp.task('watch', ['browsersync'], function() {

	gulp.watch(['_includes/*.html', '_layouts/*.html', '_posts/*', '_sass/**/*.scss', 'index.html', './**/*.html', '_assets/**/**/*'], ['jekyll-build'], browsersync.reload);

});


// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function(){
  var assets = useref.assets();

  return gulp.src('./*.html')
    .pipe(assets)
    // Minifies only if it's a CSS file
    .pipe(gulpIf('_assets/*.css', minifyCSS()))
    // Uglifies only if it's a Javascript file
    .pipe(gulpIf('_assets/*.js', uglify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('_site/'))
});

// Copy images to our build folder
// gulp.task('images', function() {
//   return gulp.src('assets/img/**/*')
//   .pipe(gulp.dest('build/img'));
// });

// Copy fonts to our build folder
// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//   .pipe(gulp.dest('build/fonts'));
// })

// Clean up! Delete the previous build
// gulp.task('clean', function() {
//     return del('build');
// });


// Build Tasks
// -----------

// Build: Clean and then prepare assets for uploading to server
gulp.task('build', function() {
    runSequence( ['sass', 'useref'] );
});

gulp.task('default', ['browsersync', 'watch', 'useref']);