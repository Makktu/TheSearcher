# The Searcher

React Native.

A mobile app that will provide a generic search portal and display results for any provided data object (JSON only to begin with).

The user will be able to load a JSON data set from anywhere and search it.

The v0.1 prototype will use hardcoded sample data.

Later versions will allow for any data to be imported and searched.

### 10 December 2023

Setting up the project. Tab-bar navigation and basic screens set up. One screen will be the Configuration screen where the user will load the data and choose other options. The other screen will be the main search portal.

### 11 December 2023

Added basic Search and Cancel buttons, and new components for same. Not connected up yet. Made it so that the Search box is at the bottom of the screen within easy thumb-reach, but moves to the top of the screen when the keyboard slides in, and moves back again when the keyboard is dismissed. Uses addListener for the Keyboard events, which I didn’t know existed in React Native until today.

### 12 December 2023

Added all search functionality and the old display styling just to see. Working next on the web/mobile functionality. The same problem as before still exists: the search box vanishes on the web view when the user starts typing.
