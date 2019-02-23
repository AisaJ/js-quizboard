//business logic
$(document).ready(function(){
  $("form#user-details").submit(function(event){
    alert("perfect");
    var firstName = $("#first-name").val();
    var surname = $("surname").val();
    var age = $("age").val();
    var gender = $("input:radio[name=gender]:checked").val();

    //UI logic
    if(firstName === "" || surname === "" || age === "" || gender === ""){
      $(".alert-msg").show();
    }else{
      $(".alert-msg").hide();
      $(".direction-msg").show();
      $("#name-print").text(firstName);
      $("#start").show();
    }

    event.preventDefault();
  });

  //UI logics
  $("#start").click(function(){
    $("#quiz-box").show();
  });

  //business logic
  var answers = ["method","typeof()","true","selector","text()"];

  $(".questionnaires").submit(function(event){
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();
    var marks = 0;
    var percentage = 0;
    /*var marks = parseInt()*/

    if (question1 === answers[0]){
      marks += 1;
    }
    else{
      marks += 0;
    }
    if (question2 === answers[1]){
      marks += 1;
    }
    else{
      marks += 0;
    }
    if (question3 === answers[2]){
      marks += 1;
    }
    else{
      marks += 0;
    }
    if (question4 === answers[3]){
      marks += 1;
    }
    else{
      marks += 0;
    }
    if (question5 === answers[4]){
      marks += 1;
    }
    else{
      marks += 0;
    }

    var percent = marks / 5 * 100;

    //UI logic
     $("#yourMark").text(marks + " /5: " + percent);
     $("#scoreDisplay").show();
    event.preventDefault();
  });
});
