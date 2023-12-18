const board = document.getElementById('board');
const cells = document.querySelectorAll('[data-cell]');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
    const cell = e.target;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
    } else if (isBoardFull()) {
        alert("It's a draw!");
        resetGame();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => cells[index].textContent === currentPlayer);
    });
}

function isBoardFull() {
    return [...cells].every(cell => cell.textContent !== '');
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
    cells.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true });
    });
}

