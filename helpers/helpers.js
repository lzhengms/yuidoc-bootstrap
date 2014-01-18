var fs, path, markdown;
fs = require('fs');
path = require("path");
markdown = require( "markdown" ).markdown;

module.exports = {
  publicClasses: function(context, options) {
    'use strict';
    var ret = "";

    for(var i=0; i < context.length; i++) {
      if(!context[i].itemtype && context[i].access === 'public') {
        ret = ret + options.fn(context[i]);
      } else if (context[i].itemtype) {
        ret = ret + options.fn(context[i]);
      }
    }

    return ret;
  },
  search : function(classes, modules) {
    'use strict';
    var ret = '';

    for(var i=0; i < classes.length; i++) {
      if(i > 0) {
        ret += ', ';
      }
      ret += "\"" + 'classes/' + classes[i].displayName + "\"";
    }

    if(ret.length > 0 && modules.length > 0) {
      ret += ', ';
    }

    for(var j=0; j < modules.length; j++) {
      if(j > 0) {
        ret += ', ';
      }
      ret += "\"" + 'modules/' + modules[j].displayName + "\"";
    }

    return ret;
  },

  readme : function () {
    var content = path.resolve(process.cwd(), 'README.md');

    if (fs.existsSync(content) === true) {
      content = fs.readFileSync(content, {encoding: "utf8"});
      content = markdown.toHTML(content);
    } else {
      content = '';
    }

    return content;
  }
};
