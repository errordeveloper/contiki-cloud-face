function sel_ui (ui_class) {
  var classes = {
    // TODO: Implement shorthand
    'border_router': {
      template :'<h3>Neighbors:</h3>'
               +'<ul class="neighbors_list">'
               +'  {{#each neighbors}}'
               +'  {{{list_neighbors this}}}'
               +'  {{/each}}'
               +'</ul>'
               +'<h3>Routes:</h3>'
               +'<ul class="routes_list">'
               +'  {{#each routes}}'
               +'  {{{list_routes this}}}'
               +'  {{/each}}'
               +'</ul>'
               ,
      title : 'Contiki Border Router',
      helpers : {
        'list_neighbors': function() { return function(v) { if (v.toString() !== '')
          return '<li><pre>'+v+'</pre></li>'; }},
        'list_routes': function() { return function(v) { if (v.toString() !== '')
          return '<li><pre>'+v[0]+'/'+v[1]+' via '+v[2]+' ('+v[3]+'s)</pre></li>'; }}
      }
    }
  }
  return classes[ui_class];
};

function gen_ui (ui_class, context) {
  var use_ui = sel_ui(ui_class);
  var helper;
  for ( helper in use_ui.helpers ) {
    Handlebars.registerHelper(helper, use_ui.helpers[helper]());
  }
  var template = Handlebars.compile(use_ui.template);

  var h = document.getElementsByTagName('head').item(0);
  var t = document.createElement('title');
  t.appendChild(document.createTextNode(use_ui.title));
  h.appendChild(t);

  /* It's a bit odd, but doesn't look like we need JSON! */
  // document.writeln(template(JSON.stringify(context)));
  document.writeln(template(context));
};
