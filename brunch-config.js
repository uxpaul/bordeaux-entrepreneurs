'use strict'
exports.config = {
    paths: {
        watched: ['src'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/app.min.js': /^src\/js/
            },
            order: {
                before: [
                    'src/js/app.js',
                    'src/js/**/*.md.js',
                    'src/js/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/app.min.css': /^src\/scss/
            }
        },
        templates: {
            joinTo: {
                'js/templates.js': /^src\/js/
            }
        }
    },
    npm: {
        enabled: false
    },
    conventions: {
        assets: /static[\\/]/
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        copycat: {
            "js": ['node_modules/angular/angular.min.js',
                'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                'node_modules/angular-animate/angular-animate.min.js',
                'node_modules/angular-cookies/angular-cookies.min.js',
                'node_modules/angular-material/angular-material.js'
            ],
            verbose: true,
            onlyChanged: true
        },
        babel: {
            ignore: [
                /^(node_modules)/
            ]
        },
        autoReload: {
            match: {
                stylesheets: ['*html', '*.css', '*.jpg', '*.png'],
                javascripts: ['*.js']
            }
        },
        /*jshint -W106 */
        angular_templates: {
            module: 'app.views',
            path_transform: (path) => path.replace('src/', '')
        }
        /*jshint +W106 */
    },
    overrides: {
        production: {
            sourceMaps: true,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    },
    server: {
        command: 'node server.js',
        port: 8000,
        run: true
    }
}
