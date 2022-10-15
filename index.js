
var canSilence = document.createElement('audio');
var CanSee= document.createElement('audio');
var CanFix = document.createElement('audio');
var CanYouFeel = document.createElement('audio');
canSilence.setAttribute('src', 'primary.mp3');
CanSee.setAttribute('src', 'second.mp3');
CanFix.setAttribute('src', 'third.mp3');
CanYouFeel.setAttribute('src', 'four.mp3');

$('#CanSilence').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    canSilence.play();
    CanSilence.currentTime = 0;
    $("#status").text("Status: Playing");
});



$('#CanSee').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    canSilence.pause();
    CanSee.play();
    $("#status").text("Status: Playing");
});



$('#CanFix').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    canSilence.pause();
    CanFix.play();
    $("#status").text("Status: Playing");
});



$('#CanYouFeel').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    canSilence.pause();
    CanYouFeel.play();
    $("#status").text("Status: Playing");
});



