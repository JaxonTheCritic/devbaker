$(document).ready(function() {
  for (let i = 0; i < 8; i++) {
    $("#firstRow").append('<div class="seat">SEAT</div>');
    $("#secondRow").append('<div class="seat">SEAT</div>');
    $("#thirdRow").append('<div class="seat">SEAT</div>');
    $("#fourthRow").append('<div class="seat">SEAT</div>');
  }

  $("#firstRow, #secondRow, #thirdRow, #fourthRow").each(function() {
    while ($(this).children().length < 8) {
      $(this).append('<div class="seat">SEAT</div>');
    }
  });

  $('#podium').draggable();

  $(document).on('click', (event) => {
    let $clicked = $('#'+event.target.id);  
    console.log(event.target.id, $('#'+event.target.id).position().left);
  });
});