function sourceloader() {
   // console.log('sourceloader()');
    var text_to_sync = {k:[], l:[]};

    var textloader_area = document.querySelector('#textloader_source');

    function select_text_source(){
        //console.log("select_text_source()");
        var selected_audio = document.querySelector('#audioloader').value;
        var storytype = selected_audio.replace(/^.+?_(\d\d)(k|K|L|l)[.]ogg$/,'$2').toLocaleLowerCase();
        var num = parseInt(selected_audio.replace(/^.+?_(\d\d)(k|K|L|l)[.]ogg$/,'$1'));

        var text_source;

        switch(storytype) {
            case 'k':
                text_source = text_to_sync.k[num];
            break;
            case 'l':
                text_source = text_to_sync.l[num];
            break;
            default: 
                text_source = 'could not find matching text source!';
            break;
        }

        textloader_area.value = text_source;
    }

    document.querySelector('#loadVideoFromUrl').addEventListener('click', select_text_source, false);

    function audioLoader() {
        //console.log('audioLoader()');
        var audioloader = document.querySelector('#audioloader');
        var createOption = function(num, letter) {
            if(num < 10) {
                num = String('0'+num);
            }
            var content = 'NO_' + num + letter;
            var value = "http://lumbrikus.no/media/audio/ogg_64k/" + content + ".ogg";
            var option = document.createElement('OPTION');
            option.setAttribute('value',value);
            option.innerHTML=content;
            return option;
        }

        for(var i=0; i<=11; i++) {
            audioloader.appendChild(createOption(i,'K'));
            audioloader.appendChild(createOption(i,'L'));
        }
        function loadMediaUrl(){
            var videoURL = document.querySelector('#videoURL');
            videoURL.value = audioloader.value;
        }
        audioloader.addEventListener('change',loadMediaUrl,false);
    }
    //audioLoader();
    //window.addEventListener('load',audioLoader, false);

    /*text_to_sync.k.push(`subtitle line 1
subtitle line 2
subtitle line 3`);*/
}

window.addEventListener('load',sourceloader, false);
