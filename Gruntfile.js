module.exports = function(grunt) {

<<<<<<< HEAD
    // Configure the Grunt tasks
    grunt.initConfig({

        // Compile the styles
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'assets/css/main.css': 'src/less/main.less'
                }
            }
        },

        // Launch the web server
        connect: {
            server: {
                options: {
                    target: 'http://localhost:5045',
                    port: 5045,
                    livereload: 35729,
                    open: true
=======
    // Initialize the grunt configuration
    grunt.initConfig({

        // Import the package configuration
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            bootstrapIcons: {
                files: [
                    {
                        cwd: 'bower_components/bootstrap/dist/fonts',
                        expand: true,
                        src: ['*'],
                        dest: 'assets/fonts/',
                        filter: 'isFile'
                    }
                ]
            }
        },

        less : {
            masega: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'assets/css/masega.css': 'src/less/masega.less'
>>>>>>> 42eefc99516ee0df69c82f73eef924a97dfe404b
                }
            }
        },

<<<<<<< HEAD
        // Watch the filesystem for changes
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            }
        },

    });

    // Load the Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Tasks
    grunt.registerTask('serve', ['connect:server', 'watch']);
};
=======
        watch: {
            less: {
                files: ['src/less/*.less'],
                tasks: ['less']
            }
        }

    });

    // Node Packages
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks
    grunt.registerTask('build', ['less']);
    grunt.registerTask('default', ['build']);
};
>>>>>>> 42eefc99516ee0df69c82f73eef924a97dfe404b
