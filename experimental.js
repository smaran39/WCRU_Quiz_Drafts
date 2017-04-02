

  window.onload = function () {

    //from here
    var options = [];

    $( '.dropdown-menu a' ).on( 'click', function( event ) {
    console.log('inside the dropdown ');
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
    //till here

    $('#saveData').click(function () {
      var data = $('#form39').serializeArray();
      //console.log(data);
      $.each(data,function (i,obj) {
        console.log(i,obj);
        localStorage.setItem(obj.name,obj.value);
      });

    $('#answers_mappings').append('<label id="ans1">hello</label>');
    $('#ans1').text(localStorage.getItem('field1'));
  //  $('#option1').text(localStorage.getItem('field2'));

    });




  };
