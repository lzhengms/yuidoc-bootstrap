Yuidoc Bootstrap
================
A YUIDoc Theme Based on Twitter Bootstrap

Getting Started
---------------
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
          // custom theme directory
          themedir: 'path/to/yuidoc-bootstrap'
        }
      }
    },
    ```

* With `yuidoc` command line, like this:
    ```
    yuidoc -t 'path/to/yuidoc-bootstrap'
    ```

History
-------
* 2014-01-19 - 0.4.0 - Update to BT3; Remove custom helpers; Remove searches

Credits
-------
Based on [yuidoc-bootstrap](https://github.com/staceymoore/yuidoc-bootstrap) by Stacey Moore
