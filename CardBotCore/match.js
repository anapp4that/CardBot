module.exports = {

  function match(type, corners){
    if( !Array.isArray(corners) ){
      throw "corner check not implemented";
    }
    else{
      //deep copy the corners
      this.corners = JSON.parse(JSON.stringify(corners));
    }

    this.type = type;
    this.comments = [];
    this.isLocked = false;
    this.winner = null;
    this.isComplete = false;

  }

  match.prototype.getType = function () {
    return this.type;
  };

  match.prototype.setType = function (type) {
    this.type = type;
  };

  match.prototype.getComments = function () {
    return this.comment;
  };

  match.prototype.addComment = function (comment) {
    this.comment.push("comment");
  };

  match.prototype.clearComments = function () {
    this.comments = [];
  };

  match.prototype.lockMatch = function () {
    this.isLocked = true;
  };

  match.prototype.unlockMatch = function () {
    this.isLocked = false;

    if(isComplete){
      this.isComplete = false;
    }
  };

  match.prototype.setWinner = function (name) {
    for (var i = 0; i < this.participants.length; i++) {

      if(this.participants[i] == name){
        this.winner = i;

        //break out of the loop
        i = this.participants.length;
      }

    }
  };

  match.prototype.markComplete = function () {
    if(this.winner != null){
      this.isComplete = true;
      this.isLocked = true;
    }
    else{
      console.log("You must mark a winner before closing the match");
      //throw exception
    }
  };

};
