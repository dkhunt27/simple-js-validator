module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'git-describe': {
            options: {
                prop: 'meta.revision'
            },
            me: {}
        },
        bumpup: 'package.json',
        tagrelease: 'package.json',
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'lib/validator.js',
                dest: 'lib/validator.min.js'
            }
        },
        jshint: {
            all: ["Gruntfile.js", "lib/validator.js", "test/validator.Unit.Tests.js"]
        },
        mochaTest: {
            test: {
                options: {
                    reporter: "tap"
                },
                src: ["test/**/*.js"]
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
                    "lib/validator.js"
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
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jsduck');
    grunt.loadNpmTasks('grunt-git-describe');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-tagrelease');

    // Register task(s).
    grunt.registerTask('default', ['jshint','mochaTest','uglify','jsduck','gh-pages']);
    grunt.registerTask('travisCI', ['jshint','mochaTest']);
    grunt.registerTask('docs', ['jsduck','gh-pages']);
    grunt.registerTask('hint', ['jshint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('ghPages', ['gh-pages']);
    grunt.registerTask('jsDuck', ['jsduck']);
    grunt.registerTask('min', ['uglify']);

    grunt.registerTask('tag-revision', 'Tag the current build revision', function () {
        grunt.task.requires('git-describe');

        grunt.file.write('version.json', JSON.stringify({
            version: grunt.config('pkg.version'),
            revision: grunt.config('meta.revision'),
            date: grunt.template.today()
        }));
    });

    grunt.registerTask('version', ['git-describe', 'tag-revision']);

    // Release alias task
    grunt.registerTask('release', function (type) {
        type = type ? type : 'patch';
        grunt.task.run('jshint');
        grunt.task.run('mochaTest');
        grunt.task.run('uglify');
        grunt.task.run('jsduck');
        grunt.task.run('gh-pages');
        grunt.task.run('bumpup:' + type); // Bump up the package version
        grunt.task.run('tagrelease');     // Commit & tag the changes from above
    });

};