google.load('visualization', '1', {packages:['table']});
google.load('jquery', '1.6.4');

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
          $('.main').append('<div id=\"nodes\"></div>');

	  var data = new google.visualization.DataTable();

	  /*
	  data.addColumn('string', 'a string');
	  data.addColumn('number', 'a number');
	  data.addColumn('boolean', 'on/off');
	  */

	  data.addColumn('string', 'IP address');
	  data.addRows(v.length-1);

          $.each(v, function (i, x) { if (x.toString() !== '') { data.setCell(i,0,x); }});

	  var table = new google.visualization.Table(document.getElementById('nodes'));
	  table.draw(data, {showRowNumber: true});
        },
        'r': function(v) {
          /* XXX: what can be done with the routes here? Any graphing needed? */
          $('.main').append('<h3>Available Routes:</h3>');
          $('.main').append('<div id=\"routes\"></div>');

	  var data = new google.visualization.DataTable();
	  data.addColumn('string', 'Gateway IP address');
	  data.addColumn('string', 'Next hop IP address');
	  data.addColumn('number', 'TTL');
	  data.addRows(v.length-1);

          //$('#route').append('<li><pre>'+v.toString+'</pre></li>');
          $.each(v, function (i, x) { if (x.toString() !== '') {

	    data.setCell(i,0,x[0]+'/'+x[1]);
	    data.setCell(i,1,x[2]);
	    data.setCell(i,2,x[3]);
            //var s = x[0]+'/'+x[1].toString()+' via '+x[2]+' ('+x[3]+'s)';
            //$('#routes').append('<li><pre>'+s+'</pre></li>');

          }});

	  var table = new google.visualization.Table(document.getElementById('routes'));
	  table.draw(data, {showRowNumber: true});

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
