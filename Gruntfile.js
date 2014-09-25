module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // configure jshint to validate js files -----------------------------------
        jshint: {
          options: {
            reporter: require('jshint-stylish')
          },
          all: ['src/*.js']
        },

        // configure uglify to minify js files -------------------------------------
        uglify: {
          options: {
            banner: '/*\n* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n*/\n'
          }, 
          build: {
            files: {
              'dist/scotchPanels.min.js': 'src/scotchPanels.js'
            }
          }
        },

        // configure watch to auto update ------------------------------------------
        watch: {
          scripts: {
            files: 'src/*.js',
            tasks: ['uglify']
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify']);

};