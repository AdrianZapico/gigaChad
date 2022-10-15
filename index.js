
var CanSilence = document.createElement('audio');
var CanSee= document.createElement('audio');
var CanFix = document.createElement('audio');
var CanYouFeel = document.createElement('audio');

CanSilence.setAttribute('src', './audios/primary.mp3');
CanSee.setAttribute('src', './audios/second.mp3');
CanFix.setAttribute('src', './audios/third.mp3');
CanYouFeel.setAttribute('src', './audios/four.mp3');

$("img").hide()

//canSilenceImage.setAttribute('src',);

$('#CanSilence').on("click",function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    CanSilence.play();
    CanSilence.currentTime = 0;
    $('#feel').hide()
    $('#hear').show();

});




$('#CanSee').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    CanSilence.pause();
    CanSee.play();
    CanSee.currentTime = 0
    $('#feel').hide()
    $('#see').show();

});



$('#CanFix').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    CanSilence.pause();
    CanFix.play();
    CanFix.currentTime = 0
    $('#feel').hide()
    $('#fix').show();

});



$('#CanYouFeel').click(function() {
    CanYouFeel.pause();
    CanFix.pause();
    CanSee.pause();
    CanSilence.pause();
    CanYouFeel.play();
    CanYouFeel.currentTime = 0

    $('img').hide()
    $('#feel').show();
    
});



