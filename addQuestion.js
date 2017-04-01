

var counter = 2;
var limit = 4;
function addQuestion(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = document.createElement('div',{
            'class':'form-group','id':''
          });
          newdiv.innerHTML = " <label for='field"+ counter  +"'> Enter your Question "+counter+"</label>"
          +"<input type='text' class='form-control' id='field"+ counter+"'  "+" name='myInputs[]' placeholder='Enter your question here'><br>"
          +"<div class='form-group form-inline'><input type='text' id='left-input"+ counter + "'class='form-control'placeholder='Answer choice 1' > "
          +"<input type='text' id='middle-input"+counter+"' class='form-control' placeholder='Answer choice 2'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}


$(document).ready(function () {
  $('#next-btn1').on('click',function () {
    $('.questions').hide('slow');
    $('.outcomes').show('slow');
  });
});
