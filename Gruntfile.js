module.exports = function(grunt) {
    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            static_files: {
                files: ['**/*.html', '**/*.css', '**/*.js'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['public_html/**/*.html'],
                tasks: ['htmlhint']
            },
            js: {
                files: ['public_html/assets/javascripts/**/*.js'],
                tasks: ['jshint']
            },
            scss: {
                files: ['public_html/assets/sass/**/*.scss'],
                tasks: ['sass']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'public_html'
                }
            }
        },
        htmlhint: {
            files: {
                src: ['public_html/**/*.html']
            },
            options: {
                'tag-pair': true
            }
        },
        jshint: {
            files: {
                src: ['public_html/assets/javascripts/**/*.js']
            },
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public_html/assets/stylesheets/style.css': 'public_html/assets/sass/style.scss'
                }
            }
        },
        cssmin: {
            files: ['public_html/assets/stylesheets/**/*.css'],
            tasks: ['cssmin']
        },
        cssmin: {
            minify: {
                files: {
                    'public_html/assets/stylesheets/style.min.css': ['public_html/assets/stylesheets/**/*.css']
                }
            }
        }
    });

    // plugins
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // tasks
    grunt.registerTask('default', ['connect', 'watch', 'cssmin']);
};