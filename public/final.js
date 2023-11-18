 // Retrieve the score from local storage
 var score = localStorage.getItem('score');
        
 // Display the score on the final page
 document.getElementById('final-score').innerText = score + '/50';
