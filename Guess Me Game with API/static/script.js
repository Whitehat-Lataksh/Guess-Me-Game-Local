// Selecting the random word

// Setting the life of the player
function fillBlanks(randomWord) {
  $("#life").html(randomWord.inputs + randomWord.inputs + 2);
  var life = parseInt($("#life").text());

  // setting the number of blanks equal to the inputs the word requires
  var word_blank = document.getElementById("blanks");

  for (var i = 0; i < randomWord.inputs; i++) {
    var span = document.createElement("span");
    span.setAttribute("class", "fill_blanks");
    span.setAttribute("id", "i");
    span.innerHTML = "_";
    word_blank.append(span);
  }

  // Setting the hint
  $("#hint").html("Hint: The category is " + randomWord.category);

  // Actual Game Logic::
  var gameOver = false;
  var filledWord = 0;

  $(".clickable").click(function () {
    var wordComplete = false;
    var id = $(this).attr("id");
    if (life > 0) {
      for (var i = 0; i < randomWord.inputs; i++) {
        //Sets only if the word is not completed
        if (
          randomWord.word.charAt(i).toLowerCase() == id &&
          wordComplete == false
        ) {
          $(".fill_blanks").eq(i).html(id);
          filledWord++;
        }
      }
    }
    if (filledWord >= randomWord.inputs) {
      alert("You Won!!");
    }
  });
}

$(document).ready(function () {
  getTemplate();
});

function getTemplate() {
  $.ajax({
    url: "/get_template",
    type: "get",
    success: function (randomWord) {
      fillBlanks(randomWord);
    },
    error: function (result) {
      console.error("none");
    },
  });
}
