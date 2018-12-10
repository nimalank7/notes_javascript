(function(exports){
  function List(){
    this.notes = [];
  };
  List.prototype.stored_notes = function(){
    return this.notes;
  };
  List.prototype.create_note = function(string){
    this.notes.push(new Note(string))
  };

  exports.List = List;
})(this);
