var counter = 1;
var totalSlider= $('.slide_img').length;
$(document).ready(function(){
  $("#num").text(counter);
  $("#t_num").text(totalSlider);
//   Previus Button
  $("#pre").click(function(){
    $('.w'+counter).animate({
      width: 0
    });
    counter--;
    if(counter==0)
    {
        counter=totalSlider;
    }
    if(counter==1)
    {
      $('#title_name').text('Audi Car');
      $('#d1').text('Red');
      $('#d2').text('Diesel');
    }
    else if(counter==2)
    {
      $('#title_name').text('Scorpio Car');
      $('#d1').text('White');
      $('#d2').text('Petrol');
    }
    else if(counter==3)
    {
      $('#title_name').text('Honda Car');
      $('#d1').text('White');
      $('#d2').text('Diesel');
    }
    else if(counter==4)
    {
      $('#title_name').text('Baleno Car');
      $('#d1').text('Blue');
      $('#d2').text('Petrol');
    }
    $('.w'+counter).animate({
      width: '97%'
    });
    $("#num").text(counter);
  });
  
//   Next Button
  $("#next").click(function(){
    if(counter==totalSlider)
    {
        counter=0;
    }
    $('.w'+counter).animate({
      width: 0
    });
    counter++;
    if(counter==1)
    {
      $('#title_name').text('Audi Car');
      $('#d1').text('Red');
      $('#d2').text('Diesel');
    }
    else if(counter==2)
    {
      $('#title_name').text('Scorpio Car');
      $('#d1').text('White');
      $('#d2').text('Petrol');
    }
    else if(counter==3)
    {
      $('#title_name').text('Honda Car');
      $('#d1').text('White');
      $('#d2').text('Diesel');
    }
    else if(counter==4)
    {
      $('#title_name').text('Baleno Car');
      $('#d1').text('Blue');
      $('#d2').text('Petrol');
    }
    $('.w'+counter).animate({
      width: '97%'
    });
    $("#num").text(counter);
  });
  
//   Details
  // $('.details_content').hide();
  $('#details').click(function(){
     $('.details_content').animate({
      width: '200px'
    });
  });
  // $('#color_input').on("change", function(){
  //   var inputColor = $('#color_input').val();
  //   if(counter==1)
  //   {
  //     $('.c1').css('background',inputColor);
  //   }
  //   else if(counter==2)
  //   {
  //     $('.c2').css('background',inputColor);
  //   }
  //   else if(counter==3)
  //   {
  //     $('.c3').css('background',inputColor);
  //   }
  //   else if(counter==4)
  //   {
  //     $('.c4').css('background',inputColor);
  //   }
  // });
  $('#close').click(function(){
     $('.details_content').animate({
      width: 0
    });
  });
});