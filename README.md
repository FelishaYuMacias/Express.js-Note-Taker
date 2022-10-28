# Express.js-Note-Taker
Module 11 Challenge

## Description

Modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

### User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


### Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with 
existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

*   Right click on server.js and select "Open in Integrated Terminal"

*   The file package.json should be included with the files. Run the following command to install the correct versions of express and uuid.
 ``` md 
 npm i 
 ``` 

## Usage

* Click on deployed link below

* Click Get Started.

* To add a note, type your title in the "Note Title" section and note in the "Note Text" section. 

* When you have typed in both areas, a save icon will appear. Click it to save your note. It will show up on the list to the left.

* To view a note, click on the title to the left and the note will appear in the right.

* To add note while a note is displayed, click the + button to reset the page.

* To delete a note, click the red delete button to the right of the title.

* To navigate to the homepage, click Note Taker in the top left.

## Screenshots

### Start Page
![Start Page](/public/assets/images/startPage.png)

### Note Page
![Note Page](/public/assets/images/notePage.png)

### New Note
![New Note](/public/assets/images/newNote.png)

### Note Selected
![Note Selected](/public/assets/images/noteSelected.png)


## Credits

Express
https://expressjs.com/en/guide/routing.html

UUID
https://www.npmjs.com/package/uuid

## License

MIT License

Copyright (c) 2022 Felisha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
