const path = require('path');
const gulp = require('gulp');
const rimraf = require('rimraf');
gulp.task('copy', done => {
  console.log('[Parallel] copy theme to root');
  rimraf.sync(path.join(__dirname, './theme/*'));
  gulp
    .src(['src/theme/*theme*.js'])
    .pipe(gulp.dest(path.join(__dirname, './theme')));
  done();
});

gulp.task('copy-docs', done => {
  console.log('[Parallel] copy theme to docs-dist.');
  rimraf.sync(path.join(__dirname, './docs-dist/theme/*'));
  gulp
    .src(['src/theme/*theme*.js'])
    .pipe(gulp.dest(path.join(__dirname, './docs-dist/theme')));
  done();
});
