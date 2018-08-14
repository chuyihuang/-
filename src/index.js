import "./scss/index.scss";
import "./js/usersIndex";
import "./js/usersCreate";
import "./js/usersUpdate";
import "./js/usersDelete";
import "./js/alert";

$(document).ajaxStart(function(){
  $("#overlay").show();
});

$(document).ajaxComplete(function(){
  $("#overlay").hide();
});

$(function() {
  $(".datepicker").datepicker({dateFormat: 'yy/mm/dd'});
})