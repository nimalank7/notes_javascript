(function(exports){
  function NoteController(list_model) {
    this.list_model = list_model
    this.list_view = nil
  }
  NoteController.prototype.add_note = function (string) {
    return this.list_model.create_note(string);
  }
  NoteController.prototype.create_list_view = function () {
    return this.list_view = new ListView(this.list_model);
  }
  NoteController.prototype.generate_HTML = function () {
    return this.list_view.generate_HTML();
  }
  NoteController.prototype.insert_HTML = function () {
    const element = document.getElementById("app")
    element.innerHTML = this.generate_HTML()
  }
exports.NoteController = NoteController;

})();
