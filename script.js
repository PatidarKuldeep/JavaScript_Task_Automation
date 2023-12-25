document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('inputForm');
    const resultsDiv = document.getElementById('results');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get values from the form fields
      const field1Value = document.getElementById('field1').value;
      const field2Value = document.getElementById('field2').value;
      const field3Value = document.getElementById('field3').value;
  
      // Create a new paragraph and append it to the results div
      const newParagraph = document.createElement('p');
      newParagraph.textContent = `${field1Value}, ${field2Value}, ${field3Value}`;
      resultsDiv.appendChild(newParagraph);
  
      // Style the appended paragraph dynamically
      const randomColor = getRandomColor();
      newParagraph.style.backgroundColor = randomColor;
    });
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  