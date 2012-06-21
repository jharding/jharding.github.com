module.exports = function(grunt) {
  grunt.initConfig({
    lint: {
      files: 'src/js/**'
    },
    concat: {
      html5shiv: {
        src: ['src/vendor/html5shiv/html5shiv.js'],
        dest: 'public/js/html5shiv.js'
      }
    },
    min: {
      html5shiv: {
        src: 'public/js/html5shiv.js',
        dest: 'public/js/html5shiv.min.js'
      }
    },
    less: {
      dev: {
        src: ['src/less/jharding.less'],
        dest: 'public/css/jharding.css'
      },
      prod: {
        src: ['src/less/jharding.less'],
        dest: 'public/css/jharding.min.css',
        options: {
          yuicompress: true
        }
      }
    },
    watch: {
      files: 'src/**',
      tasks: 'dev'
    }
  });

  grunt.loadNpmTasks('grunt-less');

  grunt.registerTask('dev', 'lint less:dev concat');
  grunt.registerTask('prod', 'lint less:prod concat min');
};
