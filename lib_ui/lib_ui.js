google.load('visualization', '1', {packages:['table', 'corechart']});
google.load('jquery', '1.6.4');

var ui = {};

var nodes = [];

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

          $('.main').append("<h3>Neighbourhood Nodes:</h3>");
          $('.main').append("<div id='nodes'></div>");

	  ui.node_table_data = new google.visualization.DataTable();

          var data = ui.node_table_data;

	  /*
	  data.addColumn('string', 'a string');
	  data.addColumn('number', 'a number');
	  data.addColumn('boolean', 'on/off');
	  */

	  data.addColumn('string', 'IP address');
          data.addColumn('string', 'ID hash');
	  data.addRows(v.length-1);

          $.each(v, function (i, x) { if (x.toString() !== '') {

            var h = new jsSHA(x, "ASCII");
            nodes[i] = { hash: h.getHash("HEX"), addr: x };

            data.setCell(i,0,nodes[i].addr);
            data.setCell(i,1,nodes[i].hash);
          }});

	  ui.node_table = new google.visualization.Table(document.getElementById('nodes'));
	  ui.node_table.draw(data, {showRowNumber: true, sort: 'disable'});

          $('.main').append("<div id='nodes-operations'></div>");

          /*
          google.visualization.events.addListener(ui.node_table, 'select', function() {
            var rows = ui.node_table.getSelection();
            for (var e in rows) {
              alert('You selected ' + ui.node_table_data.getValue(rows[e].row, 0));
            }
          });
          */
          var s = '<input value="Submit?!" type="button" id="nodes-opb1" onclick="ui.get_nodes(ui.use_nodes)"/>';

          /* XXX: why this API doesn't do it just as simple as that ? */

          ui.get_nodes = function (callback) {
            var rows = ui.node_table.getSelection();
            var columns = ui.node_table_data.getNumberOfColumns();
            var selection = new Array(rows.length);
            for (var e in rows) {
              selection[e] = new Array(columns);
              for (var c = 0; c < (columns-1); c++) {
                selection[e][c] = ui.node_table_data.getValue(rows[e].row, c);
              }
            }
            callback(selection);
          }

          ui.use_nodes = function (selection) {
            /* TODO: this is where I need to implement the functionality! */
            for (var e in selection) alert(selection[e][0]);
          }

          $('#nodes-operations').append(s);

        },
        'r': function(v) {
          /* XXX: what can be done with the routes here? Any fancy needed? */
          $('.main').append("<h3>Available Routes:</h3>");
          $('.main').append("<div id='routes'></div>");

          ui.route_table_data =  new google.visualization.DataTable();

	  var data = ui.route_table_data;

	  data.addColumn('string', 'Gateway IP address');
	  data.addColumn('string', 'Next hop IP address');
	  data.addColumn('number', 'TTL');
	  data.addRows(v.length-1);

          $.each(v, function (i, x) { if (x.toString() !== '') {

	    data.setCell(i,0,x[0]+'/'+x[1]);
	    data.setCell(i,1,x[2]);
	    data.setCell(i,2,x[3]);

          }});

	  ui.route_table = new google.visualization.Table(document.getElementById('routes'));
          ui.route_table.draw(data, {showRowNumber: true, sort: 'disable'});

        }
      //}
    },
    'pachube': {
      'plot': function (v) {

        var url = v.host + 'feeds/' + v.feed + '.json';

        var plot_output = document.getElementById(v.output);

        $.getJSON(url, function(data) {
          var items = [];

          $('<title/>', {
            html: data.title + ' (' + data.description + ')'
          }).appendTo('head');

          ui.plot_table_data = new google.visualization.DataTable();

          var plot = ui.plot_table_data;
          var rows = data.datastreams.length;

          /*
          data.addColumn('boolean', 'on/off');
          */

          plot.addColumn('string', 'Timestamp (:at)');
          plot.addColumn('string', 'Current value (:current_value)');
          plot.addRows(rows);

          //var d = new Date('2011-11-08T08:10:07.948692Z');
          $.each(data.datastreams, function(i, x) {
            var date = new Date(x.at);
            plot.setCell(i, 0, date.toGMTString());
            plot.setCell(i, 1, x.current_value);
          });

          ui.plot_table = new google.visualization.Table(plot_output);
          ui.plot_table.draw(plot, {showRowNumber: true, sort: 'enable'});

          $('<div id="chart"/>').appendTo('body');
          ui.plot = new google.visualization.LineChart(document.getElementById('chart'));
          ui.plot.draw(plot, {width: 400, height: 240, title: data.title});

        });
      },
      'replot': function (t) {
        // TODO: implement polling
      }
    }
  }
  return classes[ui_class];
};

function gen_ui (ui_class, params) {
  var use_ui = sel_ui(ui_class);

  if ( use_ui.title ) {
    $('<title/>', {
      html: use_ui.title
    }).appendTo('head');
  }

  var d = $("<div class='main'/>");

  $('body').append(d);

  for ( var k in params ) {

    if ( params.hasOwnProperty(k) &&
         use_ui.hasOwnProperty(k) )
    {
      use_ui[k](params[k]);
    }
  }
};
