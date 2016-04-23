module.exports = function(grunt) {
    // grunt tasks setting
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['./**/*.html'],
                tasks: ['validation']
            },
            scss: {
                files: ['assets/sass/**/*.scss'],
                tasks: ['sass']
            }
        },
        connect: {
            server: {
                options: {
                    port: 7070,
                    hostname: 'localhost'
                }
            }
        },
        validation: {
            files: ['./**/*.html', '!./node_modules/**/*.html'],
            options: {
                reset: true,
                doctype: 'HTML5',
                charset: 'utf-8',
                stoponerror: false
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/stylesheets/style.css': 'assets/sass/style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // grunt tasks regist
    grunt.registerTask('default', ['connect','watch']);
};