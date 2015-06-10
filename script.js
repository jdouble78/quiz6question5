$(function() {
  $("button").click(function() {
    $.get(“localhost:3000/shipNames", function(response) {
  $("body").text(response);
    });
  });
});
