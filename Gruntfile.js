module.exports = function(grunt) {
    "use strict";

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
                src: 'lib/simple.js.validator.js',
                dest: 'lib/simple.js.validator.min.js'
            }
        },
        jshint: {
            all: ["Gruntfile.js", "lib/simple.js.validator.ts", "tests/validator.test.ts"]
        },
        run: {
            test_coverage: {
              cmd: 'npm',
              args: [
                'run',
                'test:coverage',
                '--silent'
              ]
            },
            lint_nofix: {
                cmd: 'npm',
                args: [
                  'run',
                  'lint:nofix',
                  '--silent'
                ]
              }
        },
        'gh-pages': {
            options: {
                base: 'docs'
            },
            src: ["**/*"]
        },
        jsduck: {
            main: {
                // source paths with your code
                src: [
                    "lib/simple.js.validator.js"
                ],

                // docs output dir
                dest: "docs",

                // extra options
                options: {
                    categories: "jsduckCategories.json",
                    'warnings': ["-link","-no_doc","-link_ambiguous"]
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-run');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jsduck');
    grunt.loadNpmTasks('grunt-git-describe');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-tagrelease');

    // Register task(s).
    grunt.registerTask('default', ['run:lint_nofix','run:test_coverage','uglify','jsduck','gh-pages']);
    //grunt.registerTask('travisCI', ['run:lint_nofix','run:test_coverage']);
    grunt.registerTask('travisCI', ['run:test_coverage']);
    grunt.registerTask('docs', ['jsduck','gh-pages']);
    grunt.registerTask('lint', ['run:lint_nofix']);
    grunt.registerTask('test', ['run:test_coverage']);
    grunt.registerTask('ghPages', ['gh-pages']);
    grunt.registerTask('jsDuck', ['jsduck']);
    grunt.registerTask('min', ['uglify']);
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