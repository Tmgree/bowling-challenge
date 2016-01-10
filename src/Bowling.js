function Bowling_game() {
  this.score = 0;
  this.frame = 1;
}

Bowling_game.prototype.frame_score = function(frame1_score, frame2_score) {
  this.valid_score(frame1_score, frame2_score);
  this.valid_total_score(frame1_score, frame2_score);
  this.score += frame1_score + frame2_score;
  this.increase_frame();
}

Bowling_game.prototype.increase_frame = function() {
  this.frame += 1;
}

Bowling_game.prototype.valid_total_score = function(frame1_score, frame2_score)
{
  if(frame1_score + frame2_score >=10 || frame1_score + frame2_score < 0 ) {
    throw("error frame score cannot be above 10 or below 0")}
};

Bowling_game.prototype.valid_score = function(frame1_score, frame2_score)
{
  if(frame1_score >=10 || frame1_score  < 0 ) {
    throw("error frame score cannot be above 10 or below 0")}
    else if(frame2_score >=10 || frame2_score  < 0 ) {
    throw("error frame score cannot be above 10 or below 0")}
}
