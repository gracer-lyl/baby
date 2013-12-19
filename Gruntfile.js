module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					paths: ['assets/css']
				},
				files: {
					'css/m.css': 'less/m.less'
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'css/m.min.css': 'css/m.css'
				}
			}
		},
		watch: {
			css: {
				files: ['less/**/*.less', 'css/*.css'],
				tasks: ['less', 'cssmin'],
				options: {
					nospawn: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', ['less', 'watch', 'cssmin']);

};