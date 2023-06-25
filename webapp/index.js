sap.ui.define([
	"sap/ui/core/mvc/XMLView"
    //"sap/m/Text" // m from sap library and Text, it is the new controller
], 

function (XMLView) {
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
	}).then(function (oView) {
		oView.placeAt("content");
	});

});


//function (Text) {
// 	"use strict";

// 	new Text({
// 		text: "Hello PACO and World"
// 	}).placeAt("content"); // id in html file}
