# Rock-Paper-Scissors Game

You can play it now at [Isha's Rock-Paper-Scissors Game](https://www.iviragi.com/rock-paper-scissors)

A Rock Paper Scissors game that delves deeper into JavaScript's core topics, helping strengthen the foundations of building websites.

## Usage

Here's how you can play the game:

- **Make Your Move**:  
  Select your move (rock, paper, or scissors) by:

  - Clicking the corresponding icons
  - Pressing the keyboard keys 'r' (rock), 'p' (paper), or 's' (scissors)

- **See the Outcome**:  
  The computer will randomly generate a move and compare it with yours, letting you know if you won, lost, or tied!

- **Track Your Score**:

  - Watch your updated score in real-time!
  - It is also stored in your browser, so it persists even if you leave the page and return later

- **Auto-Play Feature**:

  - Enable auto-play by clicking the "auto-play" button or pressing 'a'
  - Choose the move you want the computer to repeatedly play against (rock, paper, or scissors)
  - Watch as the computer plays against your selected move at 1-second intervals

- **Reset Your Score**:  
  Reset the game score by clicking the "reset" button or pressing the 'Backspace' key

## Core Concepts Covered

1. **LocalStorage**
   This project stores the score of the user in their browser's localStorage, allowing the **persistence** of data. The usage of this feature goes in conjunction with using and understanding:

   - JSON  
     A data format (String) globally understood by computers, significantly useful in transferring data over the internet
   - JavaScript Objects
     Since the local storage only supports `Strings`, this project parses and stringifies JavaScript Objects to store structured data into local storage

2. **DOM Manipulation**
   The Document Object Model allows for the manipulation of the entire webpage. In this project, this was mainly used with:

   - `.querySelector()`  
     Allows the selection of any specified element in the page
   - `.classList`  
     Allows the manipulation of the specified element's styles

3. **EventListeners**
   Event Listeners, compared against `HTML` event attributes, are more versatile and help keep the logic and structure of a webpage in separate files.
   Utilized Event Listeners to make the page interactive, with mouse and keyboard

4. **Modularity**
   Separated code into small sized, easily readable and reusable functions, ensuring no code duplication

5. **Dynamic Rendering**
   Dynamically rendered the `HTML` upon user interaction

6. **Asynchronous Behaviour**
   Used built-in function `setInterval()` to schedule repeated automated plays against the computer at 1 second intervals

## Future Enhancements

- [ ] Locking the user in once they select 'Reset'; only allowing them to select 'yes' or 'no' before being able to interact with the game again
- [ ] Adding sound effects when a move is selected to create more immersion
- [ ] Adding animation for selected moves, creating a more visual experience and causing a few seconds of anticipation as the animation plays out
  - [ ] Allowing the user to toggle the animation on/off for immediate results
- [ ] Implement unit tests for better reliability
- [ ] Implementing multiplayer mode for users to play against each other

## And Finally, The Thank-Yous

Thank you for checking out my repo! If you have any feedback, feel free to reach out via [LinkedIn](https://www.linkedin.com/in/ishaviragi/), or email me at isha.viragi@gmail.com
