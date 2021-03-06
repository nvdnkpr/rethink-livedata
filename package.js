Package.describe({
  summary: "A RethinkDB module for Meteor"
});

Npm.depends({
  'rethinkdb': '1.10.0-0'
});

Package.on_use(function (api) {
  api.use(['underscore', 'minimongo'], ['client', 'server']);
	
  api.add_files(['rethink.js'], ['server']);
  api.add_files(['tables.js'], ['client', 'server']);
  api.add_files(['minirethink.js'], ['client', 'server']);
  api.add_files(['local_table_driver.js'], ['client', 'server']);
  api.add_files(['invalidator.js'], ['server']);
  api.add_files(['remote_table_driver.js'], ['server']);
	
	api.export('Minirethink', 'client');
});