sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

// import ComponentContainer from "sap/ui/core/ComponentContainer";

// const componentContainer = new ComponentContainer({
//   name: "sap.ui.demo.walkthrough",
//   settings: {
//     id: "walkthrough"
//   },
//   async: true
// });

// componentContainer.placeAt("content");


//function (Text) {
// 	"use strict";

// 	new Text({
// 		text: "Hello PACO and World"
// 	}).placeAt("content"); // id in html file}
