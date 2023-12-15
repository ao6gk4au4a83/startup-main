async function loadUsername() {
    try {
        // Simulate async operation with a Promise
        const userName = await new Promise((resolve, reject) => {
            // Simulate async delay
            setTimeout(() => {
                resolve(localStorage.getItem('userName'));
            }, 1000); // 1 second delay
        });

        if (userName) {
            document.getElementById('playerName').textContent = userName;
        } else {
            document.getElementById('playerName').textContent = 'No username set';
        }
    } catch (error) {
        console.error('Error loading username:', error);
        document.getElementById('playerName').textContent = 'Error loading username';
    }
}

// Questions and answers
const questions = [
    { question: "Which South American country is home to the ancient Incan city of Machu Picchu, one of the New Seven Wonders of the World?", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg', options: ['Peru', 'Brazil', 'Mexico', 'Chile'], correctAnswer: "Peru" },

    { question: "In which Middle Eastern country is the historical city of Petra located, known for its rock-cut architecture and water conduit system?", img: 'https://www.historyhit.com/app/uploads/fly-images/5160776/Petra-788x537.jpg?x34669', options: ['Jordan', 'Egypt', 'Saudi Arabia', 'Lebanon'], correctAnswer: "Jordan" },
    
    { question: "The Great Wall of China, recognized as one of the New Seven Wonders, spans multiple provinces. Which of the following is NOT one of these provinces?", img: 'https://www.tripsavvy.com/thmb/S6Daq_joeyN3xU0Bz3Qt7QGe0YM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-654013042-28f42fc82c544a9fb0f74458b85de713.jpg', options: ['Shaanxi', 'Gansu', 'Sichuan', 'Yunnan'], correctAnswer: "Yunnan" },
    
    { question: "Chichen Itza, a large pre-Columbian archaeological site featuring a step pyramid, is located in which country in North America?", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1200px-Chichen_Itza_3.jpg', options: ['Mexico', 'Guatemala', 'Honduras', 'Belize'], correctAnswer: "Mexico" },
    
    { question: "The statue of Christ the Redeemer stands atop the Corcovado mountain overlooking which city?", img: 'https://img1.wsimg.com/isteam/ip/e344a4ba-c70a-4cfe-a8f9-1f762fc0ff06/Beaurtiful-View-Of-The-Christ-The-Redeemer-Sta.jpg', options: ['Buenos Aires', 'Lima', 'Rio de Janeiro', 'Bogotá'], correctAnswer: "Rio de Janeiro" },
    
    { question: "Which European country is home to the Colosseum, an ancient amphitheater and one of the New Seven Wonders?", img: 'https://images.nationalgeographic.org/image/upload/v1652340658/EducationHub/photos/colosseum.jpg', options: ['Greece', 'Spain', 'Italy', 'France'], correctAnswer: "Italy" },
    
    { question: "The Taj Mahal, a magnificent marble mausoleum, is located in which Asian country?", img: 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg', options: ['India', 'Pakistan', 'Bangladesh', 'Nepal'], correctAnswer: "India" },
    


];

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the questions array to randomize the order
shuffleArray(questions);

// Variables to keep track of the game state
let currentQuestionIndex = 0;
let score = 0;

// Get references to HTML elements
const questionText = document.getElementById("questionText");
const questionDescription = document.getElementById("questionDescription");
const choicesList = document.getElementById("choicesList");
const scoreElement = document.getElementById("score");

// Function to load and display a question
function loadQuestion(questionIndex) {
    const currentQuestion = questions[questionIndex];
    questionText.textContent = `Question ${questionIndex + 1}`;
    questionDescription.textContent = currentQuestion.question;

    // Set the image source
    const questionImage = document.getElementById("questionImage");
    questionImage.src = currentQuestion.img;


    // Clear previous choices
    choicesList.innerHTML = "";

    // Create buttons for answer choices
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        choicesList.appendChild(button);
    });
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    // Check if all questions have been answered
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // After showing the score, navigate to the final.html page
        setTimeout(() => {
            localStorage.setItem('score', score);
            localStorage.setItem('username', name);
            window.location.href = "final.html";
        }, 0); // Delay in milliseconds (2 seconds in this example)
    }


    // Update the score display
    scoreElement.textContent = `Score: ${score}`;
}

// Initialize the game by loading the first question
loadQuestion(currentQuestionIndex);
// Call the async function
loadUsername();
// update
