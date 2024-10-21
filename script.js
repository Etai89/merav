$(document).ready(function () {

  $("#leadForm").on("submit", function (event) {
    event.preventDefault()

    const name = $("#name").val();
    const email = $("#email").val();
    const tel = $('#tel').val()

    const webhookURL = "https://hook.eu2.make.com/f76rfii7hrg74r9iovbmoeus4nu2jqmd";

    $.ajax({
      url: webhookURL,
      type: "POST",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify({
        name: name,
        email: email,
        tel: tel
      }),
      success: function (data) {
        $('#leadForm').hide()
        $('#formSent').append('הפרטים נשלחו בהצלחה!')
        const name = $("#name").val('');
        const email = $("#email").val('');
        const tel = $('#tel').val('')

      },
      error: function (xhr, status, error) {
        console.error("Error submitting lead:", error)
      }
    });
  });


  $('#wazeLink').hide()
  if (window.matchMedia("(max-width: 800px)").matches){
    $('#qr').hide()
    $('#wazeLink').show()
    $('.titles').hide()
    
    $('#navBtn').click(() => {
      $('.titles').toggle()
      
      if ($('.titles').is(':visible')){
        $('#form').css('margin-top', '600px')
      }else{
        $('#form').css('margin-top', '260px')
      }
      
      
  
    })
    $('.titles').click((event) => {
      $('.titles').toggle()
      $('.titles').removeClass('active')
      $('.titles').toggleClass('active')
      $('#form').css('margin-top', '260px')
    })

  }

  

});