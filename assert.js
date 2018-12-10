var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Expected: " + assertionToCheck + " to be true but got false");
    } else { console.log("This test has passed.")}
  }
};
