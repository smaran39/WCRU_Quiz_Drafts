//--------------------------------
//LISTENER FOR DROPDOWN
var options = [];

$( '.dropdown-menu a' ).on( 'click', function( event ) {

   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }

   $( event.target ).blur();

   console.log( options );
   return false;
});
//--------------------------------------------
var q_length;
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
          +"<input type='text' class='form-control' id='field"+ counter+"'  "+" name='qstn"+counter+"' value='' placeholder='Enter your question here'><br>"
          +"<div class='form-group form-inline'><input type='text' id='left-input"+ counter + "' name='ans"+ counter+ "_1' class='form-control'placeholder='Answer choice 1' > "
          +"<input type='text' id='middle-input"+counter+"'name='ans"+ counter+ "_2' class='form-control' placeholder='Answer choice 2'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
          q_length=counter-1; //saving number of questions

     }
     console.log('no.of questions:'+q_length);
     localStorage.setItem('q_length',q_length);
     localStorage.setItem('char_count', 3);
}

// add Character start here
function addCharacter(div_name) {
  var counter1 = 4;
  var newoutcome = document.createElement('fieldset');
  newoutcome.innerHTML = "<div class='form-group'><input class='form-control' type='text' name='char" + counter1+"'placeholder='Outcome title'> " +
  "</div> <div class='form-group'> <textarea class='form-control' name='char_desc"+counter1+" ' placeholder='Outcome description'></textarea></div>";
  document.getElementById(div_name).appendChild(newoutcome);
  counter1++;
  localStorage.setItem('char_count', (counter1 - 1));
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
     loadQuestions();
   });

};

// for third section

  function loadQuestions() {

  var $main_div = $('.answers_mappings');
  var qlen = localStorage.getItem('q_length');
  var $wrap_div = [];
  var $lbl = [];
  var $btn_div = [];
  var $btn = [];
  var $span = [];
  var $ul = [];
  for (var i = 0; i < qlen ; i++) {
    $wrap_div[i] = $('<div></div>', {
      'class' : 'quest'+(i+1)
    });
    $lbl[i] = $('<label></label>', {
      //for attr
    });
    $lbl[i].text(localStorage.getItem('qstn' + (i + 1)));
    $wrap_div[i].append($lbl[i]);
    $btn_div[i] = [];
    $btn[i] = [];
    $span[i] = [];
    $ul[i] = [];
    for (var j = 0; j < 2; j++) {
      $btn_div[i][j] = $('<div></div>', {
        'class' : 'button-group'
      });
      $btn[i][j] = $('<button></button>', {
        'type' : "button",
        'class' : "btn btn-default btn-sm dropdown-toggle",
        'data-toggle' : 'dropdown'
      });
      $span[i][j] = $('<span></span>', {
        'class' : 'caret'
      });
      $btn[i][j].text(localStorage.getItem('ans' + (i + 1) + '_' + (j + 1)));
      $btn[i][j].append($span[i][j]);
      $btn_div[i][j].append($btn[i][j]);
      $ul[i][j] = $('<ul></ul>', {
        'class' : 'dropdown-menu'
      });

      var char_len = localStorage.getItem('char_count');
      var li_str = "";
      for (var k = 0; k < char_len; k++) {
        li_str = '<li><a href="#" class="small" data-value="' + localStorage.getItem('char' + (k + 1)) + '"  tabIndex="-1"><input type="checkbox" />&nbsp;' + localStorage.getItem('char' + (k + 1)) + '</a></li>';
        $ul[i][j].append(li_str);
        li_str = "";
      }
      $btn_div[i][j].append($ul[i][j]);
      $wrap_div[i].append($btn_div[i][j]);
    }

    $main_div.append($wrap_div[i]);
  }
  //var str = "<p class='font-weight-bold'>" + localStorage.getItem('qstn1') + "</p>";
  //$('.answers_mappings').append(str);


  };
