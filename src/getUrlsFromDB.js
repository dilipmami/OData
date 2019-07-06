function getUrlsFromDB(appIdToSearch) {
  var data = "test";
  var xhr = new XMLHttpRequest();
  // xhr.withCredentials = false;
  xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE && this.status == 200) {
      console.log(this.reponseText);
      var data = JSON.parse(this.responseText).d.results;
      var arrObj = data;
      var arrLen = arrObj.length;
      alert(JSON.stringify(data));
    }
    xhr.open(
      "GET",
      "https://myhanai065970trial.hanatrial.ondemand.com/sap/hana/xs/admin/appMyOdata/services.xsodata/myODataURL5?" +
        filter +
        "&$format=json",
      true
    );
    xhr.setRequestHeader("x-csrf-token", "Fetch");
    xhr.setRequestHeader("Authorization", "Basic TUFNSUQ6QmxyMTIzNDUq");
    xhr.send(data);
  });
}
