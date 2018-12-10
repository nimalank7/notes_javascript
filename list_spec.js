// Test 1: Tests whether list is an instance of the List prototype

function createsAnInstanceOfList() {
  var list = new List;
  assert.isTrue(List.prototype.isPrototypeOf(list)) === true;
};
createsAnInstanceOfList();

// Test 2: Stores notes models in an array

function StoresNotesInAnArray() {
  var list = new List;
  assert.isTrue(list.notes) === [];
};
StoresNotesInAnArray();

// Test 3: Returns array of note models in an array

function ReturnsStoredNotesInAnArray() {
  var list = new List;
  assert.isTrue(list.stored_notes()) === [];
};
ReturnsStoredNotesInAnArray();

// Test 4: Creates and stores an instance of the note model

function CreatesANoteInstance() {
  var list = new List;
  list.create_note("Hello")
  assert.isTrue(list.stored_notes()[0]) === "Hello";
};
CreatesANoteInstance();
