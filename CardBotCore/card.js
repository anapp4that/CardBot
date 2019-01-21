module.exports{

  function Card(cardName, eventType, date, isCurrentCard){
    this.Name = cardName;
    this.eventType = eventType;
    this.date = date;
    this.comments = [];
    this.matches = [];
    this.Winner = []; //is array to account for ties
    this.isLocked = false;
    this.isComplete = false;
    this.isCurrentCard = isCurrentCard;
  }

  card.prototype.getCardName = function () {
    return this.Name;
  };

  card.prototype.setCardName = function (name) {
    this.Name = name;
  };

  card.prototype.getEventName = function () {
    return this.eventType;
  };

  card.prototype.setEventName = function (type) {
    this.eventType = type;
  };

  card.prototype.getCardYear = function () {
    return  this.date;
  };

  card.prototype.setCardYear = function (date) {
    this.date = date;
  };

  card.prototype.clearComments = function () {
    this.comments = [];
  };

  card.prototype.addComment = function (comment) {
    this.comments.push(comment);
  };

  card.prototype.addMatchToCard = function (match) {
    this.matches.push(match);
  };

  card.prototype.removeMatchFromCard = function (match) {
    for (var i = 0; i < this.matches.length; i++) {
      if( this.matches[i] == match){
        this.matches.splice(i ,1)

        return;
      }
    }
  };

  card.prototype.setCardWinner = function (name) {
    if( Array.isArray(name) ){
      this.winner = name;
    }
    else{
      this.winner.push(name);
    }
  };

  card.prototype.lockCard = function () {
    this.isLocked = true;
  };

  card.prototype.unlockCard = function () {
    this.isLocked = false;
  };

  card.prototype.markCardComplete = function () {
    this.isComplete = true;
    this.isCurrentCard = false;
  };

  card.prototype.markCardIncomplete = function () {
    this.isComplete = false;
  };

  card.prototype.setIsComplete = function (flag) {
    this.isComplete = flag;
  };
};
