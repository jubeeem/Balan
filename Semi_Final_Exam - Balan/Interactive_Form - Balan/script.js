document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    
    let emailInput = document.getElementById("email").value;
  
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    
    if (emailPattern.test(emailInput)) {
      
      alert("Form submitted successfully!");
      
    } else {
      
      alert("Please enter a valid email address");
    }
  });
  