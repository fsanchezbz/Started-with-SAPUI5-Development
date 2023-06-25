sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
       onShowHello : function () {
          // show a native JavaScript alert
          //alert("Hello, i will learn UI5");
          MessageToast.show("Hello World");
       }
    });
 });

 //sap/ui/core/mvc/Controller  ---> library
