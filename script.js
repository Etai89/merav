$(document).ready(function() {


    $("#leadForm").on("submit", function(event) {
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
        success: function(data) {
          console.log("Lead submitted successfully:", data)

        },
        error: function(xhr, status, error) {
          console.error("Error submitting lead:", error)
        }
      });
    });
  });