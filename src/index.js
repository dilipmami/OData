import "@ui5/webcomponents/dist/Button.js";
import "@ui5/webcomponents/dist/Label.js";
import "@ui5/webcomponents/dist/MessageBundleAssets.js";
import "@ui5/webcomponents/dist/DatePicker";
import "@ui5/webcomponents/dist/MessageStrip.js";
import "@ui5/webcomponents/dist/Dialog.js";
import "@ui5/webcomponents/dist/Switch.js";
import "@ui5/webcomponents/dist/Title.js";
import "@ui5/webcomponents/dist/Select.js";
import "@ui5/webcomponents/dist/Option.js";
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TextArea";
import "@ui5/webcomponents/dist/Input.js";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";
import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";

const getBt = document.getElementById("getBt");
getBt.addEventListener("press", () => {
  var data = "test";
  alert("hi");
  var xhr = new XMLHttpRequest();
  // xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE && this.status === 200) {
      console.log(this.reponseText);
      var data = JSON.parse(this.responseText).d.results;
      var arrObj = data;
      var arrLen = arrObj.length;
      alert(JSON.stringify(data));
    }
  });
  xhr.open(
    "GET",
    "https://myhanai065970trial.hanatrial.ondemand.com/sap/hana/xs/admin/appMyOdata/services.xsodata/myODataURL5?$format=json",
    true
  );
  xhr.setRequestHeader("x-csrf-token", "Fetch");
  xhr.setRequestHeader("Authorization", "Basic TUFNSUQ6QmxyMTIzNDUq");
  xhr.send(data);
});
