'use strict';
/* global Meteor, BrowserPolicy */

if (Meteor.isServer) {
	BrowserPolicy.content.allowOriginForAll('http://meteor.local');
}
