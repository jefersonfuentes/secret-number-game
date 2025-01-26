# Secret Number Guessing Game 🎲

This a simple JavaScript guessing game where players try to guess a randomly generated secret number. Each attempt provides hints to help find the correct number.

## Features

- Automatically generates a secret number between 1 and 10.
- Indicates whether the secret number is higher or lower than the user's guess.
- Tracks the number of attempts made.
- Includes a restart feature for multiple rounds of play.

## How It Works

1. The game generates a random secret number between 1 and 10 for the user to guess.
2. The user enters their number in a text box and clicks a button to check their guess.
3. If the user guesses correctly, the game displays the number of attempts it took to win.
4. If the user guesses incorrectly, the game hints whether the secret number is higher or lower.
5. The "Restart" button allows the user to start a new game.

## Main Code

The game is implemented in JavaScript and includes the following key functions:

- **`asignarTextoElemento(element, text)`**: Assigns text to an HTML element.
- **`verificarIntento()`**: Checks if the user's input matches the secret number.
- **`limpiarCaja()`**: Clears the user's input field.
- **`generarNumeroSecreto()`**: Generates a random secret number and ensures it isn't repeated.
- **`condicionesIniciales()`**: Sets the game's initial conditions.
- **`reiniciarJuego()`**: Resets the game to its starting state.

## How to Play

1. Clone the repo:
   ```bash
   git clone https://github.com/jefersonfuentes/secret-number-game.git
   ```
2. Open `index.html` in your browser.
3. Guess the secret number and enjoy!

![image](https://github.com/user-attachments/assets/efca46bc-9900-4808-bff5-752969be5a6d)
