'use strict';
/* global Meteor, BrowserPolicy */

Meteor.startup(function() {
	if (Meteor.isServer) {
		BrowserPolicy.content.allowOriginForAll('http://meteor.local');
	}
});
