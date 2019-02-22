$(document).ready(function(){
  $("form#user-details").submit(function(event){
    alert("perfect");
    var firstName = $("#first-name").val();
    var surname = $("surname").val();
    var age = $("age").val();
    var gender = $("input:radio[name=gender]:checked").val();

    event.preventDefault();
  });
});
