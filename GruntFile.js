module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // To download bower dependencies in bower_components folder
        'bower-install-simple': {
            options: {
                color: false,
                production: false,
                directory: 'bower_components'
            }
        },
        // To includes bower dependencies in  _includes/head.html file
        wiredep:{
            dev : {
                src : [ '_includes/head.html', '_includes/foot.html'],
                ignorePath : /\.\./,
                // ignorePath : /\.\.\//, would write dependencies without the leading /
                exclude: []
            }
        },
        // To include js/*.js in _includes/foot.html file
        includeSource: {
            options: {
            },
            dev: {
                files: {
                    '_includes/foot.html': '_includes/foot.html'
                }
            },
            dist: {
                files: {
                    'dist/index.html': 'index.tpl.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-install-simple');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-wiredep');

    // Default task(s).
    grunt.registerTask('build:dev', ['bower-install-simple', 'includeSource:dev', 'wiredep:dev', ]);
};