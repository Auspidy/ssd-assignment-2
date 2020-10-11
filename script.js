
$(document).ready(() => {
 
    let values = ["SSD", "LA", "aos", "APS", "PROBABILITY"];

    let select = $('<select>').prop('id', 'subjects')
                    .prop('name', 'subjects');

    $(values).each(function() {
      select.append($("<option>")
        .prop('value', this)
        .text(this.charAt(0).toUpperCase() + this.slice(1)));
    });

    let label = $("<label>").prop('for', 'subjects')
                   .text("Choose your subjects: ");

    let br = $("<br>");

    $('#container').append(label).append(select).append(br);
  
  
$("button").click(function(){
  var imageUrl = "image.jpg";
  $(".bx").css("background-image", "url(" + imageUrl + ")");
});
  
  
   
   $(document).on("keypress", "input", function(e){
        if(e.which == 51){
            var inputVal = $(this).val();
            alert("You've entered: 3" + inputVal);
        }
    });
  
  
  function blink_t() {
    $('.fadein').fadeOut(600);
    $('.fadein').fadeIn(700);
}
setInterval(blink_t, 800);
    

});

