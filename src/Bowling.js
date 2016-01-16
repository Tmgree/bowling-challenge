function Bowling_game() {
  this.score = 0;
  this.score_history = [];
  this.frame_history = [];
  this.frame =1;
  this.is_strike = false;
  this.strike_history = [];
  this.is_spare = false;
  this.spare_history = [];
}
var temp_score = 0;

Bowling_game.prototype.frame_score = function(frame1_score, frame2_score) {
  this.valid_score(frame1_score, frame2_score);
  this.valid_total_score(frame1_score, frame2_score);
  this.score_history.push(frame1_score + frame2_score);
  this.frame_history.push(frame1_score);
  this.frame_history.push(frame2_score);
  this.add_score(frame1_score, frame2_score);
  this.strike(frame1_score, frame2_score);
  this.spare(frame1_score, frame2_score);
  this.end_game();
  this.increase_frame();
}

Bowling_game.prototype.add_score = function(frame1_score, frame2_score) {
    if(this.strike_history.length < 2){

    if(this.is_spare === true){
     this.score += frame1_score + frame2_score + frame1_score;
     this.is_spare = false;
   }

  else if(this.is_strike === false && this.is_spare === false){
    this.score += frame1_score + frame2_score;
  }
  else if(this.is_strike === true){
    this.score += 2*(frame1_score + frame2_score);
    this.is_strike = false;
  }
}
else {
  if(this.strike_history[this.strike_history.length-1] === true && this.strike_history[this.strike_history.length-2] === true){
    this.score += 2*(frame1_score + frame2_score)+frame1_score;
    this.is_strike = false;
  }

  else if(this.is_strike === false && this.is_spare === false){
    this.score += frame1_score + frame2_score;
  }

  else if(this.is_spare === true){
   this.score += frame1_score + frame2_score + frame1_score;
   this.is_spare = false;
 }

 else if(this.is_strike === true){
   this.score += 2*(frame1_score + frame2_score);
   this.is_strike = false;
 }

}
}

Bowling_game.prototype.increase_frame = function() {
  this.frame += 1;
}

Bowling_game.prototype.valid_total_score = function(frame1_score, frame2_score)
{
  if(frame1_score + frame2_score >10 || frame1_score + frame2_score < 0 ) {
    throw("error frame score cannot be above 10 or below 0")}
};

Bowling_game.prototype.valid_score = function(frame1_score, frame2_score)
{
  if(frame1_score >10 || frame1_score  < 0 ) {
    throw("error frame score cannot be above 10 or below 0")}
    else if(frame2_score >10 || frame2_score  < 0 ) {
    throw("error frame score cannot be above 10 or below 0")}
}

Bowling_game.prototype.end_game = function() {
  if(this.frame === 10) {throw("You have finished your 10 frames, your final score was " + this.score)}
}

Bowling_game.prototype.strike = function(frame1_score,frame2_score) {
      if(frame1_score === 10)
          {this.is_strike = true;
          this.strike_history.push(true);
        }
      else {
        this.strike_history.push(false);}

}

Bowling_game.prototype.spare = function(frame1_score,frame2_score) {
      if(frame1_score+frame2_score === 10 && frame1_score !== 10)
          {this.is_spare = true;
          this.spare_history.push(true);
        }
      else {
        this.spare_history.push(false);}

}
