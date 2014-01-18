Yuidoc Bootstrap
================
A YUIDoc Theme Based on Twitter Bootstrap

Getting Started
---------------
1. Clone theme to your projects
1. Run `npm install` in the theme root

Config YUIDoc
-------------
* With Grunt, Config your projects' `Gruntfile.js` like this:
    ```
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        options: {
          paths: 'src/js',
          outdir: 'doc',
          // custom theme helpers
          helpers: ['path/to/yuidoc-bootstrap/helpers/helpers.js'],
          // custom theme directory
          themedir: 'path/to/yuidoc-bootstrap'
        }
      }      
    },
    ```
    
* With `yuidoc` command line, like this:
    ```
    yuidoc -t 'path/to/yuidoc-bootstrap' -H 'path/to/yuidoc-bootstrap/helpers/helpers.js'
    ```

TODO
----
* Update to BT3

Credits
-------
Based on [yuidoc-bootstrap](https://github.com/staceymoore/yuidoc-bootstrap) by Stacey Moore
