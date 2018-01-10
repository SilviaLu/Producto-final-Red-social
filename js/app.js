$(document).ready(function () {

  // ingreso de mesj de estado personal
  var estado = $('#feel');
  var buttonfeel = $('#btnEstado');

  buttonfeel.on('click', function() {
    if (estado.val()) {
      // console.log('porque!!!')
    }
    $('box-desktop').append('<div class= newfeel>' + estado.val() + '</div>')

  })
  







  // ingreso de mensajes
  var msjIntro = $('#exampleTextarea');
  var button = $('.button-msj');

  button.on('click', function () {
    if (msjIntro.val()) {
      // alert('jjjjj');

      $('.mama').append('<div class=new-msj>' + msjIntro.val() + '</div>');

      msjIntro.val('');

      // $( ".inner" ).append( "<p>Test</p>" );
      // console.log("hola")
      // var newText = $(document).createElement("<div class=new-msj></div>");
      // 	boxText.appendChild(newText);
      // .textContent = msjIntro.val();
      //   tweetArea.value = '';
      // }
    };
  });
});

// subiendo imagenes
$('#preview').hover(
  function () {
    $(this).find('a').fadeIn();
  },
  function () {
    $(this).find('a').fadeOut();
  }
);
$('#file-select').on('click', function (e) {
  e.preventDefault();

  $('#file').click();
});

$('input[type=file]').change(function () {
  var file = (this.files[0].name).toString();
  var reader = new FileReader();

  $('#file-info').text('');
  $('#file-info').text(file);

  reader.onload = function (e) {
    $('#preview img').attr('src', e.target.result);
  };

  reader.readAsDataURL(this.files[0]);
});