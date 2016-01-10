function Bowling_game() {
  this.score = 0;
  this.frame = 1;
}

Bowling_game.prototype.frame_score = function(frame1_score, frame2_score) {
  this.score += frame1_score + frame2_score;
  this.increase_frame;
}

Bowling_game.prototype.increase_frame = function() {
  this.frame += 1;
}
