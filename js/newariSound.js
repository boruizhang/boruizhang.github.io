$(document).ready(function(){

  console.log("Hello Bree");

  // Ka
  $('#ka').click(function(){
    console.log("ka");
    var audio = new Audio('../newarisounds/ka-kamsa.wav');
    audio.play()
    });

// Kha
  $('#kha').click(function(){
    console.log("kha");
    var audio = new Audio('../newarisounds/kha-khe.wav');
    audio.play()
    });
    // ga
  $('#ga').click(function(){
    console.log("ga");
    var audio = new Audio('../newarisounds/ga-guru.wav');
    audio.play()
    });

    // gha
  $('#gha').click(function(){
   console.log("gha");
   var audio = new Audio('../newarisounds/gha-ghasi.wav');
   audio.play()
   });


});
