// Test 1: Creates an instance of the Note List View
function createsAnInstanceOfListView() {
  var list_view = new ListView("test");
  assert.isTrue(ListView.prototype.isPrototypeOf(list_view) === true);
};
createsAnInstanceOfListView();

// Test 2: Takes an instance of the list model and stores it in this.list

function takesAnListModel() {
  var new_list = new List();
  new_list.create_note("Hello");
  new_list.create_note("Goodbye");
  var list_view = new ListView(new_list);
  assert.isTrue(list_view.list.notes[0].text === "Hello")
  assert.isTrue(list_view.list.notes[1].text === "Goodbye")
}

takesAnListModel();

function returnsHTMLString() {
  var new_list = new List();
  new_list.create_note("Hello");
  new_list.create_note("Goodbye");
  var list_view = new ListView(new_list);
  var HTML = "<ul><li>Hello</li><li>Goodbye</li></ul>"
  assert.isTrue(list_view.generate_HTML() === HTML)
}

returnsHTMLString();
