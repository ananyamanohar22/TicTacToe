// Update the game board
function updateBoard(index) {
    // Update the game board state in the JavaScript code
  }
  
  // Check if there is a winner
  function handleResultValidation() {
    // Check if there is a winner in the game board state
    // If there is a winner, announce the winner and end the game
  }

  function handleResultValidation() {
    // Check if there is a winner in the game board state
    if (hasWinner()) {
      // Announce the winner
      alert(`Player ${currentPlayer} wins!`);
      // End the game
      isGameActive = false;
    }
  }
  function hasWinner() {
    // Check for three in a row
    for (let i = 0; i < 3; i++) {
      if (tiles[i].innerText === tiles[i + 3].innerText && tiles[i + 3].innerText === tiles[i + 6].innerText) {
        return true;
      }
    }
  
    // Check for three in a column
    for (let i = 0; i < 3; i++) {
      if (tiles[i].innerText === tiles[i + 1].innerText && tiles[i + 1].innerText === tiles[i + 2].innerText) {
        return true;
      }
    }
  
    // Check for three diagonally
    if (tiles[0].innerText === tiles[4].innerText && tiles[4].innerText === tiles[8].innerText) {
      return true;
    } else if (tiles[2].innerText === tiles[4].innerText && tiles[4].innerText === tiles[6].innerText) {
      return true;
    }
  
    // No winner
    return false;
  }