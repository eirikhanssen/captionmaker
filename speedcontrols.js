function speedcontrols(){
    var video_el = document.querySelector('#videoElm');
    console.log('speedcontrols');

    var speedbuttons = document.querySelectorAll('button.speed');

    function adjustSpeed(event) {
        var target = event.target;
        if(target.nodeName != 'BUTTON') {
            target = target.parentNode;
        }
        video_el.playbackRate=target.getAttribute('data-speed');
        for(var i = 0; i < speedbuttons.length; i++) {
            $(speedbuttons[i]).removeClass('current-speed');
        }
        $(target).addClass('current-speed');
    }

    for(var i = 0; i < speedbuttons.length; i++) {
        if(speedbuttons[i].getAttribute('data-speed') == 1) {
            $(speedbuttons[i]).addClass('current-speed');
        }
        speedbuttons[i].addEventListener('click', adjustSpeed, false);
    }

}
window.addEventListener('load',speedcontrols,false);