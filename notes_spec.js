// const body = document.querySelector('body');
// const paragraph = document.createElement('p');
// paragraph.textContent = "The test has passed.";
// body.appendChild(paragraph);

// Test 1: Tests whether note is an instance of the Note prototype

function createsAnInstanceOfNotes() {
  var note = new Note("Hello");
  assert.isTrue(Note.prototype.isPrototypeOf(note) === true);
};
createsAnInstanceOfNotes();

// Test 2: Tests that note returns what is passed in

function NoteReturnsText() {
  var note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};
NoteReturnsText();

// Test 3: Returns the text stored in a note

function MethodReturnsStoredTextInNotes() {
  var note = new Note("Hello");
  assert.isTrue(note.display_text() === "Hello");
};
MethodReturnsStoredTextInNotes();
