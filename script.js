document.getElementById("leadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const webHook = 'bywgxf1hhq4j76jeg7lejny4ct4gi7cn@hook.eu2.make.com'
    // Replace with your Make.com webhook URL
    // const webhookURL = `https://hook.us1.make.com/${webHook}`;
    const webhookURL = `bywgxf1hhq4j76jeg7lejny4ct4gi7cn@hook.eu2.make.com`

  
    fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
      console.log("Lead submitted successfully:", data);
    })
    .catch(error => {
      console.error("Error submitting lead:", error);
    });
  });
  