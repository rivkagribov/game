document.addEventListener('DOMContentLoaded', function() {
    const gridSize = 5; // Adjust as needed
    const grid = document.getElementById('grid');
    const acrossClues = document.getElementById('across-clues');
    const downClues = document.getElementById('down-clues');
    const checkButton = document.getElementById('checkButton')
    checkButton.addEventListener('click', checkPuzzle);


     for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('maxlength', '1');
            input.classList.add('cell');
            input.setAttribute('id', `cell-${i}-${j}`);
            grid.appendChild(input);
        }
    } 

    across.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.number}. ${item.clue}`;
        acrossClues.appendChild(li);
    });

    down.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.number}. ${item.clue}`;
        downClues.appendChild(li);
    });

    // Check puzzle function (customize with your own answers)
    function checkPuzzle() {
         const answers = [
            ["A", "M", "I", "S", "H" ],
            ["F", "R", "U", "I", "T" ],
            ["S", "T", "I", "N", "K"],
            ["H", "O", "N", "E", "Y"],
            ["B", "E", "S", "T", ""]
        
 ];
        let isCorrect = true;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const cell = document.getElementById(`cell-${i}-${j}`);
                const userInput = cell.value.toUpperCase();
                const correctAnswer = answers[i][j];

                if (userInput === correctAnswer) {
                    cell.style.backgroundColor = "green"; // Correct answer
                } else {
                    cell.style.backgroundColor = "red"; // Incorrect answer
                    isCorrect = false;
                }
            }
        }

        if (isCorrect) {
            alert("Congratulations handsome! You solved the crossword puzzle!");
        } else {
            alert("Uh Oh! Some answers are incorrect. Try again :).");
        }
    }

    window.checkPuzzle = checkPuzzle; // Make function accessible to the button
});
