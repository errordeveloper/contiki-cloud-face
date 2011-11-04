function sel_ui (ui_class) {
  var classes = {
    // TODO: Implement shorthand
    'brt': {
      title : 'Contiki Border Router',
      //procs : {
        /* Add ticks and some action buttons which will generate a query to
         * a) get the records for each node from Pachube
         * b) display further actions if records are available
         * ?) TBD: how many more steps and features we want?
         * ?) display graphs obtained from Pachube :)
         */
        'n': function(v) {
          $('.main').append('<h3>Neighbourhood Nodes:</h3>');
          $('.main').append('<ul id=\"nodes\"></ul>');

          $.each(v, function (i, x) { if (x.toString() !== '') {

              $('#nodes').append('<li id=\"node_'+i+'\"><pre>'+x+'</pre></li>');

          }});

        },
        'r': function(v) {
          /* XXX: what can be done with the routes here? Any graphing needed? */
          $('.main').append('<h3>Available Routes:</h3>');
          $('.main').append('<ol id=\"routes\"></ol>');

          //$('#route').append('<li><pre>'+v.toString+'</pre></li>');
          $.each(v, function (i, x) { if (x.toString() !== '') {

            var s = x[0]+'/'+x[1].toString()+' via '+x[2]+' ('+x[3]+'s)';
            $('#routes').append('<li><pre>'+s+'</pre></li>');

          }});

        }
      //}
    }
  }
  return classes[ui_class];
};

function gen_ui (ui_class, params) {
  var use_ui = sel_ui(ui_class);

  $('head').append('<title>'+use_ui.title+'</title>');

  var $d = $('<div class="main"/>');

  $('body').append($d);

  for ( var k in params ) {

    if ( params.hasOwnProperty(k) &&
         use_ui.hasOwnProperty(k) )
    {
      use_ui[k](params[k]);
    }
  }
};

/*
$(document).ready(function() {
  var $d = $('<div class="main"/>');
  $('body').append($d);
});
*/
