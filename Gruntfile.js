module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bumpup: 'package.json',
    tagrelease: 'package.json',
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/lib/simple.js.validator.js',
        dest: 'dist/lib/simple.js.validator.min.js'
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'lib/simple.js.validator.ts', 'tests/validator.test.ts']
    },
    run: {
      test_coverage: {
        cmd: 'npm',
        args: ['run', 'test:coverage']
      },
      lint_nofix: {
        cmd: 'npm',
        args: ['run', 'lint:nofix']
      },
      build: {
        cmd: 'npm',
        args: ['run', 'build']
      },
      docs: {
        cmd: 'npm',
        args: ['run', 'docs']
      }
    },
    'gh-pages': {
      options: {
        base: 'docs'
      },
      src: ['**/*']
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-git-describe');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-tagrelease');

  // Register task(s).
  grunt.registerTask('default', ['run:lint_nofix', 'run:test_coverage', 'run:build', 'uglify', 'run:docs', 'gh-pages']);
  //grunt.registerTask('travisCI', ['run:lint_nofix','run:test_coverage']);
  grunt.registerTask('travisCI', ['run:test_coverage']);
  grunt.registerTask('docsAndPages', ['run:docs', 'gh-pages']);
  grunt.registerTask('lint', ['run:lint_nofix']);
  grunt.registerTask('test', ['run:test_coverage']);
  grunt.registerTask('build', ['run:build']);
  grunt.registerTask('ghPages', ['gh-pages']);
  grunt.registerTask('docs', ['run:docs']);
  grunt.registerTask('min', ['uglify']);

  // Release alias task
  grunt.registerTask('bump', function (type) {
    type = type ? type : 'patch';
    grunt.task.run('bumpup:' + type); // Bump up the package version
    // still need to push the commit up
  });

  // Release alias task
  grunt.registerTask('release', function (type) {
    grunt.task.run('run:lint_nofix');
    grunt.task.run('run:test_coverage');
    grunt.task.run('uglify');
    //grunt.task.run('jsduck');
    //grunt.task.run('gh-pages');
    grunt.task.run('tagrelease');
    // still need to push the commit up
  });
};
