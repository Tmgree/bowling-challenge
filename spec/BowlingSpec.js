describe("Bowling_game", function() {
  var bowling_game;

  beforeEach(function() {
    bowling_game = new Bowling_game();
  });

  describe("score", function() {
  it("default score should be 0", function() {
    expect(bowling_game.score).toEqual(0);
  });
});

describe("frame", function() {
it("default frame should be 1", function() {
  expect(bowling_game.frame).toEqual(1);
});
});

describe("increase_frame", function() {
it("should increase the frame by 1", function() {
  bowling_game.increase_frame();
  bowling_game.frame_score(3,4)
  expect(bowling_game.frame).toEqual(3);
});
});

describe("frame_score", function() {
it("the score from frame1 and frame2 should add on to the game's score", function() {
  bowling_game.frame_score(3,4);
  expect(bowling_game.score).toEqual(7);
});

it("should not allow the total of frame1 and frame2 to total more than 10", function() {
  expect(function(){bowling_game.frame_score(6,6);}).toThrow("error frame score cannot be above 10");
});

});


});
