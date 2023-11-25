

document.addEventListener("DOMContentLoaded", function() {
    
    let currentDate = new Date();
  
    
    let publicationDateElement = document.getElementById("publicationDate");
  
    
    let formattedDate = `${currentDate.getMonth(11) + 1}/${currentDate.getDate(25)}/${currentDate.getFullYear(2023)}`;
  
    
    publicationDateElement.textContent = `Publication Date: ${formattedDate}`;
  });