let params = new URLSearchParams(location.search.slice(1));
let alertContent = params.get('alert');
if (alertContent) {
  $("#alertContent").text(alertContent);
  $("#alertBlock").show();
}

$("#alertClose").on("click", function(){
  $("#alertBlock").hide();
});