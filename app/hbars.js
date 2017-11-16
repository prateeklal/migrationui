define(['handlebars'], function(Handlebars) {
    var buildMap = {};
  
    return {
      load: function (name, parentRequire, onload, config) {
        if (config.isBuild) {
          var fsPath = config.dirBaseUrl + '/' + name + '.html'; // TODO - add ext into config options
          buildMap[name] = nodeRequire('fs').readFileSync(fsPath).toString();
          onload();
        }
        else {
        var JST = window.JST ? window.JST : {};
          var path = 'app/' + name + '.html'; // TODO: add path into config options
      
          if (JST[path]) {
            // Grunt.js pre-compiles templates into JST[]
            onload(Handlebars.template(JST[template]));
          } else {
            // use text.js plugin when loading templates during development
            parentRequire(['text!' + name + '.html'], function(raw) {
              onload(Handlebars.compile(raw));
            });
          }
        }
      }
    };
  });