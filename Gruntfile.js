module.exports = function(grunt) {      // Project configuration.

    grunt.loadNpmTasks('grunt-contrib-watch');  
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default', ['concat', 'copy', 'uglify', 'sass']);



    grunt.initConfig({       
        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

        // 变量       
        meta: {
            basePath: "./", 
            modPath: "public/mod/", 
            staticPath: "public/",
            distPath: "dist/"
        },          
        // banner
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */\n',                

        concat: {
            options: {
              separator: '',
            },
            js: {
                files: {
                    '<%= meta.staticPath %>js/index.js': ['<%= meta.modPath %>js/doT.js', '<%= meta.modPath %>js/zepto.js', '<%= meta.modPath %>js/data.js', '<%= meta.modPath %>js/event.js', '<%= meta.modPath %>js/index.js'],
                    '<%= meta.staticPath %>js/outcome.js': ['<%= meta.modPath %>js/doT.js', '<%= meta.modPath %>js/zepto.js', '<%= meta.modPath %>js/data.js', '<%= meta.modPath %>js/event.js', '<%= meta.modPath %>js/outcome.js']
                }
            },
            css: {
                files: {
                    '<%= meta.staticPath %>css/index.css': ['<%= meta.modPath %>css/bootstrap.css', '<%= meta.modPath %>css/index.css'],
                    '<%= meta.staticPath %>css/outcome.css': ['<%= meta.modPath %>css/bootstrap.css', '<%= meta.modPath %>css/outcome.css']
                }
            }
        },
        //压缩文件
        uglify: {
            compress: {
                files: {
                    '<%= meta.distPath %>js/index.js': '<%= meta.staticPath %>js/index.js',
                    '<%= meta.distPath %>js/outcome.js': '<%= meta.staticPath %>js/outcome.js'
                }
            }
        },
        //copy文件
        copy: {
            // copy到production
          production: {
            files: [
                {
                    cwd: '<%= meta.staticPath %>',
                    expand: true,
                    src: '**/*', 
                    dest: '<%= meta.distPath %>'
                }               
            ]            
          }
        },
        

        // sass编译
        sass: {
            // mutiple compile
            page: {
                
                files: {                         // Dictionary of files
                    '<%= meta.distPath %>css/index.css': '<%= meta.staticPath %>/css/index.css',
                    '<%= meta.distPath %>css/outcome.css': '<%= meta.staticPath %>/css/outcome.css'
                },
                options: {
                    style: 'compressed'
                }
            }
        },

        // watch 更变
        watch: { 
            css: {  
                files: [                     
                    "<%= meta.modPath %>**/*.css"
                ],
                tasks: ["concat:css"]
            },
            js: {  
                files: [                     
                    "<%= meta.modPath %>**/*.js"
                ],
                tasks: ["concat:js"]
            }
        }     
    });        

}
