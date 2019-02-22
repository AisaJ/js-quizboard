$(document).ready(function(){
  $("form#user-details").submit(function(event){
    alert("perfect");
    var firstName = $("#first-name").val();
    var surname = $("surname").val();
    var age = $("age").val();
    var gender = $("input:radio[name=gender]:checked").val();

    if(firstName === "" || surname === "" || age === "" || gender ===""){
      $(".alert-msg").show();
    }else{
      $(".direction-msg").show();
      $("#name-print").text(firstName);
      $("#start").show();
    }

    event.preventDefault();
  });

  function showQuiz(){
    $("#questionnaires").show();
  }

  var answers = ["method","typeof","true","selector","text()"];
  var qstnScore = 15;

  $("form#questionnaires").submit(function(){
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var marks= 0;



  })
});
