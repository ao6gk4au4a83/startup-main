// Retrieve the score from local storage
var score = localStorage.getItem('score');
var username = localStorage.getItem('username');

// Display the score on the final page
document.getElementById('final-score').innerText = score + '/7';

// Define the saveScore function
async function saveScore(score) {
    const userName = username
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score: score, date: date };

    try {
        const response = await fetch('/api/score', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newScore),
        });

        // Store what the service gave us as the high scores
        const scores = await response.json();
        localStorage.setItem('scores', JSON.stringify(scores));
    } catch (error) {
        // If there was an error then just track scores locally
        updateScoresLocal(newScore);
    }
}

// Define the updateScoresLocal function
function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
        scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
        if (newScore.score > prevScore.score) {
            scores.splice(i, 0, newScore);
            found = true;
            break;
        }
    }

    if (!found) {
        scores.push(newScore);
    }

    if (scores.length > 10) {
        scores.length = 10;
    }

    localStorage.setItem('scores', JSON.stringify(scores));
}

// Define the loadScores function
async function loadScores() {
    let scores = [];
    try {
        // Get the latest high scores from the service
        const response = await fetch('/api/scores');
        scores = await response.json();

        // Save the scores in case we go offline in the future
        localStorage.setItem('scores', JSON.stringify(scores));
    } catch (error) {
        // If there was an error then just use the last saved scores
        const scoresText = localStorage.getItem('scores');
        if (scoresText) {
            scores = JSON.parse(scoresText);
        }
    }

    displayScores(scores);
}

function displayScores(scores) {
    const tableBodyEl = document.querySelector('#scores');

    if (scores.length) {
        // Update the DOM with the scores
        for (const [i, score] of scores.entries()) {
            const positionTdEl = document.createElement('td');
            const nameTdEl = document.createElement('td');
            const scoreTdEl = document.createElement('td');
            const dateTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            nameTdEl.textContent = score.name;
            scoreTdEl.textContent = score.score;
            dateTdEl.textContent = score.date;

            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameTdEl);
            rowEl.appendChild(scoreTdEl);
            rowEl.appendChild(dateTdEl);

            tableBodyEl.appendChild(rowEl);
        }
    } else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
}

// Call the loadScores function
saveScore(score);
loadScores();
updateScoresLocal();

