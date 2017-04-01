//$(document).ready(function () {

  window.onload = function () {
    $('#saveData').click(function () {
      var data = $('#form39').serializeArray();
      //console.log(data);
      $.each(data,function (i,obj) {
        console.log(i,obj);
        localStorage.setItem(obj.name,obj.value);
      });

    $('#answers_mappings').append('<label id="ans1">hello</label>');
    $('#ans1').text(localStorage.getItem('field1'));
    });


  };

//});
