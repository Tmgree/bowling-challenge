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

it("should end the game after 10 frames", function() {
  bowling_game.frame = 10;
  expect(function(){bowling_game.frame_score(3, 4)}).toThrow("You have finished your 10 frames, your final score was 7");
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


});

describe("valid_total_score", function() {
  it("should not allow the total of frame1 and frame2 to total more than 10", function() {
    expect(function(){bowling_game.valid_total_score(6,6);}).toThrow("error frame score cannot be above 10 or below 0");
  });


it("should not allow the total of frame1 and frame2 to total less than 0", function() {
  expect(function(){bowling_game.valid_total_score(-5,4);}).toThrow("error frame score cannot be above 10 or below 0");
});
});

describe("valid_score", function() {
  it("should not allow the value of frame1 or frame2 to be more than 10", function() {
    expect(function(){bowling_game.valid_score(15,6);}).toThrow("error frame score cannot be above 10 or below 0");
  });


it("should not allow the total of frame1 and frame2 to total less than 0", function() {
  expect(function(){bowling_game.valid_score(-5,4);}).toThrow("error frame score cannot be above 10 or below 0");
});
});

describe("frame_history", function() {
it("should store the total score of previous frames in an array", function() {
  bowling_game.frame_score(3,5)
  bowling_game.frame_score(7,2)
  expect(bowling_game.score_history).toEqual([8,9])
});
});

describe("strike", function() {
it("should double the score of the next frame and add it to 10", function() {
  bowling_game.frame_score(10,0)
  bowling_game.frame_score(7,2)
  expect(bowling_game.score).toEqual(28)
});
});


});
