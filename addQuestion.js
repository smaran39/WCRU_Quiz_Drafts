
var q_count;
var counter = 2;
var limit = 5;
function addQuestion(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div',{
            'class':'form-group','id':''
          });
          newdiv.innerHTML = " <label for='field"+ counter  +"'> Enter your Question "+counter+"</label>"
          +"<input type='text' class='form-control' id='field"+ counter+"'  "+" name='qstn"+counter+" ' value='' placeholder='Enter your question here'><br>"
          +"<div class='form-group form-inline'><input type='text' id='left-input"+ counter + "' name='ans"+ counter+ "_1' class='form-control'placeholder='Answer choice 1' > "
          +"<input type='text' id='middle-input"+counter+"'name='ans"+ counter+ "_2' class='form-control' placeholder='Answer choice 2'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
          q_count=counter-1; //saving number of questions

     }
     console.log('no.of questions:'+q_count);
}

// add Character start here
function addCharacter(div_name) {
  var counter1 = 4;
  var newoutcome = document.createElement('fieldset');
  newoutcome.innerHTML = "<div class='form-group'><input class='form-control' type='text' name='char" + counter1+"'placeholder='Outcome title'> " +
  "</div> <div class='form-group'> <textarea class='form-control' name='char_desc"+counter1+" ' placeholder='Outcome description'></textarea></div>";
  document.getElementById(div_name).appendChild(newoutcome);
  counter1++;
}

// add character end here
$(document).ready(function () {
  $('#next-btn1').on('click',function () {
    $('.questions').hide('slow');
    $('.outcomes').show('slow');
  });

});

$(document).ready(function () {
  $('#next-btn2').on('click',function () {
    $('.outcomes').hide('slow');
    $('.character_mappings').show('slow');

  });
});


//here

window.onload = function () {
   $('#next-btn1').click(function () {
     var data = $('#questions_form').serializeArray();
     //console.log(data);
     $.each(data,function (i,obj) {
       console.log(i,obj);
       localStorage.setItem(obj.name,obj.value);
     });
   });

   $('#next-btn2').click(function () {
     var data = $('#outcomes_form').serializeArray();
     //console.log(data);
     $.each(data,function (i,obj) {
       console.log(i,obj);
       localStorage.setItem(obj.name,obj.value);
     });
   });

};

// for third section

  function loadQuestions() {
  var $newqstn = $('div',{
    'class':'form-group'
  });
  var str = "<p class='font-weight-bold'>" + localStorage.getItem('qstn1') + "</p>";
  $('.answers_mappings').append(str);


  };
