document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Replace this with the full URL provided by Make.com for your webhook
    const webhookURL = "https://hook.eu2.make.com/bywgxf1hhq4j76jeg7lejny4ct4gi7cn";
    
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log("Lead submitted successfully:", data);
    })
    .catch(error => {
      console.error("Error submitting lead:", error);
    });
    email = ''
    name = ''
  });
  