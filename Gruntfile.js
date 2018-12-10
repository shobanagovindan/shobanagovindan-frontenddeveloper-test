module.exports = function(grunt) {

		grunt.initConfig({

				pkg: grunt.file.readJSON('package.json'),

				
        less: {
          /* build css into styleguide folder for snippet demonstation purposes */
          options: {
            compress: true
          },
          
          desktop: {
            files: {
              "../RecipePage/styles/style.css": "../RecipePage/styles/less/main.less"
            }
          },
          
        },

				

				watch: {
          build: {
            files: [
              '../RecipePage/styles/less/*',
              ],
            tasks: [
              // 'lesslint',
              'less:desktop'
            ]
          }
        }
		});



		grunt.loadNpmTasks('grunt-contrib-jasmine');
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.loadNpmTasks('grunt-contrib-watch');
		

	  grunt.registerTask('default',
      [
        
      'less:desktop',
      'watch:build'
      ]
    );

};
