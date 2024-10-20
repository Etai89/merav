$(document).ready(function () {

  $('.titles').hide()
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

  $('#navBtn').click(()=>{
    $('#navBtn').addClass('turnOff')
    $('.turnOff').hide()
    $('#form').css('margin-top', '600px')
    $('.turnIt').show()
    $('.titles').show()
    $('.titles').click((event)=>{
      $('.titles').removeClass('active')
      $('.titles').hide()
      $(event.target).toggleClass('active')
      $('#form').css('margin-top', '260px')
    })

  })
  
});