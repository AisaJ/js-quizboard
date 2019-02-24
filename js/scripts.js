//business logic
$(document).ready(function(){
  $("form#user-details").submit(function(event){

    var firstName = $("#first-name").val();
    var surname = $("#surname").val();
    var age = $("#age").val();
    var gender = $("input:radio[name=gender]:checked").val();

    //UI logic
    if(firstName === "" || surname === "" || age === "" || !gender){
      $(".alert-msg").show();
    }else{
      $(".alert-msg").hide();
      $(".direction-msg").show();
      $(".name-print").text(firstName);
      $("#start").show();
    }

    event.preventDefault();
  });

  //UI logics
  $("#start").click(function(){
    $("#quiz-box").show();
    $("#start").fadeOut(3000);
  });

  //business logic
  var answers = ["method","typeof()","true","selector","text()"];
  var marks = 0;

  $(".questionnaires").submit(function(event){
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();
    var question5 = $("input:radio[name=question5]:checked").val();

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

  $(".commentClick").click(function(){
    var percent = marks / 5 * 100;
    if(percent>79){
      $("#results").toggle();
      $("#remark1").toggle();
    }else if (percent>49 && percent<80){
      $("#results").toggle();
      $("#remark2").toggle();
    }else {
      $("#results").toggle();
      $("#remark3").toggle();
      $("#resetForm").fadeIn(3000);
    }
    $(".name-print").text(firstName);
  });
});
