module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      dev: {
        src: ['public/style/jharding.less'],
        dest: 'public/style/jharding.css'
      },
      prod: {
        src: ['public/style/jharding.less'],
        dest: 'public/style/jharding.css',
        options: {
          yuicompress: true
        }
      }
    },
    watch: {
      files: 'public/**/*.less',
      tasks: 'less:dev'
    }
  });

  grunt.loadNpmTasks('grunt-less');

  grunt.registerTask('prod', 'less:prod');
};
