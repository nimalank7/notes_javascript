(function(exports){
  function ListView(list_model){
    this.list = list_model;
  };
  ListView.prototype.generate_HTML = function() {
    var list = ''
    this.list.notes.forEach(function(note) {
      var notes = note.display_text()
      list += "<li>" + notes + "</li>"
    });

    var HTML = "<ul>" + list + "</ul>";
    return HTML;
  };

  exports.ListView = ListView;
})(this);
