'use strict';
/* global Package */

Package.describe({
  summary: 'Allow http://meteor.local',
  version: '0.0.1',
  name:'anthonyastige:allow-meteor-local',
  git:'git@github.com:AnthonyAstige/allow-meteor-local.git'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');

	api.use([
		'standard-app-packages',
		'browser-policy'
	]);

	api.addFiles([
		'allow-meteor-local.js'
	]);
});
