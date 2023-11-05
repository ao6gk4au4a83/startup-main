function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Get the name parameter from the URL
const name = getUrlParameter('name');

if (name) {
    // Display the name in the "Username" section
    document.getElementById('usernameText').textContent = name;
}


// Questions and answers
const questions = [
    {question: "What is the capital of France?",img:"https://media.istockphoto.com/id/1185953092/photo/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-the-rays-of-the-setting.jpg?s=612x612&w=0&k=20&c=ZneUFVlR5TPCooxRV1rldUAadqLxZEvOoyVCOrtpcRQ=", options: ["Paris", "Madrid", "Helsinki", "Rome"],correctAnswer: "Paris",},
    {question: "What is the capital of Spain?", img:"https://media.nomadicmatt.com/2023/madriditinerary.jpeg", options: ["Paris", "Madrid", "Budapest", "Rome"],correctAnswer: "Madrid",},
    {question: "What is the capital of Germany?",img:'https://www.germany.travel/media/redaktion/staedte_kultur_content/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg', options: ['Luxembourg City', 'Berlin', 'Minsk', 'Vatican City'], correctAnswer: "Berlin"},
    {question: "What is the capital of Poland?",img:'https://facts.net/wp-content/uploads/2023/07/48-facts-about-warsaw-1688194047.jpeg', options: ['Prague', 'Riga', 'Warsaw', 'Vatican City'], correctAnswer: "Warsaw"},
    {question: "What is the capital of Ukraine?",img:'https://cdn.britannica.com/18/194818-050-E7A7A993/view-Kiev-Ukraine.jpg', options: ['Helsinki', 'Kyiv', 'Monaco', 'Madrid'], correctAnswer: "Kyiv"},
    {question: "What is the capital of Russia?",img:'https://a.cdn-hotels.com/gdcs/production29/d1375/234f7170-c9f4-4cee-a372-1a198e388483.jpg?impolicy=fcrop&w=800&h=533&q=medium', options: ['Moscow', 'Zagreb', 'Valletta', 'Oslo'], correctAnswer: "Moscow"},
    {question: "What is the capital of Italy?",img:'https://res.klook.com/image/upload/Mobile/City/afmqgg5h0jl9wnr1dfmf.jpg', options: ['Podgorica', 'Sofia', 'Rome', 'Berlin'], correctAnswer: "Rome"},
    {question: "What is the capital of Cyprus?",img:'https://touringhighlights.com/wp-content/uploads/2022/05/Nicosia-1.jpg', options: ['Nicosia', 'Belgrade', 'Vilnius', 'Sarajevo'], correctAnswer: "Nicosia"},
    // {question: "What is the capital of Germany?",img:'', options: ['Berlin', 'Copenhagen', 'Nur-Sultan', 'Bern'], correctAnswer: "Berlin"},
    // {question: "What is the capital of Belgium?",img:'', options: ['Brussels', 'Monaco', 'Tallinn', 'Vilnius'], correctAnswer: "Brussels"},
    // {question: "What is the capital of Finland?",img:'', options: ['Monaco', 'Helsinki', 'Vaduz', 'Helsinki'], correctAnswer: "Helsinki"},
    // {question: "What is the capital of Poland?",img:'', options: ['Warsaw', 'Sarajevo', 'San Marino', 'Lisbon'], correctAnswer: "Warsaw"},
    // {question: "What is the capital of Croatia?",img:'', options: ['Zagreb', 'Brussels', 'Oslo', 'Dublin'], correctAnswer: "Zagreb"},
    // {question: "What is the capital of Monaco?",img:'', options: ['Berlin', 'Monaco', 'San Marino', 'Athens'], correctAnswer: "Monaco"},
    // {question: "What is the capital of Slovakia?",img:'', options: ['Moscow', 'Bratislava', 'Bratislava', 'Warsaw'], correctAnswer: "Bratislava"},
    // {question: "What is the capital of Vatican City?",img:'', options: ['Vilnius', 'Podgorica', 'Vatican City', 'Skopje'], correctAnswer: "Vatican City"},
    // {question: "What is the capital of Romania?",img:'', options: ['Andorra la Vella', 'Bucharest', 'Bern', 'Warsaw'], correctAnswer: "Bucharest"},
    // {question: "What is the capital of Hungary?",img:'', options: ['San Marino', 'Budapest', 'Bratislava', 'Athens'], correctAnswer: "Budapest"},
    // {question: "What is the capital of Russia?",img:'', options: ['Moscow', 'Helsinki', 'Belgrade', 'Luxembourg City'], correctAnswer: "Moscow"},
    // {question: "What is the capital of Croatia?",img:'', options: ['Budapest', 'Chisinau', 'Vaduz', 'Zagreb'], correctAnswer: "Zagreb"},
    // {question: "What is the capital of Latvia?",img:'', options: ['Brussels', 'Vienna', 'Riga', 'Valletta'], correctAnswer: "Riga"},
    // {question: "What is the capital of Lithuania?",img:'', options: ['Kyiv', 'Sarajevo', 'Vilnius', 'Vienna'], correctAnswer: "Vilnius"},
    // {question: "What is the capital of Finland?",img:'', options: ['Vienna', 'Nur-Sultan', 'Athens', 'Helsinki'], correctAnswer: "Helsinki"},
    // {question: "What is the capital of Belarus?",img:'', options: ['Minsk', 'Prague', 'Nur-Sultan', 'Brussels'], correctAnswer: "Minsk"},
    // {question: "What is the capital of Italy?",img:'', options: ['Rome', 'Sarajevo', 'Oslo', 'San Marino'], correctAnswer: "Rome"},
    // {question: "What is the capital of Bosnia and Herzegovina?",img:'', options: ['Madrid', 'Sarajevo', 'Dublin', 'Andorra la Vella'], correctAnswer: "Sarajevo"},
    // {question: "What is the capital of Finland?",img:'', options: ['Helsinki', 'Bratislava', 'Rome', 'Athens'], correctAnswer: "Helsinki"},
    // {question: "What is the capital of Netherlands?",img:'', options: ['Reykjavik', 'Amsterdam', 'Valletta', 'Nur-Sultan'], correctAnswer: "Amsterdam"},
    // {question: "What is the capital of Latvia?",img:'', options: ['Riga', 'London', 'Luxembourg City', 'Dublin'], correctAnswer: "Riga"},
    // {question: "What is the capital of Sweden?",img:'', options: ['Belgrade', 'Stockholm', 'Zagreb', 'Copenhagen'], correctAnswer: "Stockholm"},
    // {question: "What is the capital of Sweden?",img:'', options: ['Helsinki', 'Vaduz', 'Stockholm', 'Vilnius'], correctAnswer: "Stockholm"},
    // {question: "What is the capital of Switzerland?",img:'', options: ['Prague', 'Bern', 'Nur-Sultan', 'Stockholm'], correctAnswer: "Bern"},
    // {question: "What is the capital of Finland?",img:'', options: ['Rome', 'Luxembourg City', 'Lisbon', 'Helsinki'], correctAnswer: "Helsinki"},
    // {question: "What is the capital of Hungary?",img:'', options: ['Zagreb', 'Budapest', 'Prague', 'Copenhagen'], correctAnswer: "Budapest"},
    // {question: "What is the capital of San Marino?",img:'', options: ['San Marino', 'Rome', 'Copenhagen', 'Vaduz'], correctAnswer: "San Marino"},
    // {question: "What is the capital of Bulgaria?",img:'', options: ['Ljubljana', 'Minsk', 'Sofia', 'London'], correctAnswer: "Sofia"},
    // {question: "What is the capital of Slovenia?",img:'', options: ['Vatican City', 'Ljubljana', 'Ljubljana', 'Kyiv'], correctAnswer: "Ljubljana"},
    // {question: "What is the capital of Bosnia and Herzegovina?",img:'', options: ['Andorra la Vella', 'Sarajevo', 'Stockholm', 'Riga'], correctAnswer: "Sarajevo"},
    // {question: "What is the capital of Liechtenstein?",img:'', options: ['Vaduz', 'Vatican City', 'Prague', 'Skopje'], correctAnswer: "Vaduz"},
    // {question: "What is the capital of Vatican City?",img:'', options: ['Dublin', 'Riga', 'Bratislava', 'Vatican City'], correctAnswer: "Vatican City"},
    // {question: "What is the capital of Switzerland?",img:'', options: ['Reykjavik', 'Bern', 'Bucharest', 'Bern'], correctAnswer: "Bern"},
    // {question: "What is the capital of Spain?",img:'', options: ['Reykjavik', 'Madrid', 'Sarajevo', 'Copenhagen'], correctAnswer: "Madrid"},
    // {question: "What is the capital of Vatican City?",img:'', options: ['Berlin', 'Vatican City', 'Amsterdam', 'Bratislava'], correctAnswer: "Vatican City"},
    // {question: "What is the capital of Czech Republic?",img:'', options: ['Prague', 'Helsinki', 'Bern', 'San Marino'], correctAnswer: "Prague"},
    // {question: "What is the capital of Czech Republic?",img:'', options: ['Prague', 'Vienna', 'Helsinki', 'Luxembourg City'], correctAnswer: "Prague"},
    // {question: "What is the capital of Czech Republic?",img:'', options: ['Reykjavik', 'Warsaw', 'Moscow', 'Prague'], correctAnswer: "Prague"},
    // {question: "What is the capital of Hungary?",img:'', options: ['Sofia', 'London', 'Budapest', 'Podgorica'], correctAnswer: "Budapest"},
    // {question: "What is the capital of France?",img:'', options: ['Vienna', 'Paris', 'Prague', 'Valletta'], correctAnswer: "Paris"},
    // {question: "What is the capital of Bulgaria?",img:'', options: ['Tirana', 'Sofia', 'Podgorica', 'Vatican City'], correctAnswer: "Sofia"},
    // {question: "What is the capital of Ireland?",img:'', options: ['Dublin', 'Skopje', 'Chisinau', 'Madrid'], correctAnswer: "Dublin"},


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
            window.location.href = "final.html";
        }, 0); // Delay in milliseconds (2 seconds in this example)
    }
    

    // Update the score display
    scoreElement.textContent = `Score: ${score}`;
}

// Initialize the game by loading the first question
loadQuestion(currentQuestionIndex);
// update