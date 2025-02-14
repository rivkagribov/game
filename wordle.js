document.addEventListener('DOMContentLoaded', function() {
    const gridSize = 5; // Adjust as needed
    const grid = document.getElementById('grid');
    const acrossClues = document.getElementById('across-clues');
    const downClues = document.getElementById('down-clues');

    // Generate grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '1');
        input.classList.add('cell');
        grid.appendChild(input);
    }

    // Add clues (customize with your own clues)
    const across = [
        { number: 1, clue: "Example across clue 1" },
        { number: 3, clue: "Example across clue 2" }
    ];

    const down = [
        { number: 1, clue: "Example down clue 1" },
        { number: 2, clue: "Example down clue 2" }
    ];

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
        const answers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]; // Example answers
        const cells = document.querySelectorAll('.cell');
        let isCorrect = true;

        cells.forEach((cell, index) => {
            if (cell.value.toUpperCase() !== answers[index]) {
                cell.style.backgroundColor = 'red';
                isCorrect = false;
            } else {
                cell.style.backgroundColor = 'green';
            }
        });

        if (isCorrect) {
            alert("Congratulations! You solved the crossword puzzle!");
        } else {
            alert("Oops! Some answers are incorrect. Try again.");
        }
    }

    window.checkPuzzle = checkPuzzle; // Make function accessible to the button
});
