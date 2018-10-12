function textloader(){
    //console.log('textloader.js');
    var textCaptionEntry = document.querySelector('#textCaptionEntry');
    var pauseButton = document.querySelector('#pauseButton');
    var textloader_source = document.querySelector('#textloader_source');
    var textloader_button = document.querySelector('#textloader_button');
    var loader_list = document.querySelector('#loader');
    var txt_source = document.querySelector('#textloader_source');
    
    function loadTextLine(el) {
        pauseButton.click();
        //console.log('loadTextLine()');
        var subtitle = el.innerHTML;
        $(el).addClass('added');
        try {
            var prevPrev = el.previousElementSibling.previousElementSibling;
        } catch(err) {
           // console.log(err.message);
        }
        
        if(prevPrev) {
            $(prevPrev).addClass('hide');
        }
        
        window.setTimeout(function(){textCaptionEntry.value = subtitle;},200);
    }

    function create_line(contents) {
        var li = document.createElement('LI');
        li.innerHTML = contents;
        return li;
    }

    function loaderInit() {
        //console.log('loaderInit()');
        var loader_list = document.querySelector('#loader');
        loader_list.innerHTML="";
        var txt_source_array = txt_source.value.split("\n");
        //console.log(txt_source);
        //console.log(txt_source_array);
        var line_contents;
        for(var j=0; j < txt_source_array.length; j++) {
            line_contents = String(txt_source_array[j]);
            if(line_contents.match(/^\s*$/)===null) {
                //console.log(line_contents);
                loader_list.appendChild(create_line(line_contents));
            } else {}
        }
        
        var lines = document.querySelectorAll('#loader li');

        for(var i = 0; i < lines.length; i++) {
            lines[i].addEventListener('click',function(event){
                loadTextLine(event.target);
            },false);
        }
    }

    textloader_button.addEventListener('click',loaderInit, false);
    
}
window.addEventListener('load',textloader,false);

document.onkeypress = function(e) {
    var saveCaptionAndPlayButton = document.querySelector('#saveCaptionAndPlay');
    e = e || window.event;
    var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
    if (charCode==124) {
        saveCaptionAndPlayButton.click();
    }
};