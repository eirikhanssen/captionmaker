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
    audioLoader();
    //window.addEventListener('load',audioLoader, false);

    text_to_sync.k.push(`#¶$Den røde planeten

#¶$Denne fortellinga begynner egentlig
¶$et helt annet sted.
¶$Den begynner i et solsystem
¶$som er vår nærmeste nabo.
¶$Den begynner ved Proxima Centauri.

#¶$Proxima Centauri er ei rød sol.
¶$Den er tusen ganger svakere enn sola vår.
¶$Den har brent lenge.
¶$Lyset fra den er rødt.

#¶$I oktober 2016 fant astronomene
¶$en planet som går rundt denne røde sola.

#¶$Astronomene forsøker å gjette:
¶$Kan det være liv
¶$på andre planeter enn jorda?
¶$Filmer og fortellinger viser
¶$at menneskene prøver å tenke seg det.
¶$Den nye planeten
¶$har kanskje en passe temperatur.
¶$Da tenker de:
¶$Hvis planeten er for kald,
¶$da fryser alt til is.
¶$Da blir det ikke noe liv.
¶$Hvis den er for varm,
¶$fordamper alt vann.
¶$Vannet blir vekk.
¶$Da blir det heller ikke liv.

#¶$De tror den nye planeten
¶$har mellom 0 og 100 grader.
¶$Da kan det være vann der.
¶$Og hvis det er vann,
¶$kan det være noe som lever.

#¶$Men hva slags liv?
¶$Er det jord der?
¶$Er det gress?
¶$Er det dyr?
¶$Er det noen som
¶$likner på mennesker?
¶$Kan de mindre enn oss,
¶$eller kan de mer?
¶$Kan vi finne dem?
¶$Kan de finne oss?

#¶$Så skjer det noe.
¶$Det lander et romskip
¶$i treet til Jenny og Samir.
¶$Jenny og Samir er to hyggelige
¶$mennesker som bor et sted i Norge.
¶$Romskipet ser ut som ei kule av glass.
¶$Ut kommer Hen og Katt.
¶$Hen sier at de kommer fra en planet
¶$som heter Mo-lo
¶$og som går rundt sola
¶$Proxima Centauri!

#¶$Hen sier at romskipet
¶$som de har reist med,
¶$ikke er av glass.
¶$Det er laget av et fjell
¶$som heter gzi-gzy,
¶$som tåler veldig mye.

#¶$Det høres ikke riktig ut
¶$at de har reist fra Mo-lo til jorda.
¶$Det er 4,2 lysår.
¶$Noen sier at det bare kunne skjedd
¶$i en Star Trek-film.
¶$Hen og Katt sier likevel at de har gjort det.
¶$At det er mulig for dem.
¶$Mo-lo betyr forresten mu-lig på norsk.

#¶$Men ett er sikkert:
¶$Dere kan altså finne Proxima Centauri
¶$på internett. 
$Dere kan lese
¶$om den planeten de nettopp fant.
¶$Og dere kan gå til neste kapittel som heter:
¶$Det kommer et romskip`
,
`#¶$Det kommer et romskip.

#¶$Jenny er ei jente.
¶$Samir er en gutt.
¶$De er venner. 
$De har en hage

#¶$– Sukkererter er godt, sa Jenny.
¶$– Vi kan så frø, så får vi mange.
¶$– Kræsj! 
$Brak! 
$Brekk! 
$Knus!
¶$Noe stort landet i treet.
¶$Det var ei kule.
¶$Var den av glass?
¶$Var den farlig?

#¶$Noe falt ut.
¶$En person hang i ei grein.
¶$– En rar person, sa Jenny lavt.
¶$– Den har lange ører som en rev!
¶$– En rar katt, sa Samir stille.
¶$– Den har sko!

#¶$Personen hoppet ned.
¶$Katta hoppet ned.
¶$Personen la handa over hjertet sitt
¶$og sa: 
$– Ikke vær redde.
¶$Vi kommer i fred.

#¶$– Jeg heter Hen.
¶$Dette er Katt.
¶$Vi har reist langt.
¶$Vi har reist forbi
¶$Neptun, Uranus, Saturn,
¶$Jupiter og Mars.

#¶$– Hvor kommer dere fra? 
$spurte Samir.
¶$– Fra planeten Mo-lo.
¶$Vi har vann.
¶$Vi kan snakke og forstå alle språk.
¶$Sola vår heter Proxima Centauri.

#¶$– Den kula der er vel ikke sterk, sa Samir.
¶$– Jo, sa Hen.
¶$– Den er laget av gzi-gzy fra et fjell.
¶$Gzi-gzy betyr mu-lig på deres språk.
¶$Vi har reist med mu-lig.

#¶$– Ta på disse brillene, sa Hen.
¶$– De er laget av fjellet gzi-gzy.
¶$Jenny tok på seg brillene.
¶$Samir tok på seg brillene.

#¶$– Jeg ser et stort dyr! 
$ropte Samir.
¶$Det er gult og brunt og har pels!
¶$En bjørn som kan fly!

#¶$– Nå bader den i en stor blomst!
¶$Blomsten drysser gult støv på den!
¶$– Støvet er pollen, sa Hen.
¶$– Det kommer fra hannblomster.
¶$Eller gutter, hvis du skjønner det bedre.

#¶$– Nå sitter den på en gul blomst
¶$på treet her! 
$sa Jenny og pekte.
¶$Det er hundre gule stilker med kuler på.
¶$– Kulene har pollen, sa Hen.

#¶$– Mellom stilkene er det små grønne krukker,
¶$sa Jenny. 
$– Bjørnen har snabel.
¶$Nå suger den vann fra de grønne kulene.
¶$– Det er sukker-vann, sa Hen. 
$– Nektar. 
$Mat.

#¶$– Bjørn med snabel og vinger, lo Samir.
¶$– Er det en elefantbjørn?
¶$– Blomsten rister gult støv på dyret, sa Jenny.
¶$– Dyret klør seg, så Samir. 
$– Den børster seg!
¶$– Hen sa: 
$Dyret har kurver på beina.
¶$Det samler blomsterstøv. 
$Mat.

#¶$Dyret fløy til treet
¶$som sto ved stiden av.
¶$Der var det grønne blomster.
¶$Mange små.

#¶$Mellom blomstene var det
¶$små grønne krukker med saft.
¶$Dyret sugde saft med snabelen sin.
¶$– Hunnblomster, sa Hen.
¶$– Eller jenter, om du skjønner det bedre.
¶$Mye saft.

#¶$Jenny så på dyret. 
$Det gule støvet
¶$på pelsen ble klint av på de grønne blomstene.
¶$Hen sa: 
$-Blomsterstøv fra hannblomst
¶$til hunn-blomst. 
$Pollinering. 
$Blir frø.

#¶$Dyret fløy vekk.
¶$– Nektar i magen og pollen i kurver,
¶$sa Hen. 
$– Mat for dyret.
¶$Mat for dem som skal bli nye dyr.

#¶$Jenny og Samir tok av seg brillene.
¶$– Hva var det vi så, sa Samir.
¶$– Der er det, smilte Hen og pekte.
¶$De så bare ei humle.
¶$– He? 
$Vanlig humle og vanlig seljeblomst?

#¶$– Vanlig? 
$sa Hen. 
$– Hva er vanlig?
¶$Ikke noe å bry seg om, tenker du?
¶$Men hvis du ser, virkelig ser,
¶$da skjer det merkelige ting.
¶$Kanskje du kan se det,
¶$uten disse brillene?

#¶$Katt sa ingenting.
¶$Katt skrudde på skruer og hjul
¶$i beltet sitt.
¶$Jenny spurte: 
$Men hvorfor kom dere hit?
¶$Hen smilte og sa: 
$– Dere får vite det.
¶$Siden. 
$Vær tålmodig.
¶$Tiden er din venn.`
,
`#¶$Risobium i erteknollen

#¶$Jenny er ei jente.
¶$Samir er en gutt.
¶$De er venner.
¶$Det kom et romskip.
¶$Det så ut som ei kule av glass.
¶$Ut kom Hen og Katt.
¶$Hen kan snakke alle språk.

#¶$Hen reparerer glasskula i dag.
¶$Det er vår.
¶$Jenny og Samir vil så frø.
¶$De vil ha sukkererter.

#¶$– Jeg vil så kikerter også, sa Jenny.
¶$– Vi kan lage hummus og falaffel.
¶$– Kikerter vokser ikke her i Norge, sa Hen.
¶$– De vokser i varmere land.

#¶$– Da sår vi ekstra mye sukkererter og bønner
¶$som tåler bedre at det er kaldt, sa Samir. 
$– Og gulrøtter!

#¶$– Det er fint med litt frø, 
$sa Jenny og åpna en pose.
¶$– Det er fint med mye frø, sa Hen.
¶$– Menneskene i verden spiser frø hver dag.
¶$– Det er høner som gjør det, sa Samir.

#¶$– Men du spiser kanskje brød, spurte Hen.
¶$– Ja, sa Samir.
¶$– Det kommer fra korn, og korn er frø. 
$Du spiser kanskje ris?
¶$– Ja.
¶$– Ris er frø. 
$Eller mais?
¶$– Ja.

#¶$-Mais er frø.  
$Havregryn er frø.
¶$Nøtter er frø. 
$Peanøtter er frø.
¶$– Ikke si mer, sa Jenny.
¶$– Jeg blir sulten på peanøtter!

#¶$Hen sa: 
$– Frøet er finere enn gull og sølv.
¶$Frøet er vår venn!

#¶$De sådde gulrøtter, sukkererter og bønner.
¶$Hen reparerte romskipet.
¶$Men hva gjorde Katt?
¶$Katt putta noe i jorda.

#¶$– Hva er det? 
$hviska Jenny.
¶$– Det likner på peanøtter?
¶$– Det vokser ikke peanøtter i Norge, 
$hviska Samir tilbake.
¶$– Kanskje det er noe fra planeten deres, sa Jenny.

#¶$Stemmen til Hen kom bak dem.
¶$– Dere trenger ikke kjøtt når dere har frø, sa Hen.
¶$– Jo, deilig kylling, sa Samir.
¶$– Kjøtt lager muskler i dere, sa Hen.
¶$– Det er proteinene i kjøttet som gjør det.
¶$Men bønner og erter og linser
¶$har også proteiner som lager muskler.

#¶$– Er det mulig?
¶$– Ja. 
$Dere kan takke Risobium.
¶$– Hva er det?
¶$– Det er noen små vesener
¶$som heter bakterier.
¶$Risobium-bakterier
¶$som bor i kuler på røttene.
¶$De henter nitrogen fra lufta,
¶$og det får planta.
¶$Da kan planta lage proteiner.
¶$Frøene blir fulle av proteiner.

#¶$Samir tok ei ert og så på den:
¶$– Hei, lille frø! 
$Bli ei stor plante
¶$med mange kjøttkaker!
¶$Jenny lo. 
$– Erter, mener du.
¶$– Ja, sa Samir. 
$– Men du veit
¶$hva Risobium finner på!

#¶$Hva Katt holdt på med,
¶$må du bare gjette.
¶$Kanskje du får svar en annen gang?`
,
`#¶$La spiren bli grønn!

#¶$Jenny er ei jente.
¶$Samir er en gutt.
¶$De er venner.
¶$De har en hage.
¶$En dag kom et romskip.
¶$Det så ut som ei kule av glass.
¶$Katt og Hen kom ut.
¶$De kommer fra en planet
¶$som heter Mo-lo.
¶$De forstår alle språk.

#¶$Hen sa: 
$– Vil dere bli med ned i jorda?
¶$– Nei takk, sa Jenny,
¶$jeg må hjem og spise, dessverre!
¶$– Nei takk, sa Samir,
¶$jeg må også hjem og spise, dessverre!

#¶$– Men jeg kan gjøre oss veldig små, sa Hen.
¶$Vi kan reise i romskipet.
¶$Jenny og Samir ville prøve.

#¶$Katt styrte kula ned i gangen
¶$som en meitemark hadde laget i jorda.
¶$De så tre store, hvite baller.
¶$– Ta på disse brillene, sa Hen.
¶$Da ser du hva tiden viser deg.
¶$Brillene heter Tiden er din venn.

#¶$– Det kommer noe ut, ropte Samir.
¶$– En hvit, stor, mark!
¶$– Nei, en slange, sa Jenny.
¶$– Kjør hjem!
¶$– Det er ei rot, sa Hen.
¶$– Rota kommer ut av frøet. 
$Frøet spirer.

#¶$Rota skal sette fast babyplanta.
¶$– Baby? 
$Jeg ser ingen baby, sa Samir.
¶$– Inni erta er det en veldig liten erteplante.
¶$Den kalles en spire. 
$Når spiren vokser,
¶$kommer rota ut først.

#¶$– Det kommer en til, sa Samir og pekte.
¶$– Den vokser oppover.
¶$– Det er en stengel. 
$Ikke rot.
¶$Og øverst er det blader, sa Hen.
¶$– Når den kommer opp i sola, er planta født.
¶$Da blir den grønn.
¶$Da kan den begynne å skaffe seg mat sjøl.

#¶$– Kan mennesker leve på jorda uten frø? 
$spurte Jenny.
¶$– Hva tror du, sa Hen.
¶$Jenny og Samir måtte tenke.
¶$– Det finnes noen som tar vare på frø, sa Hen.
¶$– Det er noe som heter frøbanker.
¶$På Svalbard i Norge er det en sånn.
¶$Mange land sender noen av frøene sine dit.

#¶$– Men hva hvis noen ødelegger frøene i et land?
¶$– Da kan de få noen tilbake av frøbanken, sa Hen.
¶$– Da kan det vokse opp nye planter,
¶$og de lager nye frø.

#¶$– Jeg har ikke tenkt på at frø er så viktig, sa Jenny.
¶$– Frø er så viktig, sa Hen. 
$– Frø er viktigst.
¶$På vår planet ødelegger vi ikke frø.
¶$Frø er vennene våre. 
$Vi lar dem spire.
¶$Vi lar spiren bli grønn.
¶$Men på jorda er det noen som kan ødelegge frø.

#¶$– Hva? 
$Hvorfor? 
$sa Jenny.
¶$– Fordi de selger frø.
¶$De har tenkt at bøndene skal kjøpe
¶$nye frø av dem
¶$– Det er jo veldig stygt, sa Jenny.
¶$Nå var hun sint.

#¶$– Folk har protestert, sa Hen.
¶$– De som har funnet på dette
¶$har sagt at de ikke skal selge frøene som dør.
¶$Men de har ikke kasta oppskriften.

#¶$Katt snudde romskipet,
¶$og de kjørte sakte mot lyset.
¶$Jenny snudde seg og så på frøet
¶$med den lille rota
¶$og den nye stengelen.
¶$– Ha det, lille babyplante, sa hun inni seg.
¶$– Jeg ser deg igjen over bakken,
¶$du som kan spire!!`
,
`#¶$Hvor kommer eplene fra?

#¶$Jenny er ei jente.
¶$Samir er en gutt.
¶$De er venner.
¶$Et romskip landa i treet.
¶$Det så ut som ei kule av glass.
¶$Hen og Katt kom ut.
¶$De kom fra en annen planet.
¶$Sola deres heter Proxima Centauri.

#¶$I dag står Samir og ser på epletreet.
¶$Det har blomster.
¶$– Hvordan blir det epler? 
$sa han.
¶$– Hvem kan fortelle det? 
$sa Jenny.
¶$– Jeg kan, hørte de bak seg. 
$Det var Hen.
¶$– Sett dere inn i kula, så drar vi på tur!

#¶$Katt trykket på en knapp i beltet sitt.
¶$Alle fire ble veldig små.
¶$De kjørte opp i lufta.
¶$Foran dem fløy et dyr.
¶$Det hadde gult blomsterstøv på pelsen.
¶$– Humle! 
$sa Samir. 
$– Pollen på pelsen.

#¶$Hen pekte: 
$– Vi følger etter!
¶$De kjørte til epletreet.
¶$Humla landa midt i en blomst.
¶$– Se, humla mister blomsterstøv på arret, pekte Hen.
¶$– Ta på disse brillene.
¶$De er laget av fjellet gzi-gzy.
¶$Da kan dere se gjennom ting.

#¶$– Se! 
$Det vokser et tynt rør
¶$ut av blomsterstøvet, sa Samir.
¶$– Det er et rør eller en slange.
¶$– Ja, sa Hen. 
$– Den vokser bort til et rom
¶$som heter ovariet og inn til egg-cella.
¶$Inni røret kommer sæd-cellene etter.

#¶$Sæd-cella går fram til egg-cella.
¶$De smelter sammen og blir ei celle.
¶$Og hurra! 
$Det er befruktning!
¶$Nå kan egg-cella bli et frø.
¶$Inni frøet blir det en plantebaby.
¶$Plantebabyen kan bli til et nytt epletre.
¶$Og vi kan spise ovariet med frø.
¶$Det er det som er eplet.

#¶$– Hvorfor tenker jeg på mennesker? 
$sa Jenny
¶$– Fordi mennesker trenger det samme
¶$for å bli flere, sa Hen.
¶$Sædceller er fra hannen
¶$og eggceller er fra hunnen.
¶$De må smelte sammen.

#¶$Da blir det et befrukta egg
¶$som kan bli et nytt menneske
¶$når det er ferdig med å vokse.
¶$– Sauene også, sa Samir.
¶$– Og fugler, sa Jenny.

#¶$– Mennesker og sauer og fugler
¶$kan finne hverandre, sa Hen.
¶$– Men kan blomster gå eller fly?
¶$– Nei, de sitter jo fast i jorda, lo Samir.
¶$– Nettopp! 
$Derfor må de ha hjelp!
¶$– Å ja! 
$– Det er det humlene
¶$og de andre insektene gjør, sa Jenny.
¶$De hjelper blomstene med å pare seg!

#¶$– Da tenker jeg noe, sa Samir.
¶$– Når humla er i blomsten og spiser saft,
¶$så kommer det blomsterstøv på pelsen dens,
¶$og når den kommer til den andre blomsten,
¶$så mister den blomsterstøvet på arret!

#¶$– Ja, sa Hen. 
$– Blomsterstøv heter også pollen.
¶$Og inni der er det sædceller.
¶$Det er gutte-delen av blomsten, kan vi si.
¶$– Og da er arret og griffelen og ovariet
¶$jente-delen av blomsten, sa Jenny.
¶$– Nå skjønner jeg det nesten.

#¶$– Ja, sa Hen. 
$– Og når blomsterstøvet setter seg på arret,
¶$sier vi at blomsten er bestøvet eller pollinert.
¶$Men når sædcella smelter sammen med eggcella,
¶$sier vi at eggcella er befruktet.
¶$Det har skjedd en befruktning.
¶$Det kan bli en frukt! 
$Det er målet.

#¶$– Blomstene er egentlig
¶$plantenes kjønnsorganer, sa Hen.
¶$– Plukker vi kjønnsorganer
¶$og setter dem i en vase, spurte Jenny.
¶$– Ja, fordi de er så fine, sa Hen.
¶$– De roper til insektene:

#¶$Kom hit! 
$Se på meg! 
$Her er det mat!
¶$Hen så på dem. 
$– Hva skjer
¶$hvis det ikke er mat for humlene om våren?
¶$Hvem skal da bestøve epleblomstene?
¶$Hva hvis det ikke er mat for humlene
¶$etter at epleblomstene blir epler?
¶$Hvem skal da leve til neste år?

#¶$Jenny så på Samir. 
$– Hva tror du?
¶$Er det nok blomster for humler der vi bor?
¶$Vi må nok sjekke det, sa Samir.
¶$– Insektenes og eplenes beste venn,
¶$det er blitt meg, det.`
,
`#¶$Humler ruger på egg

#¶$Jenny er ei jente.
¶$Samir er en gutt.
¶$De er venner.
¶$Et romskip landa i treet.
¶$Det så ut som ei kule av glass.
¶$Hen og Katt kom ut.
¶$De kom fra en annen planet.
¶$Sola deres heter Proxima Centauri.

#¶$Nå er de ute.
¶$Ei humle flyr forbi langs bakken.
¶$– Det er ei dronning, sa Hen.
¶$– Hun leiter etter et sted å bo.

#¶$– Nå kryper hun ned i et hull, sa Jenny.
¶$– Kanskje det har bodd mus der, sa Hen.
¶$Humla kom opp igjen og fløy videre.
¶$– Kom, vi følger etter, sa Hen.
¶$De gikk inn i glasskula.
¶$– Bli små! 
$sa Hen.
¶$De ble mindre enn humla.
¶$Katt trykte på noen knapper i beltet sitt.
¶$De fløy. 
$Uten en lyd.

#¶$– Jeg ser hvor humla flyr, sa Samir.
¶$– Det er til seljetrær.
¶$– Der er det pollen og blomstersaft, sa Jenny.
¶$– Ja, humla må ha mye mat nå, sa Hen.
¶$– Den har ligget i dvale i sju måneder.
¶$Hele vinteren.
¶$– Hva er å ligge i dvale, spurte Samir.
¶$– Det likner på å sove, sa Hen.

#¶$Humla spiste og spiste,
¶$hun fikk gult blomsterstøv i pelsen sin.
¶$Hun skrapte det ned i kurvene på beina.
¶$– Så flaks at det var seljeblomster nå,
¶$akkurat da hun våkna, sa Jenny.
¶$– Ikke flaks, sa Hen. 
$– Humla og
¶$seljetreet våkner samtidig.
¶$De trenger hverandre.
¶$Humla trenger mat
¶$og seljetreet trenger å bli bestøvet.

#¶$Humla fløy videre.
¶$– Ta på disse brillene,
¶$så ser dere alt mye nøyere, sa Hen.
¶$De er fra fjellet Gzi-gzy på planeten vår.

#¶$Humla fløy tilbake til hullet.
¶$Katt kjørte glasskula
¶$forsiktig etter.
¶$De kom inn i et rom. 
$Ei hule.
¶$Humla gikk bort til ei krukke.
¶$– Hun har laget den, sa Hen.
¶$– Se, hun børster blomsterstøv
¶$opp i krukka, sa Hen.
¶$– Det skal larvene spise
¶$når de kommer ut av eggene.

#¶$– Så merkelig, sa Jenny.
¶$– Humle som lager krukke!
¶$Humla satte seg på krukka
¶$og stakk brodden ned i blomsterstøvet.
¶$– Hun legger egg, sa Hen.
¶$– De skal bli arbeidere
¶$ og hente mer mat.
¶$Når de gjør det, bestøver de
¶$blomstene.
¶$De er jenter.

#¶$Humla satt på krukka.
¶$– Hun varmer eggene, sa Hen.
¶$– Fugler sitter på eggene sine
¶$ og varmer dem, sa Jenny. 
$– De ruger.
¶$– Ruger hun på eggene som en fugl, spurte Samir.
¶$ – Ja, sa Hen. 
$– Først er det egg,
¶$så blir det larver. 
$Så blir larvene kokonger,
¶$og så kommer det nye humler ut.
¶$Alt dette tar tre eller fire uker.
¶$Hun kan lage hundre humler
¶$om sommeren.

#¶$Det sto ei krukke til der.
¶$– Humla har laget den også, sa Hen.
¶$Den har hun spytta blomstersaft i.
¶$Da har hun mat.
¶$– Det er det rareste, sa Jenny.
¶$Hun har laget matpakke!

#¶$– Men hva skjer med humlene
¶$når blomstene visner om høsten?
¶$– Da dør de. 
$Nesten alle.
¶$Men før det, så legger dronninga egg
¶$som blir hanner.
¶$Så legger hun egg som skal bli dronninger.

#¶$Hannene og de nye dronningene flyr ut
¶$og parer seg.
¶$Så dør alle hannene, alle arbeiderne
¶$og den gamle dronninga.

#¶$– Men hvordan kan det bli nye humler neste år?
¶$– De nye dronningene som har para seg,
¶$finner et hull i bakken eller et annet sted
¶$om høsten..
¶$Der ligger de i dvale hele vinteren
¶$og lager et nytt bol til våren.
¶$Et nytt hus.

#¶$– Vi må tenke på
¶$at humlene trenger mat
¶$fra våren og hele sommeren.
¶$Menneskene må ikke ta vekk blomstene.
¶$Da blir det heller ikke epler
¶$og bringebær og blåbær.

#¶$– Jeg har lyst til å kose humla, sa Jenny.
¶$– Jeg vil klappe den, sa Samir.
¶$– Den blir nok redd, sa Hen,
¶$men dere kan gjøre mye annet fint.
¶$Ikke drepe den.
¶$La det vokse blomster.

#¶$– Hvordan gjør vi det, lurte Samir på.
¶$– Dere er smarte, sa Hen.
¶$– Dere finner det ut.
¶$Det er jeg sikker på.`
,
`#¶$I meitemarkens verden

#¶$Jenny, Samir, Hen og Katt er nede i jorda.

#¶$De er små.

#¶$De går i gangene til meitemarken.

#¶$Stille. 
$De hører noen som spiser.

#¶$Noe brunt rører på seg.

#¶$– Er det meitemarken, hvisker Jenny

#¶$– Hei, hva gjør den! 
$sier Samir.

#¶$– Den bæsja i hodet på meg!

#¶$– Flott! 
$sier Hen. 
$– Nå blir det fin jord!

#¶$– Jeg vil ikke bli jord! 
$sier Samir,

#¶$og børster krøllene sine.

#¶$De går stille videre.

#¶$De hører en lyd.

#¶$– Slafs! 
$Slafs!

#¶$Jenny stopper og sier STOPP!

#¶$NOEN SPISER!

#¶$De ser et dyr. 
$Oransje farge.

#¶$Langt. 
$Mange bein.

#¶$To store klør!

#¶$Klørne holder fast en meitemark.

#¶$Dyret spiser marken.

#¶$– Slafs! 
$Slafs! 
$Spiser den.

#¶$– Skolopender! 
$sier Hen.

#¶$– Skolopender elsker meitemark!

#¶$Jenny tenker: 
$– Vi er små!

#¶$De løper.

#¶$Skolopenderen kommer etter dem.

#¶$Jenny løper og løper og roper:

#¶$– Jeg er ikke maten din!

#¶$– Jeg er ikke maten din!

#¶$Samir løper og roper:

#¶$– Jeg er ikke meitemark!

#¶$– Jeg er ikke meitemark!

#¶$Katt og Hen løper.

#¶$Skolopenderen etter.

#¶$Med klørne rett bak dem.

#¶$Jenny ser lyset. 
$Det er åpningen.

#¶$De smetter ut. 
$Alle fem.

#¶$Oppe i gresset roper Hen:

#¶$– Bli stor!

#¶$Jenny ble stor.

#¶$Samir ble stor.

#¶$Hen og Katt ble store.

#¶$Jenny ser på skolopenderen.

#¶$Den er liten.

#¶$Liten som en lillefinger.

#¶$Jenny ler: 
$– Hvorfor var jeg redd?`
,
`#¶$Meitemarken har fem hjerter

#¶$Jenny, Samir, Hen og Katt er ute.
¶$Det er kvelden.
¶$Det er mørkt.
¶$– Bli små! 
$sier Hen.
¶$Alle ble små.

#¶$De gjemte seg bak bæsjen
¶$til den store meitemarken.
¶$De så et hull.
¶$En mark kom opp.
¶$Den følte på bakken.

#¶$– Der er Lumbricus, sa Hen.
¶$– Lumbricus terrestris!
¶$Den tok med seg et løv-blad
¶$ned i gangen sin.
¶$Jenny, Samir, Katt og Hen fulgte etter. 
$Det var langt ned. 
$Og mørkt.

#¶$Hen ga dem noen rare briller.
¶$Samir så på dem.
¶$Briller med to store stjerner?
¶$Som lyste blått?
¶$Han tok dem på.
¶$Det blå lyset traff marken.

#¶$Han kunne se hvordan marken var inni!
¶$– Jeg kan se inni marken! 
$sa han.
¶$– Jeg ser rare pølser og kuler og tau!
¶$Han lyste på en pølse.

#¶$– Det er en mage, sa Hen.
¶$– Den heter en kro. 
$Der blir maten bløt.
¶$Samir lyste på en annen pølse.
¶$– Det er en annen mage, sa Hen.
¶$Den tygger maten.

#¶$Den heter en krås.
¶$Marken har jo ikke tenner!
¶$Akkurat som fugler.

#¶$Jenny lyste med blått lys.
¶$– Fantastisk! 
$hvisket hun.
¶$Hva er de røde ringene der?
¶$– Det er hjerter, sa Hen.
¶$– Den har fem hjerter!

#¶$– Men har den nese?
¶$– Nei, men den tar oksygen fra vann.
¶$Den har små åpninger i huden.
¶$Marken vil ha det litt fuktig.
¶$Hvis den er i sola og tørker,
¶$så dør den.

#¶$Marken hadde et rosa belte rundt magen. 
$Jenny ville se på det.
¶$Da datt hun.
¶$Hun falt oppå marken.

#¶$Marken forsvant ut. 
$Fort!
¶$Hen, Jenny, Samir og Katt klatret etter.
¶$Det var langt og bratt.

#¶$De kom opp.
¶$Da så de opp på et piggsvin.
¶$– Bli stor! 
$sa Hen.
¶$Piggsvinet tygde og spiste noe.
¶$Noe med hjerter, kro og krås.

#¶$– Alle må ha mat, sa Jenny.
¶$– Det er fint at ikke alle liker det samme, sa Samir.
¶$Jenny hadde mista brillene sine
¶$nede i gangen til meitemarken.

#¶$– Kanskje noen finner dem
¶$når de graver i jorda, sa Samir.
¶$– Eller kanskje Lumbricus terrestris
¶$kommer om natta
¶$og lyser på tarmene dine, lo Jenny.`
,
`#¶$Frø-hopping om høsten når noen forbereder seg

#¶$Jenny, Samir, Hen og Katt satt inne i glasskula.
¶$De hadde parkert høyt oppe i et stort bjørke-tre.
¶$De var veldig små.
¶$Det blåste.
¶$– Høsten er begynt, sa Jenny. 
$– Se, gule blader!
¶$– Skal vi fly, spurte Hen. 
$– Været er perfekt.
¶$Vi går ut på greina her.
¶$Ta hverandre i hendene, så hopper vi!

#¶$De landa på ei høy plante.
¶$Den hadde rosa blomster.
¶$Den hadde belger med frø.
¶$Det kom ut mange små, svarte frø.
¶$På hvert frø var det ull.
¶$Eller silke. 
$Eller hår.
¶$Det var noen bløte, hvite dusker.
¶$Vinden blåste vekk håret med frø.

#¶$– Hopp opp på et frø! 
$sa Hen.
¶$Hold dere fast i de hvite hårene!
¶$Jenny gjorde det.
¶$Hun ble blåst opp i lufta.
¶$Samir også. 
$Og Hen.
¶$– Vi flyr! 
$ropte Samir.
¶$– Jeg er en fugl, ropte Jenny.

#¶$Vinden tok tak i silkehårene
¶$og blåste dem nedover, oppover, enda høyere.
¶$Katt satt ikke på frøet sitt.
¶$Katt holdt seg fast med hendene og hang.
¶$Katt svingte hit og dit og smilte.
¶$– Katt er akrobat på sirkus, ropte Samir.

#¶$– Vinden blåste Jenny mot et tre med røde bær.
¶$Da så hun et stort hode med nebb.
¶$En fugl. 
$Det var en trost.
¶$ – Vi er veldig små nå, ropte Samir.
¶$– Jeg vil ikke bli spist av den store trosten, ropte Jenny.
¶$– Sving vekk, ropte Hen. 
$– Dra hårene til høyre!
¶$Jenny klarte det. 
$Samir også.
¶$Det gikk! 
$De kom til å fly forbi!

#¶$Da kom det et sus. 
$Det var vinden.
¶$De ble blåst rett mot treet.
¶$Der satt de fast.
¶$Trosten så på dem.
¶$Da kom noe oransje fykende.
¶$Det fløy som en liten rakett rundt hodet til fuglen.
¶$Trosten ble redd og fløy vekk.

#¶$Jenny, Samir og Hen gikk av frøet
¶$og ut på ei tjukk grein.
¶$Så kom den oransje raketten susende.
¶$Du skjønner vel hva det var.
¶$Ja, det var selvfølgelig Katt.

#¶$–  En fin dag, sa Samir.
¶$– Jeg ble ikke spist. 
$Er troster slemme?
¶$– Ikke slemme, sa Hen.
¶$– Den er bare sulten. 
$Og så forbereder den seg.
¶$– Forbereder seg?
¶$– Ja, jeg så at det var en troste-ungdom.
¶$Den skal snart fly veldig langt, kanskje til Spania.
¶$Den må spise mye for å vokse og bli sterk.
¶$Det er ikke noe mat for den her i Norge om vinteren.
¶$Ikke bær, ikke meitemark.
¶$Så den forbereder seg til vinteren – ved å fly vekk.

#¶$– Hva betyr egentlig å forberede seg?
¶$– Det er å gjøre noe smart så ikke noe dårlig skjer.
¶$– Noe smart så ikke noe dårlig skjer?
¶$– Ja, sånn som at dere tar på dere sko når det er kaldt ute.
¶$Det er smart.
¶$Dere forbereder dere på å gå ut i kulda.
¶$Dere vil ikke fryse på føttene, 
$ikke sant, enda det er kaldt?

#¶$– OK, sa Samir. 
$– Blomstene forbereder seg til vinteren.
¶$De gjør noe smart så ikke noe dårlig skjer.
¶$De veit at de skal visne og dø,
¶$men de har laget frø som lever videre
¶$til vinteren er slutt?
¶$– Smart! 
$sa Jenny.
¶$– Alt i naturen i Norge forbereder seg til vinteren, sa Hen.
¶$– Insekter, dyr, fugler, blomster, trær …

#¶$Skal vi hoppe på et nytt frø, spurte Jenny.
¶$Katt sto klar alt.
¶$– Vent, sa Samir. 
$– Det er noe jeg lurer på.
¶$Er et frø begynnelsen eller slutten?

#¶$Det kommer i hvert fall forbi her,
¶$fordi noen forbereder seg, sa Jenny.
¶$– Er dere klare til å fly? 
$sa Hen.
¶$– En, to, tre, hopp!`
,
`#¶$Jenny og Samir høster og lager hagefest

#¶$Jenny og Samir har en liten hage.
¶$De hadde sådd frø da det var vår.
¶$Nå er det høst.
¶$De plukker sukkererter og bønner.
¶$Nå graver de opp gulrøtter.

#¶$– Vi har så mye, sa Jenny.
¶$– Vi kan lage hagefest!
¶$– Ja, vi kan lage høst-suppe!
¶$De ville be de tre nye naboene
¶$og gamle Hansen.

#¶$Hen sa: 
$– Det vokser jo mer som kan spises her.
¶$– Blader fra brennesle og bjørk, for eksempel,
¶$og blomster og blader fra geitrams og blåbær og rognebær.
¶$Og noen blader fra løvetann?
¶$– Og vi kan be gjestene ta med noe også, sa Jenny.

#¶$De tre nye naboene kom først.
¶$Ei mor, en far og ei jente.
¶$De hadde med en pose med ris og tre løk til suppa.

#¶$De forsto ikke mye norsk ennå.
¶$Men Hen kunne jo alle språk.
¶$Hen og de nye vennene prata og lo.
¶$Jenny og Samir rørte i suppa.

#¶$– Hallo og god dag, hørte de en stemme.
¶$Det var gamle Hansen.
¶$Han hadde vært sjømann hele livet.
¶$Han hadde med seg en hermetikkboks.
¶$– Her er noe godt dere kan ha oppi suppa.
¶$ Jeg ser dere har en katt her.
¶$– Tusen takk, sa Jenny og Samir.
¶$– Deilig kjøtt, sa gamle Hansen.
¶$– Noe som alle kan like.
¶$Så gikk han til de andre.

#¶$– Kattemat? 
$sa Samir.
¶$– Vi kan ikke ha den i suppa, sa Jenny.
¶$– Vi veit ikke hva den er laget av.
¶$Vi kan spørre om Katt vil ha.
¶$De åpna boksen og satte den foran Katt.
¶$Katt så ikke på den. 
$Katt gravde et hull i bakken.

#¶$De hørte stemmen til Hansen lang vei.
¶$– En gang vi var midt ute i Stillehavet,
¶$kom det en fryktelig storm.
¶$Bølgene var høye som skyskraperne i Jemen.
¶$Vi som var sjømenn og sjødamer tok alle bøttene
¶$og tømte vannet ut av båten.
¶$Vi holdt på i to måneder.
¶$– Men maten, spurte Jenny.
¶$– Vi spiste kålrot.
¶$Men så ble det ikke mer igjen.
¶$– Hva gjorde dere da? 
$spurte Samir.

#¶$– Da spiste vi mus. 
$Alle båter har mus.
¶$Det er kjøtt. 
$Proteiner. 
$Da vi kom til land,
¶$drakk vi vannet i kokosnøtter en hel dag.
¶$Vi gravde opp sikkert to hundre kokosnøtter.

#¶$Moren begynte å le. 
$Hun sa noe.
¶$– Hun sier at du er veldig morsom, Hansen, sa Hen.
¶$Gamle Hansen smilte stolt.
¶$– Kokosnøtter vokser på høye palmer, hvisket Jenny,
¶$de vokser ikke nede i bakken.
¶$– Suppa er ferdig! 
$Kom og hent! 
$ropte Samir.
¶$Alle tok en tallerken og ei skje
¶$og helte opp suppe med den store øsa.
¶$– Det lukter godt, sa moren.
¶$– Veldig godt, sa faren.
¶$– Hva er det vi spiser, spurte jenta.
¶$– Naturens egen suppe, sa Jenny.

#¶$De gikk bort til stolene. 
$Det var plass på gresset også.
¶$Suppa var så pen med de gule gulrøttene,
¶$den hvite risen,
¶$de hvite potetene og de hvite bønnene,
¶$de grønne bladene fra brennesle og løvetann,
¶$de rosa blomstene fra geitramsen,
¶$den gule løken,
¶$de blå blåbærene,
¶$de røde rognebæra,
¶$og på toppen lå de grønne, knasende sukkerertene
¶$og de oransje ringblomstene.
¶$Alle spiste mye suppe.

#¶$Da kom Katt bort til dem.
¶$Katt la en haug med noe på bakken foran dem.
¶$Katt hadde noe i handa.
¶$Knuste skallet. 
$Der var det to nøtter.
¶$– Peanuts! 
$ropte jenta.
¶$– Peanøtter, sa Jenny overraska.
¶$– Har du sådd?
¶$Katt smilte og ga dem flere peanøtter.
¶$Et ekorn løp forbi og klatra fort opp i epletreet.
¶$– Vi spiste ekorn også, sa gamle Hansen.
¶$– Med hår og alt.
¶$Halen kunne være litt tørr. 
$Men god.
¶$Vil dere ha?
¶$Hva tror du de andre svarte på det?`
,
`#¶$Da Jenny og Samir ville bli med gjessene til Afrika

#¶$Jenny, Samir, Hen og Katt er ute i hagen.
¶$Det er is på dammen.
¶$Det er høst. 
$Vinteren nærmer seg.

#¶$Jenny er ikke glad.
¶$– Jeg synes det er trist om høsten.
¶$Alt dør! 
$Alt er slutt!
¶$– Er det sant? 
$sa Hen.
¶$– Det må vi undersøke!
¶$Da er det best vi blir små.
¶$Alle tre ble små, men ikke Katt.
¶$Katt studerte is og fisk.

#¶$Jenny stoppet – Se! 
$Humle!
¶$Den er død! 
$Hva var det jeg sa!
¶$– Hva har humla gjort i sommer, spurte Hen.
¶$– Flydd til mange tusen blomster
¶$og tatt med blomsterstøv, vel.
¶$– Ja, og gitt mat til små humler, sa Samir.
¶$ – Og passa på dronninga
¶$som har laget nye dronninger.

#¶$– Og hvor er dronningene nå?
¶$– De har gjemt seg og ligger og sover!
¶$– Og hva har de i magen?
¶$– Eggceller og spermceller!
¶$– Og hva kan de gjøre når de våkner om våren?
¶$– De kan legge egg og lage nye humler!

#¶$– Så hva har alt arbeidet
¶$til denne døde humla ført til?
¶$– At humler lever videre,
¶$enda det blir vinter
¶$og ikke noe mat, ropte Samir.
¶$– Ok, humler,
¶$men alt det andre dør, sa Jenny.

#¶$– Samir var ikke enig.
¶$– Nei, jeg tror at høsten og vinteren
¶$gjemmer våren.
¶$Hen gikk bort til Katt.
¶$Samir så noe på himmelen. 
$– Se fuglene!
¶$De lager en bokstav! 
$En V!

#¶$Fuglene fløy ned mot bakken bak huset.
¶$Det var en flokk med gjess. 
$De spiste gress.
¶$– De skal sikkert til varmere land for å finne mat
¶$når det er vinter her, hvisket Jenny.
¶$–  Kanskje de kan ta med noen trær!
¶$Vi kan gi dem et frø,
¶$kanskje det blir et tre i Afrika,
¶$– Vi gir dem en bukett med blomster!
¶$Jeg mener frø fra blomster, sa Samir.

#¶$De bar frø bort til fuglene, og ingen så dem.
¶$Jenny klarte å putte et frø mellom fjærene
¶$på vingen til ei gås. 
$Hun tok ett til og ett til.
¶$Flere gjess spiste frøene deres.
¶$– De kommer til å bæsje bjørk og selje
¶$og epletrær og geitrams og løvetann og hvitveis
¶$hele veien til Nord-Afrika og Iran, sa Samir.

#¶$Jenny ble plutselig i godt humør. 
$– Vi blir med!
¶$– Tuller du?
¶$– Nei, tenkt så gøy,
¶$vi kan bare gjemme oss i fjærene til gåsa!
¶$Kom, vi klatrer oppover beina!
¶$Da hørte de Hen: 
$– Jenny! 
$Samir! 
$– Bli store!
¶$De ble store. 
$Fuglene skreik høyt, lettet og fløy vekk.
¶$Hen var også blitt stor igjen.

#¶$– Jeg skjønner at det er fristende å bli med gjessene.
¶$Men det hadde vært farlig for dere.
¶$Det kan hende noen fugler ikke klarer å fly så langt, og
¶$da faller de ned i havet.
¶$– Ok, sa Jenny. 
$– Ok, sa Samir.
¶$Hen snudde og gikk tilbake til Katt.

#¶$– Kanskje Hen redda livet vårt, sa Jenny.
¶$– Vi må takke med blomster.
¶$– Det er ingen blomster, sa Samir. 
$– De er visne.
¶$– Men ikke døde for bestandig, sa Jenny.

#¶$Noen minutter etter kom de til bort til Hen.
¶$– Takk for at du stoppa oss, sa Jenny.
¶$– Vær så god, her er det blomster til deg! 
$sa Samir.
¶$I handa hadde han mange frø. 
$Jenny hadde også.
¶$– Tusen takk, sa Hen. 
$– Frø er det aller fineste.

#¶$Da dalte ei fjær ned fra lufta.
¶$Den landet ved siden den døde humla.
¶$Fjæra var hvit og grå og blank og pen.
¶$Jenny plukket den opp.
¶$Den var litt bøyd som en båt.

#¶$– Hen, sa Jenny. 
$– Kan du gjøre oss små igjen?
¶$Det gjorde Hen. 
$Fjæra lå på bakken.
¶$Jenny og Samir klatret oppi og la seg.
¶$– Koselig å ligge, mumlet Samir. 
$– Han sovna.
¶$– Det er ikke sånn at alt dør, sa Jenny lavt.
¶$– Alt lever. 
$På en eller annen måte.`
,
`#¶$Avskjedsgaven

#¶$Det er snart vinter.
¶$Samir og Jenny står ute og ser.
¶$De ser på himmelen.
¶$Det er tusenvis av stjerner.
¶$Hen og Katt er der også.

#¶$– Jeg må si dere noe, sa Hen.
¶$– Katt og jeg må reise hjem.
¶$– Nei, ikke reis!
¶$– Vi må se inni flere dyr, Sa Jenny
¶$– Hen smilte og sa: 
$– Vi må hjem.
¶$Men kanskje vi skal ta en siste tur med romskipet?

#¶$Katt trykte på knappene i beltet sitt,
¶$og de steg til værs.
¶$Over dem var stjernene.
¶$Under var det lys fra alle husene.
¶$– Så mange mennesker! 
$sa Samir.
¶$– Ja, sa Hen. 
$– Og de fleste vil gjøre gode
¶$og kloke ting hvis de får lov.
¶$Det er derfor vi kom hit.

#¶$– Hva mener du? 
$Er det så mange
¶$slemme hos dere, spurte Jenny.
¶$– Nei, nei. 
$Vi tenker på planeten vår.
¶$Sola vår er rød.
¶$Det som lever på planeten vår,
¶$er ikke likt det som lever på jorda.
¶$På vår planet passer alle på det som lever.

#¶$Men hvor lenge går det?
¶$Vi reiser til andre planeter, fordi vi lurer på
¶$hvordan det er der.
¶$Er det liv?
¶$Vi ser også i de store teleskopene våre.
¶$Slik så vi dere.
¶$– Har dere visst noe om oss, spurte Samir.

#¶$– Ja, vi har fulgt med på planeten jorda.
¶$Vi har sett at dere har alt.
¶$Vann, jord, stein, dyr, insekter,
¶$Mennesker og fugler – alt.
¶$Og den er veldig vakker.
¶$Vi har lurt på:
¶$Forstår menneskene hvor fin den er?
¶$Vi så at dere to, Jenny og Samir, forstår.
¶$Dere blir glade og begeistret
¶$og vil vite mer.
¶$Derfor kom vi hit.

#¶$– Forstår? 
$spurte Samir og Jenny
¶$på likt.  
$– Forstår hva da?
¶$– Jo, som forstår hvordan alt er nødvendig
¶$og alt har en oppgave. 
$Og som blir glad
¶$og begeistret for å vite mer om det.
¶$– Jeg hadde aldri trodd at meitemark
¶$har lagd jorda på jorda, sa Jenny.
¶$– Nettopp. 
$Det er det jeg mener, sa Hen.
¶$– Og at frø må få lov til å spire, sa Samir.
¶$– Alt henger sammen med alt, sa Hen.
¶$– Nå skal vi hjem og fortelle at på jorda er det mennesker som forstår det som er viktig å forstå.

#¶$– Det er ikke bare oss, sa Jenny.
¶$– Klassen vår, sa Samir.
¶$– Og mange andre, sa Jenny.
¶$Plutselig hørte de en ukjent stemme.
¶$Det var Katt!
¶$De hadde aldri hørt Katt snakke.
¶$– Vi takker dere, sa Katt.
¶$– Dere skal få en gave.
¶$Katt holdt et skrin i hendene.
¶$Det så ut som sølv og gull og perler og diamanter.

#¶$Katt styrte romskipet ned mot bakken.
¶$De tok farvel enda en gang.
¶$Det var trist.
¶$Romskipet lettet.
¶$Hen og Katt vinket og forsvant.

#¶$Der sto Jenny og Samir, aleine i mørket.
¶$– Vi må åpne skrinet!
¶$De løftet lokket forsiktig opp.
¶$De kunne ikke se hva det var.
¶$Det gnistret og lynte og lyste.
¶$Øynene ble blendet av lys.

#¶$Så kunne de se.
¶$Hva var det?
¶$Ei kule?
¶$Et sukkertøy?
¶$Et smykke?
¶$De tok det ut. 
$Forsiktig.
¶$Kjente på det og snudde på det.
¶$Luktet.
¶$Jenny så på Samir.
¶$Samir så på Jenny.
¶$Det datt ut av dem, – samtidig:
¶$– FRØ?`);

text_to_sync.l.push(`#¶$Den røde planeten

#¶$Denne fortellinga begynner egentlig et helt annet sted. 
$Den begynner i et solsystem som er vår nærmeste nabo. 
$Den begynner ved sola Proxima Centauri.  
$Proxima Centauri er ei sol i stjernebildet Skytten.
¶$Proxima Centauri er ei rød sol. 
$Den er tusen ganger svakere enn sola vår. 
$Den er ei dvergstjerne. 
$Dvergstjerner er gamle. 
$De har brent lenge. 
$Veldig lenge. 
$Derfor brenner de med mindre og mindre energi. 
$Lyset fra dem er rødt. 
$Planetene de skinner på er røde. 
$Røde planeter.

#¶$Astronomene forsøker å gjette: 
$Kan det være liv på andre planeter enn jorda? 
$Hvis det er liv, – hva slags? 
$Filmer, tegninger, fortellinger, tegneserier og malerier 
$viser hvor interessert menneskene er i å gjette. 
$Å tenke seg.

#¶$Så skjer det altså, at astronomene, i oktober 2016, 
$finner en planet som antakelig har en temperatur 
$på mellom 0 og 100 grader. 
$Hvorfor er denne temperaturen så viktig? 
$Mellom null og hundre? 
$Det er egentlig logisk, 
$for hvis temperaturen alltid er under null grader, 
$altså kuldegrader, 
$så fryser det vannet som måtte være der til is, 
$alt er is. 
$Ikke noe liv. 
$Og hvis temperaturen er over hundre grader, 
$så fordamper alt vann. 
$Det blir vekk. 
$Ikke noe liv da heller. 
$Derfor, når de finner en planet med en temperatur 
$som antakelig ligger mellom null og hundre grader, 
$så regner de med at det antakelig er vann der. 
$Og hvis det er vann, er det høyst sannsynlig liv.
¶$Men hva slags liv? 
$Er det jord? 
$Vokser det noe? 
$Er det dyr? 
$Er det noen som likner på mennesker? 
$Kan de mindre enn oss, eller kan de mer? 
$Kan vi finne dem? 
$Kan de finne oss?

#¶$Så skjer det noe. 
$Det lander et romskip i treet til Jenny og Samir. 
$Jenny og Samir er to hyggelige mennesker som bor et sted i Norge. 
$Et romskip lander med et kræsj. 
$Tenk dere sjokket! 
$Det ser virkelig ikke ut som noe romskip. 
$Det ser ut som ei kule av glass. 
$Ut av glasskula kommer en som heter Hen og en som heter Katt. 
$Hen snakker alle språk. 
$Hen sier at de kommer fra en planet som heter Mo-lo, 
$som går rundt sola Proxima Centauri. 
$Hen forteller at det som ser ut som ei glasskule, 
$som de har reist i, er laget av et fjell som ikke er av stein, 
$ikke av glass og ikke av jern. 
$Det har navnet gzi-gzy.

#¶$Det kan altså tåle ekstreme påkjenninger. 
$De kaldeste kalde. 
$De varmeste varme. 
$De høyeste høye. 
$De laveste lave. 
$Og den høyeste farten. 
$Det er likevel urealistisk å reise fra Mo-lo til jorda. 
$Avstanden er 4,2 lysår. 
$Det betyr, at hvis vi reiste like fort som lyset går, 
$så ville reisa ta 4,2 år. 
$Noen sier at det bare kunne skjedd i en Star Trek-film. 
$Hen og Katt påstår likevel at de har reist med lysets hastighet. 
$At det er mulig for dem. 
$Mo-lo, navnet på planeten deres, betyr forresten mu-lig på norsk.

#¶$Jenny og Samir i den historien som begynner her, 
$sier til hverandre mange ganger: 
$– Men hvorfor kom de hit? 
$Hva er svaret på det? 
$Kanskje dere får vite det?
¶$Men ett er sikkert. 
$Dere kan altså finne Proxima Centauri på Internett, 
$og dere kan lese om den planeten som astronomene nettopp fant. 
$De mener de kan sende en robot dit for å undersøke den. 
$Om noen år.
¶$Imens kan dere gå til neste kapittel som heter: 
$Det kommer et romskip.`
,
`#¶$Det kommer et romskip

#¶$Nå skal du få høre en fortellingom Jenny og Samir.
$De går i samme klasse og er venner.
$Akkurat nå er de ute i en liten hage.
$De skal så frø. De vil ha sukkererter.
$De spiser sukkererter nå.
$De har kjøpt dem i butikken.
$Men hvis de sår sjøl, blir det veldig mange og nesten gratis.

#¶$– Nam! 
$Det beste jeg vet! smiler Jenny.
$Når hun tygger, kommer det en knasende lyd. 
$Hun får vann i munnen. Saft. 
$Som smaker deilig.
¶$– Samir er helt enig.
$– Vi graver først, og så sår vi.
$Jeg tenker vi får tre tusen sukkererter.
¶$Jenny skulle ta en til.
$En grønn, sprø belg.
$Det gjorde hun ikke.
$I stedet skjedde dette:

#¶$Kræsj! 
$Brak! 
$Brekk! 
$Knus!
$Noe veldig stort og blanktlandet i full fart i treet.
$Noe fløy ut.
$Var det mennesker som falt ut?
$Falt de ut av ei kule? Var kula av glass?
$Falt den ned fra et fly?
$Var det farlig?
$Hva skjedde?

#¶$Jenny klarte ikke å snakke.
$Samir klarte ikke å snakke.
$De stirret.
$De lyttet.
¶$En person hang i ei grein.
$En lang katt hang et annet sted.
¶$– En rar person, hvisket Jenny.
$– Den har lange ører!
¶$– Er rar katt, hvisket Samir.
$– Den har sko!
¶$– Har mennesker lange ører som en rev, hvisket Jenny.

#¶$Personen hoppet ned.
$Katta hoppet ned.
$De kom sakte mot Jenny og Samir.
$Personen la handa over hjertet sitt og sa:
$– Vær ikke redde.
$Vi kommer i fred.
¶$– Den snakker samme språk som oss, hvisket Samir til Jenny.
¶$– Hei! 
$sa Jenny. Stemmen var tynn.
¶$– Hei! 
$sa Samir. Han snakket forsiktig.
¶$Katta sa ingenting.
$Katta skrudde på hjul og skruerpå beltet sitt.
$Og smilte.
$– Skummelt, tenkte Samir.
$– Dette er ikke normalt.
$Dette er noen som har kledd seg ut.
$Er det noen fra skolen?

#¶$Personen snakket igjen.
$– Jeg heter Hen.
$Dette er Katt, sa han og pekte på den store katta.
$– Dere lurer på hvem vi er og hvor vi kommer fra.
$Det skal jeg fortelle.
$Vi har reist langt.
$Vi har reist forbi mange planeter.
$Dere har sikkert hørt om 
$Neptun, 
$Uranus, 
$Saturn, 
$Jupiter 
$og Mars.
$Vi har kjørt forbi allefor å komme hit til jorda.
¶$– Går det an? 
$sa Jenny.

#¶$– For oss går det an, sa Hen.
$– Vår planet ligger utenfor Neptun.
$Vår planet går i banerundt en annen sol enn deres.
$Vår stjerne heter Proxima Centauripå deres språk.
$Vår sol er rød.
$Vår planet heter Mo–lo.
$Folket på jordavil gjerne finne oss.
$Men de har ikke klart det ennå.
$Men vi har oppdaget jorda for lenge siden.
$Vi har veldig gode teleskoper.
$Vi kan se dere og komme til dere.
$– Men, men hvorfor kom dere akkurat hit?
$spurte Jenny.

#¶$– Har dere kjørt feil? spurte Samir.
¶$Personen Hen rista på hodet.
$– Vi ville komme hit.
$Vi ville komme til dere.
$Vi vet at dere er Jenny og Samir.
¶$– Hvorfor?! 
$ropte Jenny og Samir.
$– Vi har ikke gjort noe galt.
$Vi skal bare så frø i bakken.
$Vi vil ha sukkererter.
$Vi bare graver.
$Vi liker blomster.
$Vi er ikke slemme mot dyr heller.
¶$– Vær ikke redde!sa Hen og smilte.
$– Vi kommer til derefordi dere er gode mennesker.
$Vi kan ikke fortelle alt ennå. 
$Dere skal kanskje få vite det siden.

#¶$– Men hvorfor kan dere snakke språket vårt? 
$Spurte Jenny.
¶$– Vi har teleskoper som er så sterke, 
$at vi kan både se og høre menneskene på jorda, sa Hen.
$Derfor har vi lært språket til alle.
$På vår planetkan vi forstå alle språk.
$Vi kan snakke alle språk.
¶$– Alle? 
$sa Samir.
$– Språket til alle på jorda?
¶$– Ja. 
$Alle.

#¶$– Men hvordan kunne dere reise i den tynne glasskula der? 
$lurte Samir påHan tenkte at det bare var tull, 
$det Hen sa.
$Det var opplagt bare ei glasskule.
$Kula hadde sikkert bare kommet ned 
$med en fallskjerm fra et fly.

#¶$– Nei, sa Hen.
$– Vi kom ikke med et fly.
$Dere tror dere ser ei kule.
$Dere tror dere ser glass.
$Det dere ser er laget av et fjell på vår planet.
$Fjellet er ikke av stein.
$Det er ikke av glass.Det er ikke av jern.
$Det er laget av gzi–gzy.
$Gzi–gzy er sterkt.
$Det kan bli stort og lite.
$Det kan bruke energien som er i verdensrommet.
$Det kan høre hva jeg sier og gjøre det jeg vil.
$Det dere kaller kulaer oppkalt etter gzi–gzy.
$Jeg kan oversette det til norsk:
$Det er mu–lig.
$Vi har reist med mu–lig.

#¶$Jenny syntes dette var for rart.
$Hun måtte spørre mer.
$– Har dere trær?
$Blomster?
$Sukkererter?
$Humler?
¶$– Hen smilte.
$– Vi har vann.
$Vi har andre trær og planter og dyr enn dere.
$Men vi vet hva dere har.
¶$Hen pekte på en blomst.
$– Ta på disse brillene, sa Hen.
$– De er laget av fjellet gzi–gzy.

#¶$Jenny så på mange ting.
$På bakken sto det et vakkert, 
$blått badekar.
$I badekaret var det et stort dyr som badet i gult skum.
$– Krokus, sa Hen.
¶$Hun så en stor gul blomst på et tre.
$De rare brillene gjorde blomstenkjempestor.
$Så rart!Hun så hundre små gule stilkermed kuler på.
$– Mange gule hann–blomster, sa Hen.
$– Eller gutter, hvis du skjønner det bedre.
¶$Mellom stilkenevar det mange små grønne krukker, 
$og ut av krukkene kom det dråper.
$Det så ut som vann.
$– Sukkervann, sa Hen.
$– Nektar. 
$Mat.

#¶$Jenny så mer.
$Åj!Der landa det et digert dyrpå blomsten!
$Et dyr med pels!Svart!Svart og gult!
$Blomsten rista og skalv og kasta gult støv over hele dyret.
$Dyret hadde et langt, svart våpen!
$Et spyd!
$Eller hva var det?
$Det store dyretstakk våpenet sitti den grønne krukka med saft.
$– Sugerør, sa Hen bak henne.
$– Lang tunge. 
$Snabel!

#¶$Dyret stakk snabelen sin borttil ei ny, grønn krukke. 
$Der var det en dråpe. 
$Dyret sugde den i seg. 
$Så gjorde den det igjen. 
$Sugde opp dråperfra de små grønne krukkene.
¶$– Det store dyretblir gulere og gulere, sa Samir.
$– Blomsterstøv, sa Hen.
$– Pollen.
$– Dyret klør seg, sa Samir.
$– Dyret skraper av seg det gule støvet.
$Det ser ut som det skyver støvet ned i noen kurver på knærne!
$– Dyret samler blomsterstøv, sa Hen.
$– Mat.
¶$– Dyret er like stort som meg, sa Jenny.
$– Kan vi gå hjem? – Du burde se mer, sa Hen.

#¶$– Nå flyr dyret, sa Jenny.
$Dyret så tungt ut.
$Det fløy videre.
$Ikke langt.
$Til treet ved siden av.
$Der var det grønne blomster.
$Mange små grønne blomstersto tett i tett.
$– Hunn–blomster, sa Hen.
$– Eller jenter, om du skjønner det bedre.
$Hen sto ved siden av henne.
$Hvordan kunne Hen se alt, enda ikke han hadde sånne briller på?

#¶$Dyret landa. 
$Jenny så at det gule støvet fra pelsen til dyret 
$ble klint på de grønne blomstene.
¶$– Blomsterstøv fra hann–blomst til hunn–blomst, sa Hen.
$–Pollinering.
$Blir frø.
¶$Jenny så at det var mange grønne krukker 
$mellom blomstene her også.
$Små krukker med dråper av saft.
$– Veldig mye saft i disse kulene, sa Jenny.

#¶$– Nå flyr den vekk!
$– Det ser ut som det bærer tungt!
¶$– Nektar i magen og pollen i kurver, sa Hen.
$Så klart det er tungt å bære så mye mat.
$Dyret trenger mat.
$Og dyret skal gi mattil dem som skal bli nye dyr.
$Dyret jobber fra morgen til kveld.
¶$Jenny og Samir tok av seg brillene. 
$Jenny ble litt svimmel. 
$Det var rart å se vanlig igjen.
$– Hva var det vi så på, spurte Samir.

#¶$– Hvor er det digre dyret, lurte Jenny på.
¶$– Hadde dere med dere dyret fra planten deres, spurte Samir.
$Dette skulle han fortelle på skolen i morgen!
¶$– Der er det, pekte Hen.
¶$Jenny og Samirså bare ei humle, 
$som surra rundt på blomstene til selje–treet.
¶$– He? 
$Ei vanlig humle?
$Vanlige selje–blomster?
¶$– Det ser helt vanlig ut, sa Hen.
$– Ikke noe å bry seg om, ikke sant?
$Men når du ser, virkelig ser, da ser du merkelige ting.
$Merkelige.

#¶$De ga brillene tilbake.
$– Kan vi få låne dem mer, spurte Samir.
$– Kanskje, sa Hen.
$– Eller kanskje lære å se alt uten dem?
¶$Jenny hadde vært så opptatt
$med det digre dyret, nei humla, 
$at hun hadde glemt at Hen og Katt kom fra en annen planet
$og snakka språket deres.
$Hun hadde spurt før, men hun skjønte det ikke.
$Hun spurte igjen.
$– Hvorfor kom dere hit?

#¶$Katt skrudde på skruer og små hjuli beltet sitt.
$Katt sa ingenting.
$Hen smilte og sa:
$– Dere får vite det.
$Siden.
$Vær tålmodig.
$Tiden er din venn.`
,
`#¶$Risobium i erteknollen

#¶$Jenny og Samir går i samme klasse og er venner. 
$De har opplevd noe merkelig. 
$I går landa det et romskip i hagen deres. 
$Det så ut som ei kule av glass. 
$Ut kom Hen og Katt. 
$De har ikke fortalt hvorfor de kom. 
$Hen sa bare: 
$Vi kommer i fred. 
$Og de sa at de kom fra en annen planet. 
$De kom fra en av planetene til ei rød sol. 
$Sola heter Proxima Centauri. 
$Hen snakka språket deres. 
$Det var merkelig.

#¶$I dag driver Hen og reparerer glasskula. 
$Jenny og Samir har gravd i jorda for å gjøre den løs og lett. 
$Dagen er fin. 
$Det er vår. 
$Våren er mellom vinteren og sommeren. 
$Det er litt løv på trærne. 
$Det er noen blomster. 
$Tida er inne for å så frø.

#¶$– Jeg elsker sukkererter! 
$sa Jenny. 
$Hun åpna posen med frø og telte dem. 
$– Tjue! 
$Det blir tjue planter! 
$Hvor mange erter blir det på hver plante? 
$Tusen?
¶$– Er du vill, lo Samir. 
$– Hvor mange belger blir det på hver plante? 
$Kanskje tjue?
¶$– Ja, og så er det kanskje fem erter i hver belg, sa Jenny.
¶$– Samir smilte stort: 
$– Kom igjen, stikk frøene i jorda! 
$Jeg vil tygge tusen sukkererter!

#¶$De stakk frøene i jorda. 
$De sådde. 
$Samir tok opp en pose til og leste utenpå: 
$Bønner.
¶$– De kom først fra Peru, hørte de en stemme bak seg. 
$Det var Hen. 
$Hen sto fortsatt og reparerte glasskula.
¶$– Jeg vil så kikerter, sa Jenny. 
$– Jeg elsker hummus! 
$Og vi kan lage falaffel eller steike dem som godteri.

#¶$Da hørte de Hens stemme igjen: 
$– Kikerter kan ikke vokse i Norge. 
$Det er for kaldt. 
$Kikerter vil ha mye varme og mye regn. 
$Reis til India eller Pakistan eller Midt– Østen. 
$Eller kjøp ei pakke i butikken.

#¶$– Men linser kan vi så, sa Samir. 
$– Da kan vi lage suppe.
¶$– Nei, sa Hen. 
$– Linser har vært dyrka av folk i ti tusen år, 
$men det er i Tyrkia og i mange andre varmere land enn Norge.
¶$– Men soya da, sa Jenny. 
$– Vi trenger å så soyabønner, 
$vi kan steike soyakaker til middag og lage olje til salaten.
¶$– Nei igjen, sa Hen. 
$– Soyaplanter vokser ikke i Norge. 
$Det er for kaldt. 
$Butikken selger bønner og olje.
¶$– Da sår vi ekstra mye sukkererter og bønner 
$som tåler bedre at det er kaldt, sa Samir. 
$– Og gulrøtter!
¶$– Ja, det er fint med litt frø, sa Jenny og åpna en pose.

#¶$Der kom Hens stemme igjen. 
$Hvordan kunne Hen høre alt de snakka om?
¶$– Det er fint med mye frø. 
$Menneskene i verden spiser frø hver dag.
¶$– Jeg spiser ikke erter hver dag, lo Samir. 
$– Og jeg er ikke ei høne heller, 
$som går og plukker frø på bakken. 
$Han klukka vakkert som ei høne.

#¶$– Nei, men du spiser kanskje brød?
¶$– Ja, sa Samir.
¶$– Det kommer fra korn, og korn er frø. 
$Du spiser kanskje ris?
¶$– Ja.
¶$– Ris er frø. 
$Eller mais?
¶$– Ja.
¶$– Mais er frø. 
$Eller nan?
¶$– Ja.

#¶$– Ja, det er laget av mel, 
$og mel er laget av knust korn, og det er frø. 
$Havregryn er frø. 
$Nøtter er frø. 
$Peanøtter er frø. 
$Gulrøtter, epler, appelsiner ...
¶$– Vi spiser alt det du forteller der, sier Jenny. 
$– Ikke si mer. 
$Jeg blir sulten på peanøtter!
¶$Hen retta seg opp. 
$Hen sto stille en stund – og sa: 
$– Frøet er finere enn gull og sølv. 
$Frøet er vår venn!
¶$– Er frøet for oss? 
$Lager planter frø for at mennesker og dyr skal få mat, lurte Samir på.

#¶$– Nei, planter lager frø 
$for at det skal bli flere nye planter.  
$Inni frøet er det et plantebarn. 
$Det kommer ei ny plante ut av frøet. 
$Blomsten kan visne og dø. 
$Men frøet lever videre og kan bli en ny blomst.
¶$– Samir tok en pose med frø. 
$– Gulrot, leste han.  
$– Plantebarn. 
$Finere enn gull og sølv, dem sår vi!

#¶$De sådde gulrøtter, sukkererter og bønner. 
$Stakk frø ned i jorda og la jord oppå. 
$Henta vann og tømte over. 
$Hen reparerte romskipet. 
$Ei humle fløy bort til løvetann-blomsten.  
$Men hva gjorde Katt? 
$Katt var stille. 
$Katt hadde vært stille hele tida. 
$Katt putta noe i jorda. 
$Var det et stort frø? 
$– Hva er det? 
$hviska Jenny. 
$– Det likner på en peanøtt? 
$Se – et skall med to peanøtter i?
¶$– Det vokser vel ikke peanøtter i Norge, hviska Samir tilbake.
¶$– Kanskje det er noe fra planeten deres, sa Jenny. 
$– Planeten ved den røde sola Proxima Centauri!

#¶$Stemmen til Hen kom bak dem.
¶$– Dere trenger ikke kjøtt, når dere har frø, sa Hen.
¶$– Jo, deilig kylling, sa Samir.
¶$– Deilig lammegryte, sa Jenny.
¶$– Deilig pølse, sa Samir.
¶$– Deilig kjøttkake, sa Jenny.
¶$– Kjøtt lager muskler i dere, sa Hen. 
$Det er proteinene i kjøttet som gjør det. 
$Men bønner og erter og linser har også proteiner som lager muskler.
¶$– Proteiner?

#¶$– Ja, proteiner. 
$Erteplantene lager proteiner, sånne som er i kjøtt.
¶$– Er det mulig?
¶$– Ja.
¶$– Proteiner i kjøtt og i erter?
¶$– Ja, det er sant. 
$Dere kan takke Risobium.
¶$– Det klarer jeg ikke si, sa Samir.
¶$– Det er ikke vanskeligere å si Risobium enn kjøttkake.
¶$– Men hva er det?

#¶$– Det er noen små vesener som heter bakterier. 
$Risobium-bakterier. 
$De bor i noen små kuler på røttene til erteplantene. 
$De tar nitrogen som er i lufta 
$og inn i kulene og spiser det. 
$Da blir det nitrogen i kulene til planta også. 
$Planta trenger nitrogen for å vokse. 
$Det trengs nitrogen for å lage proteiner. 
$Det blir mye proteiner i ertene og bønnene. 
$Som belønning får bakteriene leve og spise av planta. 
$Det betyr at de er avhengig av hverandre, 
$begge har fordeler. 
$Planta og bakteriene lever i en symbiose.

#¶$– Nå måtte Samir tenke en stund. 
$Kjøtt har proteiner. 
$Erter og bønner har proteiner. 
$– Nå har jeg en ide! 
$sa han plutselig. 
$Kanskje det går at å lage kjøttboller på plantene! 
$Kanskje det kan vokse kjøttboller på planter! 
$Protein-boller!
¶$Hen smilte.  
$– Det går fint an.

#¶$Så gikk Hen tilbake til romskipet 
$og fortsatte å reparere. 
$Jenny og Samir så på hverandre: 
$– Hvor går det fint an? 
$På jorda? 
$Eller på planeten Mo-lo der Hen og Katt kom fra? 
$Eller var det bare tull?
¶$Samir tok ei ert og så på den: 
$– Hei, lille frø! 
$Bli ei stor plante med mange kjøttkaker!
¶$Jenny lo. 
$– Erter, mener du. 
$– Ja, sa Samir. 
$– Men du veit hva Risobium finner på!
¶$Men hva Katt holder på med, 
$må du bare gjette. 
$Kanskje du får svar en annen gang?`
,
`#¶$La spiren bli grønn!

#¶$Jenny og Samir går i samme klasse og er venner. 
$De har opplevd noe merkelig. 
$Det har landa et romskip i hagen deres. 
$Det kræsja i et tre. 
$Det så ut som ei kule av glass. 
$Ut kom Hen og Katt. 
$De har ikke fortalt hvorfor de kom. 
$Hen sa bare: 
$Vi kommer i fred. 
$De kom fra en av planetene til ei rød sol. 
$Sola heter Proxima Centauri. 
$Hen snakka språket deres. 
$Det var rart.

#¶$Nå hadde Hen og Katt reparert romskipet. 
$Det sto på bakken og så ut som ei stor kule av glass. 
$Hen sa:
¶$– Vil dere være med en tur ned i jorda?
¶$– Nei takk, sa Jenny, 
$jeg må hjem og spise nå, dessverre!
¶$– Nei, takk, sa Samir, 
$jeg må også hjem og spise nå, dessverre!
¶$– Vi kan kjøre med romskipet, sa Hen. 
$– Bli med inn, så skal dere se.
¶$Jenny og Samir så på hverandre.
¶$– Skal vi, hviska Jenny.
¶$– Vi kan jo gå inn og se, hviska Samir.

#¶$Der var det fire små stoler som satt fast i gulvet. 
$Hen lukka døra og sa:
¶$ – På vår planet kan vi bli både små og store. 
$Da kan vi gå alle steder og se på alle ting. 
$Nå vil vi gjerne vise dere noe nede i jorda. 
$Da er det beste å være veldig liten. 
$Blir dere med på det?

#¶$– Blir vi store igjen? 
$spurte Jenny.
¶$– Blir vi akkurat sånn som vi var? 
$spurte Samir.
¶$– Ja, akkurat like store. 
$Ingen forandring,
¶$– Da blir vi med!
¶$Katt trykte på en knapp på beltet sitt. 
$Jenny så at blomstene vokste høyt rundt dem. 
$Trærne ble høyere. 
$– Alt blir større, sa Samir. 
$– Jeg ser bare gress.
¶$– Det er vi som blir små, sa Hen.

#¶$Katt styrte romskipet mot et hull i bakken. 
$– Vi låner tunnelen til meitemarken, sa Hen. 
$De kom ned i jorda. 
$De så hvite tråder var alle steder. 
$– Røtter, sa Hen. 
$– Det er vann, sa Jenny. 
$– Det regna i natt, sa Hen.
¶$Katt stoppa romskipet. 
$Foran dem var det tre store, hvite baller. 
$– Noen har gravd ned fotballene sine, sa Samir og pekte. 
$– Men de er mye større enn oss! 
$Hva er det?

#¶$– Ta på dere disse brillene, sa Hen. 
$– Når du har på dem, ser du hva tiden viser deg. 
$Derfor heter de Tiden er din venn.
¶$Jenny og Samir tok på brillene. 
$Hva var det de så? 
$Hva var de tre store ballene?

#¶$– Tre erter, sa Hen. 
$– Se nå!
¶$– Det kommer ut noe! 
$ropte Samir. 
$– En hvit, stor mark!
¶$– Nei, en slange! 
$sa Jenny. 
$– Kjør hjem!
¶$Hen smilte og sa: 
$– Vent. 
$La tiden virke. 
$La øynene se.
¶$– Men hva er det, sa Samir sint. 
$Han var redd.
¶$– Det er ei rot, sa Hen.
¶$– Ei rot?
¶$– Ja, rota til ei plante. 
$Ei rot kommer ut av erta nå. 
$Frøet spirer! 
$Rota skal sette fast babyplanta og gi den mat.
¶$– Baby? 
$Samir så ikke noen baby.
¶$– Inni erta er det ei veldig lita erteplante. 
$Den vil vokse. 
$Først kommer rota. 
$Hvis dere venter litt, kommer stengelen.
¶$– Hva mener du med baby, spurte Jenny.

#¶$– Det er ingen menneskebaby, sa Hen. 
$Det riktige navnet er en kime. 
$Inni kimen ligger alt som trengs for å lage ei ny plante. 
$Tenk på mennesker. 
$Inni magen til mammaer kan det vokse et foster 
$som har alt som trengs for at det skal bli et menneske. 
$Inni et frø er det et foster som kan bli ei plante. 
$Plantefosteret spiser det som er inne i frøet 
$og lager rot, stengel og blader. 
$Se!
¶$Hen pekte. 
$Ut av erta kom det ei rot til. 
$– Ei rot til, sa Samir. 
$– Den vokser oppover!
¶$– Det er en stengel, ikke rot, sa Hen.
¶$– Den bøyer hodet! 
$sa Jenny.
¶$– Øverst er det blader, sa Hen
$– Den bøyer hodet for at ikke stilken skal brekke på toppen. 
$Når stengelen kommer over bakken, er planta født. 
$Da kan den begynne å skaffe seg mat sjøl. 
$Da blir den grønn.

#¶$– Den kan ikke gå i butikken, lo Samir.
¶$– Nei, planta får næring fra jorda. 
$Rota henter næring. 
$Bladene lager næring når sola skinner på dem. 
$Rota og bladene gjør sånn at hele planta kan vokse. 
$Og så må regnet gi den vann.
¶$Samir hørte hva Hen sa. 
$Men det var litt rart. 
$Hvordan kunne det være et lite tre inni et frø?
¶$ – Har et stort tre med epler vært et frø? 
$spurte han.

#¶$– Ja, sa Hen.
¶$– Har gressmatta på fotballbanen vært frø?
¶$– Ja, mange frø.
¶$– Har alt vært frø, spurte Jenny.
¶$– Ja, alle trær, blomster, busker, gresset … 
$Frøet er en måte planta lever videre på. 
$Plante - frø - plante - frø - plante - frø - plante …. 
$Planter som lager frø har levd på jorda i hundre millioner år.
¶$– Men hvis plantene ikke lager frø, da stopper det?
¶$– Det er sant. 
$Tenk på mat. 
$Hvor kommer brødet fra, spurte Hen.
¶$– Fra korn.
¶$– Og hva er korn?
¶$– Det er frø!
¶$– Og hvor kommer melka fra?
¶$– Fra kuer.
¶$– Og hva spiser kuer?
¶$– Gress.
¶$– Og hvor kommer gresset fra?
¶$– Frø! 
$Men kan det leve mennesker på jorda uten frø?
¶$– Hva tror du? 
$spurte Hen.

#¶$Jenny og Samir ble stille. 
$Jenny tenkte: 
$– Hvor viktig er frø, egentlig? 
$Hvis det fantes en diger støvsuger som suger vekk alle frø, 
$ville alt dø da? 
$Hvis alle frø ble ødelagt?
¶$Hen så på Jenny og sa: 
$– Det finnes ingen slik støvsuger, 
$og det er ikke sannsynlig at alle frø blir ødelagt samtidig. 
$Men det er noen som har tenkt på å ta vare på frø, heldigvis. 
$Har dere hørt om frøbanken?
¶$– Nei, men mener du en bank som har penger?

#¶$– Det er en bank som passer på frø. 
$Den ligger på Svalbard. 
$Svalbard er ei gruppe med øyer som tilhører Norge 
$og ligger mellom Norge og Nordpolen. 
$På Svalbard er det laget store rom langt inn i fjellet. 
$Der er det 18 kuldegrader hele året.
¶$– Hvordan er frøene kommet dit, lurte Samir på.

#¶$– Jo, sa Hen, det er mange land som sender frø fra landet sitt. 
$De er mest opptatt av frø som lager mat til mennesker og dyr, 
$men også alle andre frø. 
$Det er flere frøbanker i verden. 
$Men den på Svalbard er den sikreste, 
$for den ligger i fjell og kulde.
¶$– Blir den ikke ødelagt av noen ting?
¶$– Nei. 
$Den trenger ikke kjøleanlegg og strøm, 
$for det er kaldt fra før. 
$Den kan ikke bombes i stykker. 
$Til og med atombomber kan ikke ødelegge den.
¶$– Men hvis noen ødelegger frøene i et land?
¶$– Da kan de få tilbake frø fra frøbanken på Svalbard. 
$Der er det mange frø av hvert slag. 
$De kan så dem, 
$og da spirer frøene og blir nye planter som lager nye frø.

#¶$– Jeg har aldri tenkt på at frø er så viktig, sa Jenny.
¶$– Frø er så viktig, sa Hen. 
$– Frø er viktigst. 
$Derfor må menneskene ikke ødelegge frø. 
$På vår planet Mo-lo ødelegger vi ikke frø. 
$Våre frø er vennene våre.
¶$Men på jorda er det mennesker som har funnet ut 
$hvordan de kan ødelegge frøene.
¶$– Hvorfor ødelegger noen på jorda frø? 
$spurte Jenny.
¶$– Fordi de selger frø. 
$De har tenkt at bønder skal kjøpe nye frø av dem. 
$Men bønder i hele verden pleier alltid å ta noe av kornet 
$eller risen sin og så det på nytt. 
$De har frø sjøl. 
$De spiser ikke alt. 
$Sånn kan plantene leve videre og videre i år etter år, 
$og gi mat til mennesker og dyr.
¶$– Det er jo veldig stygt å ødelegge frø så de ikke spirer! 
$sa Jenny. 
$Nå var hun sint.

#¶$– Ja, og det mener nok de fleste menneskene også, sa Hen. 
$– Mange har protestert. 
$Så de som har funnet opp å lage døde frø, 
$har sagt at de ikke vil selge dem. 
$Men de har ikke kasta oppskriften.
¶$– Men hvordan klarer plantene å lage frøene sine?
¶$– Jeg skal fortelle det en annen gang, sa Hen og smilte. 
$– Si farvel til frø og spirer!
¶$Katt snudde romskipet, og de kjørte sakte mot lyset. 
$Jenny snudde seg og så på frøet 
$med den lille rota og den nye stengelen. 
$– Ha det, lille babyplante, 
$sa hun inni seg. 
$– Jeg ser deg igjen over bakken, 
$du som kan spire!`
,
`#¶$Hvor kommer eplene fra?

#¶$Jenny og Samir går i samme klasse og er venner. 
$En dag landa det et romskip i hagen deres. 
$Det så ut som ei kule av glass. 
$Hen og Katt kom med romskipet fra en annen planet. 
$Sola til planeten heter Proxima Centauri. 
$Hen og Katt kan gjøre alle veldig, veldig små.

#¶$Nå står Samir og ser på epletreet i hagen. 
$Det er mange blomster på det. 
$– Epler, tenkte han. 
$– Store, saftige epler som knaser og renner når du tar en bit. 
$Han måtte svelge. 
$– Begynner du å sikle, lo Jenny. 
$– Ja, nesten, men hvordan kan en blomst bli til et eple? 
$lurte han på. 
$– Blomsten visner, og da blir det eple, sa Jenny. 
$– Men hvordan? 
$Samir var ikke fornøyd. 
$– Hvordan? 
$Hvem veit det?

#¶$– Jeg, hørte de bak seg. 
$Det var Hen. 
$– Jeg kan vise dere det, 
$men da må jeg først fortelle om Charles Darwin! 
$Han reiste rundt i verden og så hvordan 
$dyr og planter passa til hverandre.  
$En gang kom han til Madagaskar i Afrika. 
$Han så en blomst, en orkide, 
$der en del av blomsten var et langt rør som hang ned. 
$Like langt som halve armen deres! 
$Nedi der var det blomstersaft. 
$Hvorfor gjorde blomsten det så vanskelig for insekter 
$å få tak i safta, som var maten deres?  
$Darwin var helt sikker, og han sa: 
$Når det finnes en slik blomst, 
$finnes det også et dyr som har ei så lang tunge, 
$kanskje en sommerfugl.

#¶$Det var det ikke mange som trodde på. 
$Men noen år etter ble insektet funnet. 
$Det var en sommerfugl, en svermer, som hadde ei tunge 
$– ja, like lang som halve armen din. 
$Den klarte å få tak i safta. 
$Og når den spiste, bestøvet den blomsten, 
$slik at blomsten kunne lage frø og leve videre.
¶$– Bestøve?
¶$– Jeg kan vise dere det. 
$Sett dere inn, så drar vi på tur! 
$På oppdagelsesferd!
¶$De satte seg på stolene inne i glasskula. 
$Katt trykket på en knapp i beltet sitt. 
$Alle fire ble veldig små. 
$Kula lettet, de steg opp i lufta. 
$Foran seg så de et dyr som var større enn dem. 
$Det kunne fly. 
$Seks bein hang ned. 
$Vingene slo fort. 
$– Humle, sa Jenny. 
$– Den har vi sett før. 
$– Den har blomsterstøv på beina, sa Samir. 
$Hen pekte: 
$– Vi følger etter!

#¶$De kjørte til epletreet. 
$De rosa og hvite blomstene lukta deilig. 
$Humla landa midt i blomsten.
¶$– Se, humla mister blomsterstøv på arret, pekte Hen.
$– Ta på disse brillene, de er laget av fjellet gzi-gzy. 
$Da kan dere gjennom ting.
¶$– Se! 
$Det kommer noe ut av pollenkornet! 
$En orm, sa Samir.
¶$– Nei, det er et rør, sa Hen. 
$– Ser ut som en veldig tynn vannslange.
¶$– Hvorfor?
¶$– Fordi sæd-cellene som er i pollenkornet 
$skal komme fram dit de skal, sa Hen. 
$– Sædcellene kryper fram inne i slangen!
¶$– Røret vokser inn i blomsten, sa Jenny, 
$og sædcellene kommer etter!
¶$– Ja, røret vokser innover i griffelen, sa Hen.
¶$– Hvor skal det?
¶$– Det skal til egget. 
$Til egg-cella. 
$Røret skal føre sædcellene til eggcellene!

#¶$De så hvordan pollenslangen ble lengre og lengre. 
$To små korn, som sandkorn, fulgte med.
¶$– Nå er pollenrøret kommet helt ned, sa Jenny.
¶$– Ja, nå skal det inn i ovariet. 
$Det kalles fruktknuten. 
$Det er det som blir eplet du spiser. 
$Et eple er en frukt. 
$Fruktens jobb er å spre og beskytte frø, 
$for inni frøet er det jo en liten, ny babyplante!
¶$De så at pollenslangen trengte seg inn i et rom, 
$det var fruktknuten, og der inne var det noen andre små prikker.
¶$– De prikkene er eggcellene, sa Hen. 
$– Følg nøye med. 
$Nå kommer sædcellene ut av røret.
¶$De så. 
$Ut av pollenrøret kom ei sædcelle. 
$Der! 
$Den traff eggcella, og de smelta sammen. 
$Nå var de ikke to prikker, men en.
¶$– Klapp i hendene og rop hurra, sa Hen og lo. 
$– Nå så dere en befruktning! 
$Det er fantastisk! 
$Nå kan den befrukta eggcella bli et frø, 
$og i frøet blir det plantebaby. 
$Plantebabyen kan bli et nytt epletre. 
$Planter med blomster formerer seg på denne måten.
¶$– Den andre sædcella, da, spurte Samir.
¶$– Se, den smelter sammen med ei annen eggcelle, 
$og da begynner eggcella å vokse og bli mat. 
$Mat for frøet, altså.
¶$– Sædceller og eggceller 
$– hvorfor tenker jeg på mennesker?

#¶$– Fordi det er slik mennesker også formerer seg. 
$Sædceller er fra hannen og eggceller er fra hunnen. 
$De må smelte sammen. 
$Da blir det et befrukta egg 
$som kan bli et nytt menneske 
$når det er ferdig med å vokse.
¶$– Slik er det med sauene også, sa Samir. 
$– Det har jeg sett. 
$De para seg.
¶$– Jeg har sett fugler pare seg. 
$På film, sa Jenny.
¶$– Mennesker og sauer og fugler kan finne hverandre, sa Hen. 
$– De kan gå eller fly. 
$Men kan hunn-blomstene gå omkring og finne en hann? 
$Kan hann-blomstene fly omkring og finne en hunn?
¶$– Nei, de sitter jo fast i jorda, lo Samir.
¶$– Nettopp! 
$Derfor må de ha hjelp!

#¶$– Nå skjønner jeg det, sa Jenny. 
$Det er det humlene og de andre insektene gjør! 
$De hjelper blomstene til å pare seg!
¶$– Ja, sa Hen. 
$– Tenk deg at blomsten roper! 
$Se på meg! 
$Fine farger! 
$Kom hit, jeg lukter godt! 
$Kom hit, spis saft og bli mett! 
$Kom hit og hent blomsterstøv til barna dine!
¶$– Å ja, sa Jenny. 
$– Da tenker jeg at humla sier: 
$– Jeg ser deg! 
$Jeg er sulten!
¶$– Da tenker jeg noe, sa Samir. 
$– Når humla er i blomsten, 
$så kommer det blomsterstøv på pelsen dens, 
$og når den kommer til den andre blomsten, 
$så mister den blomsterstøvet på arret!
¶$– Ja, sa Hen. 
$– Blomsterstøv heter også pollen. 
$Og inni der er det sædceller. 
$Det er gutte-delen av blomsten, kan vi si.
¶$– Og da er arret og griffelen og ovariet jente-delen av blomsten, sa Jenny. 
$– Nå skjønner jeg det nesten.

#¶$– Ja, sa Hen. 
$– Og når blomsterstøvet setter seg på arret, 
$sier vi at blomsten er bestøvet eller pollinert. 
$Men når sædcella smelter sammen med eggcella, 
$sier vi at eggcella er befruktet. 
$Det har skjedd en befruktning. 
$Det kan bli en frukt! 
$Det er målet.
¶$– Og de røde, gule, hvite eller blå kronbladene er reklame, lo Samir. 
$– Kom hit! 
$Kom hit!
¶$– Blomstene er egentlig plantenes kjønnsorganer, sa Hen.
¶$– Plukker vi kjønnsorganer og setter dem i en vase, spurte Jenny.
¶$– Det er akkurat det vi gjør, sa Hen, – for de er så fine.
¶$– Nå flyr humla til et annet epletre, pekte Samir.
¶$– Vi kan se om vi ser andre insekter 
$som bestøver blomster, sa Hen. 
$– Der er ei annen humle! 
$Vi kjører!

#¶$De kjørte til en lilla blomst. 
$– Rødkløver, sa Jenny. 
$– Ja, sa Hen. 
$Den lokker til seg humler med lang tunge.
¶$De kom til en blomst som heter fuglevikke. 
$Den var også vennen til humler.
¶$– Se! 
$En gul blomst med veps, sa Samir.
¶$– Det er ei flue, sa Hen. 
$– Den har kamuflasjefarger! 
$Den vil si til fuglene: 
$Jeg er ikke flue, jeg er veps og kan stikke deg!
¶$De kjørte videre. 
$– Blåbærblomster!
¶$– Hvis du spiser et blåbær, 
$så har ei humle vært inni blomsten og befrukta den.
¶$– Tusenvis av blåbær i skogen?
¶$– Ja, ei humle kan fly sju turer om dagen.  
$Og hvor mange blomster besøker den på en sånn tur?
¶$– Kanskje hundre, sa Samir.
¶$– Den besøker fem hundre blomster på en tur, sa Hen. 
$– Da kan du regne ut hvor mange blomster 
$det blir på sju turer til sammen!
¶$– Vanskelig, sa Samir. 
$– Men humla jobber hardt!
¶$– Se, et søtt dyr! 
$smilte Jenny. 
$– Den skinner i grønt og gull!

#¶$– Det er en hårgullbasse, sa Hen. 
$– Den passer til store, flate blomster. 
$Den er tung og har kort tunge. 
$Den passer til prestekrage, og prestekragen passer til den. 
$– Hårgullbasse, sa Jenny sakte. 
$– Basse betyr bjørn, sa Hen.
¶$Hen så på dem. 
$– Nå har dere sett bestøvning og befruktning. 
$Tenk på hva insektene gjør. 
$Hva skjer hvis det ikke er mat for humlene om våren? 
$Hvem skal da bestøve epleblomstene? 
$Hva hvis det ikke er mat for humlene 
$etter at epleblomstene er blitt epler? 
$Hvem skal da leve til neste år?
¶$Jenny så på Samir. 
$– Hva tror du? 
$Er det nok mat for humler der vi bor?
¶$– Hvis vi skal ha epler, må vi nok sjekke det, sa Samir. 
$– Insektenes og eplenes beste venn, det er meg, det.`
,
`#¶$Humler ruger på egg

#¶$Jenny og Samir går i samme klasse og er venner. 
$En dag landa det et romskip i hagen deres. 
$Det så ut som ei kule av glass. 
$Hen og Katt kom med romskipet fra en annen planet. 
$Sola til planeten heter Proxima Centauri. 
$Hen og Katt kan gjøre alle veldig, veldig små.
¶$Akkurat nå flyr det ei humle forbi dem. 
$Den flyr langs bakken. 
$Litt hit og litt dit.
¶$– Det ser ut som den leiter etter noe, sa Jenny.
¶$– Den gjør det, sa Hen. 
$– Det er ei dronning. 
$Hun leiter etter et sted å bo. 
$Hun vil lage et bol.
¶$– Et bol?
¶$– Ja, det betyr et sted å bo. 
$Et humlebol. 
$Hun vil legge egg. 
$Se! 
$Nå kryper hun ned i bakken. 
$Kanskje det har bodd mus der?

#¶$Etter en stund kom hun opp igjen. 
$– Kom, vi følger i glasskula, sa Hen.
¶$– De gikk inn i glasskula og satte seg på stolene. 
$Katt skrudde på knapper i beltet sitt. 
$– Bli små! 
$sa Hen. 
$De ble små. 
$De ble mindre enn humla. 
$De kjørte av sted. 
$Lydløst.
¶$– Humla fløy rett til noen trær. 
$– Det er gåsunger, det er seljeblomster med pollen, sa Samir.
¶$– På det andre treet er de grønne jenteblomstene, 
$sa Jenny, med masse saft.
¶$– Humla trenger mat, sa Hen. 
$– Hun har ligget i dvale i sju måneder.
¶$– I dvale?
¶$– Å ligge i dvale er en slags søvn, sa Hen. 
$– Hun har ligget nede i jorda hele vinteren. 
$Nå er det blitt vår og litt varmere her oppe. 
$Da våkner hun.

#¶$– Så flaks at det var blomster på seljetreet akkurat nå, da, sa Jenny. 
$– Ikke flaks, sa Hen. 
$– Humla våkner når seljetreet blomstrer. 
$Da får humla mat. 
$Seljetreet trenger humler, 
$slik at blomstene blir bestøvet og kan lage frø. 
$De våkner samtidig, kan vi si! 
$Det har vært sånn i mange millioner år. 
$– Jeg skjønner det, sa Jenny. 
$– Humla og selja er en kropp! 
$– Ja, sa Samir, de sitter sammen med et usynlig tau! 
$– Det er ikke noe tau der, sa Hen, 
$men jeg skjønner hvorfor dere tenker det. 
$Uten selje, ingen humler. 
$Uten humler, ingen selje.

#¶$De så hvordan humla fløy omkring i treet. 
$Sugde saft. 
$Fikk pollen på seg. 
$Hun begynte å samle pollen i kurvene på beina. 
$Så fløy hun videre.
¶$– Vi følger etter henne! 
$Ta på disse brillene, så ser dere alt mye nøyere! 
$De er fra fjellet Gzi-gzy på planeten vår.
¶$Humla fløy tilbake til hullet hun hadde funnet. 
$Hun var tung av mat. 
$Hun krøyp ned. 
$Katt lot glasskula vente litt. 
$Så fulgte de sakte og forsiktig etter. 
$De kjørte først bortover en gang. 
$En liten tunnel. 
$Så kom de inn i et rom. 
$Det hadde nok bodd mus der før. 
$Katt stoppa glasskula. 
$Humla gikk bort til noe som så ut som ei bøtte eller krukke. 
$Den var nok ikke helt ferdig, 
$for humla begynte å gjøre den høyere. 
$Hun gned seg på magen og putta noe i munnen. 
$– Hun har voks mellom platene på magen, sa Hen. 
$– Nå gnir hun det av og putter det i munnen. 
$Hun blander det med spytt og bygger med det.

#¶$– Hva er det hun lager? 
$spurte Jenny. 
$– Hun lager ei krukke hvor hun skal legge egg, sa Hen.  
$– Se, hun børster det gule blomsterstøvet 
$fra kurvene på beina opp i krukka. 
$Hun spytter litt nektar oppi også. 
$Det skal bli maten til larvene 
$som kommer ut av eggene.
¶$– Så merkelig, sa Jenny. 
$– Humle som lager krukke!
¶$– Det er ut som gul tyggegummi, sa Samir.
¶$– Det ser ut som hun lager et lokk, sa Jenny. 
$– Nå setter hun seg oppå!
¶$– Det er ei krukke til der! 
$pekte Samir.
¶$– Den spytter hun ut nektaren i, sa Hen. 
$– Blomstersafta. 
$Hun spiste mye ute i seljetrærne.
¶$Humledronninga satt på krukka med pollen. 
$– Det stikker noe ut bak på kroppen, pekte Samir. 
$– Det er ei nål eller et spyd!

#¶$Han kom på at humla var veldig stor, 
$nå som de var så små. 
$Men de satt inni glasskula, heldigvis.
¶$– Det er en brodd, sa Hen. 
$– Vepser har brodd, og de kan stikke, sa Jenny.
¶$– Humledronninga bruker den til å legge egg med, sa Hen. 
$– Hun kan stikke også, men helst ikke. 
$Bare hvis du plager den. 
$Og hanner har ikke brodd i det hele tatt. 
$– Jeg plager ikke dyr, sa Jenny. 
$– Ikke jeg heller, sa Samir. 
$– Men hva skjer nå? 
$Humla stikker brodden ned i den gule tyggegummien!

#¶$– Ja, nå legger hun egg, sa Hen. 
$– Hun legger egg i krukka med pollen. 
$Hun har en pose med sperm, altså sædceller, inni kroppen, 
$og når eggene går gjennom magen på vei ut, 
$så slipper hun ut sædceller på dem, hvis hun vil. 
$Da befrukter hun eggene. 
$De skal bli arbeidere som skal hjelpe til i bolet 
$og fly ut og hente mer pollen og nektar og lage flere krukker. 
$De er jenter. 
$Dronninga legger egg hele sommeren.
¶$Hvor mange egg legger hun i ei sånn krukke, spurte Jenny.

#¶$– Kanskje ti, sa Hen. 
$– Se, nå setter hun seg på krukka. 
$Hun vil at den skal være passe varm. 
$Da kan det bli larver inni eggene. 
$– Fugler sitter på eggene sine og varmer dem, sa Jenny. 
$– Det har jeg faktisk sett. 
$Ruger humledronninga på eggene som en fugl? 
$– Ja, sa Hen. 
$– Først er det egg, 
$så blir det larver som skal ha mat, 
$så blir larvene kokonger, 
$og så kommer det nye humler ut. 
$Alt dette tar tre eller fire uker.
¶$– Men hvor får hun mat, spurte Jenny.

#¶$Akkurat da så de at humla snudde på hodet. 
$Hun bøyde seg og stakk den lange tunga si 
$ned i krukka med saft! 
$Den sto jo ved siden av! 
$– Det er det rareste, sa Jenny. 
$– Hun har laget matpakke! 
$– Ja, sa Hen, men hvis det blir lite, 
$flyr hun ut en tur og henter mer.
¶$Plutselig begynte humla å riste på seg. 
$Den viftet med vingene, fort, fort. 
$Men den fløy ikke. 
$De hørte en lyd: 
$Buzzzzzzzzzz. 
$– Hvorfor, lurte Samir på. 
$– Hun gjør seg varmere, sa Hen. 
$– Hun passer på at temperaturen er riktig for eggene. 
$Hvis det blir for varmt der inne, 
$går humlene til utgangen 
$og vifter med vingene og får inn mer kjølig luft.

#¶$– Når humlene flyr omkring til blomstene, 
$så er det for å samle mat? 
$spurte Jenny. 
$– Ja, til seg sjøl og dronningene og larvene.
¶$– Og jeg veit noe, sa Samir. 
$– Når de flyr for å hente mat, 
$bestøver de blomstene samtidig. 
$Da kan det bli frø og nye planter.
¶$– Men hva skjer med humlene 
$når blomstene visner om høsten?
¶$– Da dør de. 
$Nesten alle. 
$Men før det, 
$så lager dronninga hanner og nye dronninger. 
$Hun legger egg som blir hanner. 
$Så legger hun noen egg som skal bli dronninger. 
$De larvene får ekstra mye mat, 
$så de nye dronninghumlene blir store. 
$Hannene flyr ut og lager en lukt som hunnene liker. 
$De nye dronningene flyr ut, 
$de finner hanner og hanner finner dem, 
$og de parer seg. 
$Så dør alle hannene, 
$alle arbeiderne og den gamle dronninga. 
$Det er om høsten. 
$Da er det jo ikke blomster mer, 
$og da er det ikke mat heller.

#¶$– Men hvordan kan det bli nye humler neste år?
¶$– De nye dronningene som har para seg, 
$finner et hull i bakken eller i et tre eller mellom steiner. 
$Der ligger de i dvale hele vinteren og lager 
$et nytt bol og en ny koloni til våren.
¶$– Det minner meg om blomster og frø, sa Jenny. 
$– Blomstene visner og dør, 
$men frøet ligger i bakken til våren og blir ei ny plante.
¶$– Hvor mange humler blir det i et humlebol, spurte Samir. 
$– Kanskje hundre, sa Hen.
¶$– Men det betyr at hvis du dreper ei humledronning, 
$så dreper du hundre humler, sa Jenny.
¶$– Det er sant, sa Hen. 
$– Og så må vi tenke på at humlene 
$trenger mat fra våren og hele sommeren. 
$Menneskene må ikke ta vekk blomstene. 
$Da blir det heller ikke epler og bringebær og blåbær.

#¶$– Humlene er så søte og snille, sa Jenny. 
$– Jeg får lyst til å kose humle.
¶$– Jeg får lyst til å klappe humle, sa Samir. 
$– Veldig forsiktig, altså.
¶$– Humla blir nok redd, sa Hen, 
$men dere kan gjøre mye annet fint. 
$Ikke drepe dem. 
$Passe på at menneskene lar det vokse blomster.
¶$– Hvordan gjør vi det, lurte Samir på.
¶$– Dere er smarte, sa Hen. – Dere finner det ut. 
$Det er jeg sikker på.`
,
`#¶$I meitemarkens verden

#¶$Nå skal du få høre noe rart. 
$Det er ei fortelling om Jenny og Samir. 
$De er mennesker. 
$Så er det om Katt og Hen. 
$Hvor kommer de fra? 
$Det veit vi ikke. 
$De kom i et romskip. 
$Det er helt rundt som ei kule. 
$Det er av glass. 
$Romskipet landa i et tre med et kræsj! 
$Det var jo merkelig. 
$Men det er noe som er enda rarere. 
$Det er at Hen, altså Hen som kom med romskipet, 
$Hen kan gjøre andre små. 
$Veldig, veldig små. 
$Så små at de kan gå inn i huset til meitemark! 
$De kan gå inn i gangene og se hvordan det er der! 
$De har fått hodelykter av Hen. 
$For det er helt mørkt hos meitemarken.

#¶$Nå skal du få høre hva som skjedde.
¶$– Vi går ned her! 
$sa Hen. 
$Det var et hull i bakken rett ved en blomst.
¶$De kom ned i mørket. 
$Det var en slags tunnel, eller en gang. 
$Det var stille.
¶$– Hysj! 
$Hen stoppa. 
$Jenny og Samir prøvde å høre. 
$Nei. 
$Ingenting. 
$Hysj! 
$sa Hen igjen. 
$Da hørte de noe. 
$Hør! 
$Noe beveget seg. 
$Noe brunt. 
$Noe langt.
¶$– Er det meitemarken? 
$spurte Jenny. 
$Hun hviska, sånn: 
$– Er det meitemarken?
¶$– Ja, sa Hen. 
$Det er meitemarken. 
$Vi ser ikke hodet. 
$Vi ser halen. 
$Den dytter hodet inn i jorda. 
$Den spiser og spiser. 
$Den spiser seg bortover. 
$Det er sånn det blir ganger. 
$Tunneler.

#¶$– Hvor blir det av all jorda som den spiser? 
$spurte Jenny.
¶$– Hva skjer! 
$ropte Samir. 
$Du kan kanskje gjette? 
$Hvor det blir av alt som marken spiser? 
$Hva tror du Samir fikk i hodet? 
$Du gjetta riktig! 
$Det var bæsj! 
$Ut av halen til marken kom det mange brune klumper som dryssa over dem.
¶$– Flott! 
$ropte Hen. 
$Her blir det fin jord! 
$Vær så god, rot, bare spis!
¶$Hen tok tak i ei hvit rot som vokste i gangen der. 
$Hen hilste på rota. 
$Samir hørte at Hen sa noe til rota. 
$Kunne Hen snakke med planter?
¶$De dytta bæsjen til side og gikk videre i mørket. 
$Stille. 
$De gikk enda lengre. 
$Inn i en ny gang. 
$Lyktene de hadde på hodet, lyste inn.

#¶$– Stopp! 
$Hen stoppa.
¶$Alle stoppa. 
$Samir forsto ikke hva han så. 
$Han så to meitemark som lå helt stille. 
$Helt inntil hverandre. 
$De rørte seg ikke. 
$Var de døde? 
$Drepte de hverandre? 
$Var de limt sammen? 
$Spiste de hverandre? 
$Samir ble redd. 
$Samir likte plutselig ikke å være så liten. 
$Han ville ut! 
$Han ville bli stor igjen!
¶$Hen så at Samir ikke var glad. 
$Hen tok handa hans og smilte på en snill måte og sa: 
$– Det er ikke farlig. 
$De rører seg ikke. 
$De bryr seg ikke om oss. 
$Vi er ikke mat som de liker.

#¶$– Hva gjør de? 
$spurte Samir.
¶$– De skal lage nye markebabyer, sa Hen. 
$– Begge markene har jente-egg og begge har gutte-frø.
¶$– Hva! 
$ropte Jenny. 
$– Det er vel ikke riktig. 
$Jenter har jenteegg og gutter har guttefrø.
¶$– Ja! 
$sa Samir. 
$– Jenter har jenteegg og gutter har guttefrø.
¶$– Men dere er ikke meitemark! 
$sa Hen. 
$– Meitemark er jente og gutt på en gang. 
$Men de bytter med hverandre likevel. 
$De gir hverandre guttefrø. 
$Det heter også sperm og sædceller.

#¶$Samir så på de to markene som lå helt stille. 
$Det så ut som de var limt sammen.
¶$– Er det det de gjør nå?
¶$– Ja, sa Hen, de bytter. 
$Så går de fra hverandre. 
$Etter en stund blir det rosa beltet på marken tykkere. 
$På begge markene. 
$Beltet løsner og likner en pose. 
$Marken skyver seg baklengs ut av beltet. 
$Når beltet er ved åpningen for eggene, 
$kommer eggene ut og legger seg i beltet. 
$Når beltet er ved åpningen for spermen, 
$kommer det sperm i beltet. 
$Spermen setter seg fast på eggene. 
$Marken rygger helt ut av beltet. 
$Beltet lukker seg i hver ende. 
$Det ser ut som en liten ballong. 
$Inni den blir det nye, små mark.
¶$Babymark.

#¶$Jenny og Samir sto helt stille. 
$Lyktene lyste på de to markene. 
$De lå ikke stille mer. 
$De gikk sakte fra hverandre. 
$– Hva skjer? 
$hvisket Jenny. 
$Hun ville ikke forstyrre. 
$Hun ville se alt.
¶$Og hun så det. 
$Meitemarkene trakk seg baklengs forsiktig ut av beltet sitt. 
$Beltet lå nå på bakken. 
$Det så ut som en liten ballong. 
$En pose. 
$Det så ut som om noen hadde lagd en knute i begge ender.
¶$– Blir det marke-baby nå? 
$spurte Samir.
¶$– Det blir flere. 
$De skal ligge i posen i flere uker. 
$Da blir de ferdige og kommer ut. 
$Posen har et fint navn.
¶$– Hva er det?
¶$– Kokong!
¶$– Kokong?
¶$– Kokong!
¶$– Det rimer på ballong, sa Jenny.

#¶$Nå går de fire stille videre. 
$Forsiktig. 
$De vil ikke skremme meitemarken. 
$De vil se hva den gjør. 
$De vil se hvordan den har det der inne. 
$Jenny lurer på noe. 
$Hvorfor raser ikke gangene sammen?

#¶$– Hvorfor er gangene så sterke og fine? 
$spør Jenny.
¶$– Marken lager dem harde og fine. 
$Marken spiser og graver. 
$Samtidig smører den slim på veggene. 
$Da blir gangene harde.
¶$– Hva er slim?
¶$– Det likner spytt. 
$De smører veggene med det. 
$Da blir gangene harde som kopper.
¶$– Kopper som vi drikker av?
¶$– Ja, like harde. 
$Derfor varer de i veldig mange år. 
$De kan vare i tusen år!
¶$– I tusen år! 
$Jenny måtte tenke. 
$Kan en mark lage noe som varer i tusen år? 
$En liten bløt mark som ikke har nese, ikke øyne, ikke ører? 
$Som ikke kan snakke? 
$Som ikke har armer og hender? 
$Er det mulig?
¶$Hun rakk ikke å tenke mer. 
$Hun hørte en lyd. 
$Det var lyden av noen som spiste. 
$– Slafs, slafs, slafs, slafs … Noen var sulten. 
$Noen spiste veldig fort. 
$Noen spiste noe bløtt … slafs, slafs, slafs, slafs …

#¶$Hen hvisket: 
$– Stå helt stille. 
$Ikke snakk.
¶$Hen stirret mot lyden.
¶$Jenny stirret mot lyden.
¶$Samir stirret mot lyden.
¶$Katt stirret mot lyden.
¶$De så et langt dyr. 
$Det var ikke gult. 
$Det var ikke rødt. 
$Det var oransje. 
$Det var litt flatt. 
$Det hadde veldig mange bein på hver side. 
$Og det hadde klør! 
$To store klør. 
$Var det noe under? 
$Lå dyret oppå en pinne? 
$En brun pinne?
¶$Samir så hva det var. 
$Det var en meitemark! 
$Og slafs, slafs slafs var dyret som spiste meitemarken! 
$Den holdt marken med klørne og tygde marken! 
$Æsj! 
$Samir glemte å være stille. 
$– Den spiser en meitemark! 
$sa han høyt.
¶$Jenny ble redd.
¶$Hun og Samir og Hen og Katt var små! 
$De var mindre enn dyret! 
$De var mat!

#¶$Dyret hørte dem. 
$Dyret løftet hodet. 
$Munnen og klørne var rett foran dem.
¶$Jenny løp. 
$Samir løp. 
$Katt løp. 
$Hen løp. 
$De løp etter hverandre. 
$Hvor var ut? 
$Jenny løp hit, løp dit, løp ned, løp bort, 
$løp opp, – hvor var ut! 
$Dyret løp etter dem! 
$Med klørne foran seg!
¶$Jenny så lys. 
$Det var hullet! 
$Der var ut! 
$De løp alt de kunne 
$– og var ute på gresset. 
$Det var dyret også. 
$Det kastet seg mot Jenny. 
$– Bli store! 
$ropte Hen fort. 
$Med en gang ble de store igjen. 
$Jenny var reddet. 
$Samir ble heller ikke spist. 
$.
¶$Hvor var dyret? 
$Borte? 
$– Her! 
$ropte Samir. 
$I gresset så de et lite, oransje dyr. 
$Det var litt flatt. 
$Det hadde mange bein på hver side. 
$Det var mindre enn en finger. 
$– Lite og søtt dyr, sa Samir. 
$– Jeg er veldig stor, heldigvis.

#¶$– Det oransje dyret er en skolopender, sa Hen. 
$– Det er meitemarkens største fiende. 
$Den er smal og lang og kan gå ned i gangene. 
$Den dreper meitemarken med klørne sine og spiser den.
¶$Jenny var så glad! 
$Hun ble ikke spist av en skolopender! 
$– Jeg skjønner ikke hvorfor jeg ble redd 
$for det lille dyret der!
¶$Det lille dyret forsvant. 
$– I kveld skal vi være ute i mørket, sa Hen.
¶$– Hva skal vi gjøre? 
$– Hvor skal vi? 
$Jenny og Samir ville vite det.
¶$Du skal også få vite det. 
$Men det er i en annen fortelling. 
$Og der er det veldig, veldig mørkt.`
,
`#¶$Meitemarken har fem hjerter

#¶$Nå skal du få høre noe rart. 
$Det er ei fortelling om Jenny og Samir. 
$De er mennesker. 
$Så er det om Katt og Hen. 
$Hvor kommer de fra? 
$Det veit vi ikke. 
$De kom i et romskip. 
$Det er helt rundt som ei kule. 
$Det er av glass. 
$Romskipet landa i et tre med et kræsj! 
$Det var jo merkelig. 
$Men det er noe som er enda rarere. 
$Det er at Hen, altså Hen som kom med romskipet, 
$Hen kan gjøre andre små. 
$Veldig, veldig små. 
$Så små at de kan gå inn i huset til meitemark!

#¶$Nå skal du få høre om da Jenny og Samir, 
$Katt og Hen var ute en kveld det var mørkt. 
$Det var stille. 
$– I kveld må vi bli små, sa Hen. 
$– Vi skal se på noe fint. 
$Bli små! 
$sa han.
¶$De ble små. 
$De ble så små som neglen din. 
$Nei, som halve neglen på den minste fingeren. 
$Jenny og Samir måtte klatre 
$for å komme over små pinner på bakken. 
$Foran dem var det noen store, brune klumper. 
$– Vi gjemmer oss, sa Hen. 
$– Vi gjemmer oss bak denne fine bæsjen.

#¶$– Er det bæsj fra en elefant, spurte Samir. 
$Han ville ikke møte en elefant fra sirkus. 
$Han var for liten.
¶$– Nei. 
$Fra en meitemark! 
$sa Hen. 
$– Fra en stor meitemark som heter Lumbricus! 
$Lumbricus terrestris. 
$Den kan bli like lang som leggen din. 
$Den dytter ut bæsjen sin. 
$Det er den vi ser. 
$Hysj! 
$Nå kommer den!
¶$Jenny kunne ikke se noe. 
$Hun så ikke det sultne piggsvinet 
$som sto rett bak dem heller. 
$Hun så der Hen pekte. 
$Det var et hull i bakken. 
$Noe kom opp. 
$Noe langt og spisst og brunt. 
$Det var en meitemark. 
$Den følte på bakken. 
$Den kjente her, den kjente der.
¶$– Den leter etter løv, sa Hen lavt. 
$– Den vil spise blader som har falt ned fra trærne. 
$De som er litt gamle og våte er best. 
$Den tar gammelt gress også. 
$Den liker at det er litt råttent.

#¶$– Hva er råttent?
¶$– Har du sett et eple som er blitt brunt og bløtt? 
$Det er råttent. 
$Det går i stykker. 
$– Se! 
$Der drar den et blad ned i gangen sin!
¶$Jenny så at den dro det store bladet ned i gangen. 
$Litt og litt. 
$Det ble borte.
¶$– Kom! 
$sa Hen. 
$– Vi blir med!
¶$– Nei, takk, sa Samir. 
$– Jeg må hjem og rydde på rommet mitt. 
$Det er veldig morsomt.  
$Dere burde prøve en gang!
¶$– Ikke tull, da, sa Jenny 
$og hoppet etter Katt og Hen ned i hullet. 
$Samir ville ikke være alene og løp etter. 
$Ned i hullet. 
$Ned i mørket.

#¶$Samir falt. 
$Nedover og nedover. 
$Enda lenger ned. 
$Han kjente noe med beina. 
$– Hei, ikke stå på hodet mitt, lo Jenny. 
$De falt enda lenger. 
$Samir tenkte på en film han hadde sett. 
$Den var om Alice i Wonderland. 
$Alice var ei jente som falt ned i et hull i jorda. 
$Der var det en rar verden.
¶$Så var de nede. 
$Hen holdt fingeren foran munnen. 
$Hen hadde fire briller i handa. 
$Samir hadde ikke sett sånne før. 
$Han fikk en. 
$Det var ikke brilleglass. 
$De så ut som to store stjerner. 
$Var det kameraer? 
$Det lyste blått lys ut av dem. 
$– Marken merker ikke det blå lyset, sa Hen.
¶$Samir snudde hodet hit og dit og lyste. 
$De var nede i en tunnel som gikk bortover. 
$Der lå den store meitemarken og spiste løv. 
$Men så rart! 
$Samir så inn i meitemarken! 
$Han så tvers gjennom huden! 
$– Jeg ser inn i marken, hvisket Samir. 
$– Jeg ser inn i marken!

#¶$– Jeg vil se inni Samir! 
$lo Jenny. 
$– I dag kan vi bare se inn i meitemark, sa Hen.
¶$Samir lyste. 
$– Er det tau og kuler og pølser inni marken? 
$spurte han.
¶$– Nei, nei, sa Hen. 
$– Se, marken har munn. 
$Den har ikke tenner. 
$Den kan ikke tygge med munnen. 
$Den svelger maten.
¶$– Jeg ser ei tjukk pølse rett etter munnen, sa Samir.
¶$– Det er svelget, sa Hen. 
$– Marken spiser mye og svelget blir fullt av mat. 
$Så går den videre gjennom spiserøret.
¶$– Jeg ser ei tjukk pølse til, sa Samir.
¶$– Den første er en kro, sa Hen. 
$Det er den første magen. 
$Nå er den full av mat. 
$Der blir maten bløt.
¶$– Den andre magen rører på seg! 
$sa Samir. 
$– Er det noen der inne?

#¶$– Nei, det er tygge
$– magen som klemmer. 
$Den heter en krås. 
$Det er den tredje pølsa. 
$Tygge-magen har sterke muskler. 
$Den knuser maten. 
$Det er litt sand der også. 
$Maten blir suppe. 
$Suppa går videre i tarmen.
¶$– Tygge-mage! 
$tenkte Samir. 
$– Smart å ha når du ikke har tenner!
¶$– Fugler har heller ikke tenner, sa Jenny.
¶$– Det er sant. 
$Men de har kro og krås!
¶$– Meitemark og gås – kro og krås, sa Jenny.
¶$Jenny lyste. 
$– Hva er de fem ringene der? 
$spurte hun.
¶$– Det er fem hjerter, sa Hen. 
$– De ser ut som fem ringer.
¶$– Har den nese? 
$Puster den? 
$Har den lunger til å ha luft i?
¶$– Nei, den har ikke nese, 
$kan ikke puste, har ikke lunger. 
$Men den må ha oksygen som vi. 
$Oksygen er i lufta og i vannet.
¶$– Er den en fisk?
¶$– Nei, den har mange små hull i huden. 
$I vannet er det oksygen. 
$Oksygenet i vannet går inn i huden 
$gjennom de små hullene. 
$Blodet tar oksygenet med seg til kroppen.
¶$– Da liker den vann, da?
¶$– Ja, den må ha det fuktig. 
$Den dør når det er tørt.

#¶$– Bor det meitemark i ørkenen?
¶$– Gjett! 
$sa Hen.
¶$– Jeg gjetter nei, sa Jenny. 
$– Hva er den ballen der, sa hun. 
$Hun lyste med brillene på en lys klump.
¶$– Det er hjernen. 
$Marken har hjerne og nerver. 
$Den kan kjenne varmt og kaldt, 
$og lys og mørke og lukt. 
$Og den kan kjenne god mat. 
$Den merker at jorda rister litt når det kommer noen. 
$Den trekker seg fort sammen, 
$kryper vekk og gjemmer seg.
¶$– Hvorfor er den stripete, spurte Samir.
¶$– Du ser mange ledd. 
$Marken kan strekke ut noen ledd. 
$Den kan klemme sammen noen ledd. 
$Du ser det når marken kryper bortover. 
$Tjukk, tynn, tjukk, tynn.
¶$– Har den ikke bein?
¶$– Nei, den har børster. 
$Den har åtte børster på hvert ledd. 
$Den holder seg fast med børstene. 
$Den er en børstemark. 
$Hvis det kommer en fugl og tar den i nebbet, 
$kan marken holde seg fast i gangen sin. 
$Den har sterke muskler. 
$Noen ganger er fuglen sterkest.
¶$– Er alle meitemarker like inni? 
$lurte Jenny på.
¶$– Ja.
¶$– Liker de den samme maten?
¶$– Nei. 
$Denne marken liker best visne blader fra trærne, 
$litt røtter og vissent gress som ligger på bakken. 
$Den drar maten ned i gangen sin og spiser den der. 
$Denne marken heter stor-meitemark. 
$Andre meitemark liker best å spise jord. 
$De spiser seg bortover. 
$Det gjør grå-meitemarken.

#¶$Samir så seg omkring.
¶$– Har denne marken bare én gang?
¶$– Ja. 
$En gang langt nedover. 
$Den kan bli tre meter dyp. 
$Den gnir veggene inn med spytt og bæsj. 
$Da blir de harde. 
$De kan vare i mange år. 
$De blir ikke ødelagt så fort. 
$12 år er helt vanlig. 
$Kanskje marken lever i åtte år. 
$Så dør den. 
$Da kan en annen mark bo der. 
$Noen ganger er 30 år gamle!
¶$Den lager et hvile-rom nederst. 
$Den sover som en bjørn i et hi. 
$Før den sovner, tar den et løv-blad på bakken 
$og tetter inngangen med det. 
$Den ligger i dvale om vinteren. 
$Vi er i hvilerommet nå.
¶$Samir lyste på noe som liknet på en liten ballong.
¶$– Der ligger eggene, sa Hen. 
$– To mark kan legge seg ved siden av hverandre 
$og gi sperm til hverandre. 
$Begge to har sperm. 
$Begge to har egg. 
$Sperm blander seg med egg. 
$Da kan det bli nye små meitemark.

#¶$– Det rosa beltet, da? 
$spurte Jenny og pekte på marken.
¶$– Det rosa beltet lager en pose som eggene kan være i, sa Hen. 
$– Posen heter en kokong. 
$Marken tar av seg posen. 
$Etter noen uker kommer små mark ut. 
$Stormeitemarken som vi ser nå, 
$parer seg i gangene nede i bakken. 
$Da ligger kokongene i jorda.
¶$Jenny lente seg fram. 
$Hun ville se nøyere på det rosa beltet. 
$Da falt hun. 
$Det var skolissa som hadde løsnet. 
$Hun tråkka på den. 
$Hun falt oppå marken. 
$Hun mista stjerne-kamera-brillene med det blå lyset. 
$– Det blå lyset mitt! 
$ropte Jenny. 
$– Hysj! 
$ropte Samir høyt. 
$Han måtte jo rope høyt når Jenny ropte så høyt. 
$– Hysj!
¶$Marken skvatt, trakk seg sammen, 
$strekte seg ut og krøp i full fart oppover i gangen sin og ble borte. 
$Helt vekk. 
$Hen, Jenny, Samir og Katt klatra etter. 
$Det var vanskelig. 
$Det var litt glatt. 
$Det var bratt. 
$Men gangen raste ikke sammen over dem. 
$Veggene var sterke. 
$Samir vart glad for at han ikke var bakerst. 
$Katt var bak han.

#¶$De kom opp. 
$De så stjernene på himmelen. 
$På gresset sto et stort dyr med pigger. 
$Et dyr som liker kjøtt. 
$– Så stor som en elefant! 
$hvisket Samir. 
$– Det er vi som er små, hvisket Jenny. 
$De ble ikke spist. 
$For piggsvinet spiste noe annet. 
$Noe annet som den likte veldig, veldig godt. 
$Du gjetter det kanskje? 
$Du gjetter at det var langt og brunt?
¶$– Bli stor! 
$sa Hen. 
$De ble store. 
$Hen fikk stjerne-kamera-brillene med blått lys. 
$Tre stykker. 
$Jenny sine lå igjen i hvilerommet til marken. 
$– Tenk om noen finner dem, sa Samir.  
$– En gang noen graver i jorda og sår frø.
¶$Kanskje en ny Lumbricus terrestris tar dem på seg, sa Jenny. 
$– Og kommer til deg om natta og lyser på tarmene dine!
¶$– Nei, nei, sa Samir. 
$– På rommet mitt er det alltid veldig, veldig tørt! 
$Nå går vi hjem.
¶$Og det gjorde de. 
$Piggsvinet tygde hjerter, 
$kro og krås og hadde det fint lenge.`
,
`#¶$Frø-hopping om høsten når noen forbereder seg

#¶$Jenny, Samir, Hen og Katt satt inne i glasskula. 
$Romskipet, egentlig. 
$Glasskula satt fint fast mellom to greiner, 
$høyt oppe i et stort bjørketre. 
$Det blåste. 
$Løvet dasket på dem.
¶$– Høsten er begynt, sa Jenny 
$og pekte på noen gule blader.
¶$– Skal vi fly, spurte Hen. 
$– Været er perfekt!
¶$Ja, det ville selvfølgelig Jenny og Samir. 
$De åpna døra og gikk ut på greina.
¶$Ta hverandre i hendene, sa Hen. 
$– Jeg teller til tre, og vi hopper. 
$En – to – tre!
¶$De hoppet. 
$De landet på noe stort og rosa. 
$– Jeg står på en rosa banan! 
$ropte Jenny. 
$– Det går ikke!
¶$– Det er ikke bananer. 
$Det er de lange knoppene på en blomst, sa Hen.
¶$– Men knopper om høsten, er ikke det rart?
¶$– Følg etter meg, sa Hen.

#¶$De klatrer nedover.
¶$– Her er det rosa blomster! 
$ropte Samir. 
$– Nå er vi kommet til sommeren!
¶$– Nedover, nedover! 
$ropte Hen.
¶$De kom til noen belger. 
$– Er det sukker-erter, spurte Jenny.
¶$– Nei, det er belger eller kapsler med små, svarte frø.
¶$– Nå er vi hos høsten, lo Samir. 
$– Hva heter denne blomsten?
¶$– Den heter geitrams. 
$Vi går lenger ned!
¶$– Kapslene sprekker! 
$Det kommer ut fjær! 
$ropte Jenny.

#¶$De så at kapslene åpna seg foran øynene på dem. 
$Ut velta det hvite fjær, nei ull, nei silke, hår! 
$Vinden tok tak, og ut fløy et lite svart frø med hvite fjær! 
$Mange! 
$Ei sky!
¶$– Det er dem vi skal fly på! 
$ropte Hen. 
$– Når jeg teller til tre, hopper dere ut på et frø. 
$Hold dere fast i de hvite hårene. 
$En – to – tre!
¶$Jenny kastet seg fram, tok tak i noen av hårene 
$som Hen hadde sagt, 
$holdt seg fast og fikk satt seg ned på frøet. 
$Med et rykk ble hun løftet opp i luften. 
$Det gikk så fort! 
$Hun holdt på å falle av! 
$Men hvor var Samir? 
$Der kom han fykende. 
$Han holdt seg hardt fast i de hvite hårene. 
$– Vi flyr! 
$ropte Samir. 
$– Jeg er en fugl, ropte Jenny.

#¶$Vinden tok tak i silkehårene og blåste dem av sted. 
$Nedover, oppover, enda høyere.
¶$– Vi flyr til Marokko! 
$ropte Samir. 
$– Til Polen! 
$ropte Jenny. 
$– England – eller Svalbard! 
$ropte Samir. 
$– Nei, Irak og Kina og Amerika!
¶$Da så de Katt. 
$Katt satt ikke. 
$Katt holdt seg fast i frøet 
$og hang etter som et flagg. 
$Katt svingte flott hit og dit 
$og smilte et stort kattesmil. 
$– Katt er akrobat på sirkus! 
$ropte Samir. 
$Hen så på Katt og ropte: 
$– Katt er en mester til å fly. 
$Katt liker å fly over ørken og hav, 
$over berg og dype daler. 
$På vår planet er det mange som gjør det.
¶$– Uten et fly å sitte inni?
¶$– Ja

#¶$Jenny kjente at vinden bar henne. 
$Den dytta henne videre oppover mot et tre med røde bær. 
$Sola skinte på dem, de var så blanke og pene. 
$Da så hun et hode. 
$Det var stort. 
$Det hadde nebb. 
$Hun så det var en trost. 
$– Hva spiser trost? 
$ropte hun. 
$– Bær, ropte Samir. 
$– Og meitemark, ropte Hen. 
$– Er ikke det kjøtt? 
$spurte Jenny. 
$– Jo, proteiner, sa Hen. 
$– Og vi er kjøtt! 
$sa Jenny. 
$– Og veldig små, ropte Samir. 
$– Jeg håper ikke vi setter oss fast i det treet!
¶$Ta tak i hårene på frøet og bøy dem til høyre! 
$ropte Hen. 
$– Sving vekk!
¶$Jenny så ned. 
$Det var langt til bakken. 
$Hun dro i de hvite hårene alt hun kunne. 
$Til høyre. 
$Kanskje hun klarte å svinge unna kvistene på treet. 
$Hun så at Samir gjorde det samme. 
$Svingte vekk. 
$Hen også.

#¶$Det gikk! 
$De kom til å fly forbi!
¶$Da kom det et sus. 
$En sterk vind tok tak i dem. 
$Jennys frø ble blåst bort til en kvist. 
$Der surra hårene seg fast, og der satt Jenny også fast. 
$Hodet til trosten var mye større enn hele henne! 
$Hun så Samir, 
$han forsøkte av alle krefter å svinge vekk, 
$men det gikk ikke. 
$Han også satte seg fast i treet.
¶$Trosten så interessert på dem.
¶$Da kom noe oransje fykende. 
$Det fløy som en liten rakett rundt hodet til fuglen, 
$rundt og rundt, foran og bak, 
$opp og ned, rundt igjen. 
$Trosten forsøkte å følge det rare oransje insektet med øynene, men nei. 
$Det gikk for fort. 
$Den ble redd og fløy.

#¶$Jenny og Samir gikk av frøet og ut på greinene. 
$Det var som å gå på fine bruer. 
$Hen kom også. 
$Så kom den oransje raketten susende. 
$Du skjønner vel hva det var. 
$Ja, det var selvfølgelig Katt. 
$Katt hadde med en stor, rød melon.   
$Melon? 
$sa Samir. 
$– Nei, rognebær, sa Hen. 
$– Sett dere rundt den, så smaker vi! 
$De satte seg. 
$Samir beit av et stykke og tygde. 
$– Surt! 
$ropte han. 
$– Men godt. 
$En fin dag. 
$Jeg ble ikke spist. 
$Er troster slemme?
¶$– Ikke slemme, sa Hen. 
$Den er bare sulten. 
$Og så forbereder den seg.
¶$– Forbereder seg?
¶$– Ja, jeg så at det var en ungdom. 
$En troste-ungdom. 
$Den må spise mye for å vokse og bli sterk. 
$Den skal snart fly veldig langt, 
$kanskje til Spania.. 
$Det er ikke noe mat for den her i Norge om vinteren. 
$Ikke bær, ikke meitemark. 
$Så den forbereder seg.
¶$– Hva betyr egentlig å forberede seg? 
$Jenny tenkte på det.

#¶$– Det er å gjøre noe smart, 
$så ikke noe dårlig skjer.
¶$– Noe smart før det skjer?
¶$– Ja, sånn som at dere tar på dere sko 
$når det er kaldt ute. 
$Dere forbereder dere på å gå ut i kulda. 
$Dere vil ikke fryse på føttene, 
$ikke sant, enda det er kaldt?
¶$– OK, sa Samir.  
$– Da skjønner jeg litt av hvert. 
$Blomstene forbereder seg til vinteren. 
$De gjør noe smart før det skjer noe dårlig. 
$De veit at de skal visne og dø, 
$men de har laget frø som lever videre til vinteren er slutt!
¶$– Smart! 
$sa Jenny.
¶$– Alt i naturen i Norge forbereder seg til vinteren, sa Hen.   
$Insekter, dyr, fugler, blomster, trær …
¶$– Og mennesker, sa Samir.  
$– Vi tar på oss sko!
¶$– Skal vi hoppe på et nytt frø? 
$Det flyr så mange forbi her, sa Jenny.
¶$Katt sto klar alt.
¶$– Vent, det er noe jeg lurer på, sa Samir.  
$– Er et frø begynnelsen eller slutten?
¶$– Det kommer i hvert fall forbi her, 
$fordi noen forbereder seg, sa Jenny.
¶$– Er dere klare til å fly? 
$sa Hen. 
$– En, to, tre, hopp!`
,
`#¶$Jenny og Samir høster og lager hagefest

#¶$Jenny og Samir har en liten hage. 
$Nå er det høst. 
$Om våren hadde de sådd sukkererter og bønner 
$som de plukker nå, og gulrøtter som de graver opp.
¶$– Nå har vi i hvert fall høsta det vi sådde, sa Samir.
¶$– Der sa du det!
¶$– Hva da?
¶$– Du sa at vi har høsta det vi har sådd!
¶$– Det heter jo det. 
$Å ta opp gulrøtter og poteter og kål og plukke bønner 
$og sukkererter og skjære kornet. 
$Da høster vi.
¶$– Men da er det jo derfor høsten heter høst! 
$Det har jeg ikke tenkt på før, 
$men det må jo være derfor!
¶$Jenny så på bøtta med gulrøtter, 
$hvite bønner og grønne sukkererter. 
$– Er det ikke litt for mye for oss?

#¶$– Vi kan lage hagefest!
¶$– Vi kan lage verdens beste høst-suppe!
¶$– Hva skal vi ha oppi? 
$Vi må forberede oss!
¶$– Vi trenger en kjele og vann, 
$og vi kan skjære opp gulrøtter.
¶$– Og de hvite bønnene.
¶$– Og vi kan strø sukkererter på toppen da blir det enda penere. 
$Og bedre!
¶$De fikk låne det de trengte hjemme.
¶$– Hvem skal vi be?
¶$– Vi kan be de tre nye naboene våre! 
$sa Jenny. 
$– Dem kjenner vi jo ikke.
¶$– Og gamle Hansen, sa Samir. 
$– Han forteller så mange morsomme historier bestandig.
¶$– Og hvis det blir mer igjen, kan vi be klassen vår, sa Jenny.

#¶$Hen var borte ved romskipet og skrudde på ting. 
$Hen hørte visst hva de sa, for da kom det: 
$– Det vokser jo mer som kan spises her.
¶$– Her? 
$Vi har ikke sådd mer enn dette.
¶$– Men det er noe her fra før, sa Hen. 
$Det kan være blader fra brennesle og bjørk, det er gode saker. 
$Og blomster og blader fra geitrams. 
$Kanskje dere finner blåbær og rognebær. 
$Og bladene til løvetann? 
$Men ikke for mange, de er litt beske om høsten.
¶$– Og vi kan be gjestene ta med litt hver, sa Jenny.
¶$Så gikk de til de tre nye naboene 
$og gamle Hansen, og de sa ifra til klassen.

#¶$De første gjestene var de tre nye naboene. 
$Ei mor, en far og ei jente. 
$De hadde med seg en pose med ris 
$og tre løk som de la i suppa. 
$De forsto ikke mye norsk ennå. 
$Det var sannelig bra at Hen kunne forstå 
$og snakke alle språk. 
$Hen satte seg sammen med dem, de prata og fortalte og lo alle fire.
¶$Samir stakk ei skje ned i suppa og smakte. 
$– Det smaker grønt, sa han. 
$– Grønt er fint, sa Jenny. 
$– Vi får sikkert noen ringblomster av den andre naboen 
$som vi kan klippe opp og strø på suppa til slutt. 
$Det blir fint og oransje. 
$Perfekt. 
$Snart ferdig.

#¶$– Hallo og god dag, hørte de en stemme. 
$Det var gamle Hansen. 
$Han hadde vært sjømann hele livet.
¶$Han hadde med seg en hermetikkboks. 
$– Vær så god, sa han. 
$– Jeg ser dere har en katt her. 
$Her er noe godt dere kan ha oppi suppa. 
$– Tusen takk, sa Jenny og Samir. 
$De så på boksen. 
$Det var et bilde av en katt utenpå. 
$– Deilig kjøtt, sa gamle Hansen. 
$– Noe som alle kan like.
¶$Så gikk han for å sette seg sammen med de andre fire. 
$– Skip ohoi!
¶$– Kattemat? 
$sa Samir.
¶$– Vi kan ikke ha den i suppa, sa Jenny. 
$Vi veit ikke hva den er laget av. 
$Vi kan spørre om Katt vil ha den.
¶$De åpna boksen og satte den foran Katt. 
$Katt så ikke på den. 
$Katt gravde et hull i bakken.
¶$De hørte stemmen til Gamle Hansen lang vei. 
$De hørte at Hen oversatte for de tre nye naboene. 
$Naboene lo.

#¶$– Jeg seilte på de sju hav! 
$ropte gamle Hansen fornøyd. 
$– Med bananer og kokosnøtter. 
$Alle steder måtte vi bære sekker og kasser ut av båten, 
$og så måtte vi bære sekker og kasser inn i båten. 
$Bare se på ryggen min. 
$Helt bøyd. 
$En gang vi var midt ute i Stillehavet, kom det en fryktelig storm. 
$Bølgene gikk så høyt som skyskraperne i Jemen. 
$Båten balanserte. 
$Opp og ned. 
$Opp og ned. 
$Kapteinen sto til rors, 
$og vi som var sjømenn og sjødamer 
$tok alle bøttene og tømte vannet ut av båten. 
$Vi holdt på dag etter dag. 
$Og natt etter natt.

#¶$– Hvor lenge varte stormen?
¶$– I to måneder.
¶$– Men maten, spurte Jenny.
¶$– Vi hadde kålrot.
¶$– Kålrot?
¶$– Ja, kålrot. 
$Det er ei rot med C-vitaminer 
$som er rund og som vokser i jorda. 
$Du kan så kålrotfrø. 
$Vi spiste kålrot, 
$men så var det ikke mer igjen.
¶$– Hva gjorde dere da? 
$spurte Samir.
¶$– Da spiste vi mus. 
$Alle båter har mus. 
$Det er kjøtt, sa gamle Hansen. 
$– Proteiner. 
$Da kunne vi leve helt til stormen la seg. 
$Da vi kom til land, drakk vi vannet i kokosnøtter en hel dag. 
$Vi gravde opp sikkert to hundre kokosnøtter.
¶$Moren begynte å le. 
$Hun sa noe.
¶$– Hun sier at du er veldig morsom, Hansen, sa Hen.
¶$Gamle Hansen smilte stolt.
¶$– Kokosnøtter vokser på høye palmer, 
$hvisket Jenny, de vokser ikke nede i bakken. 
$– Er det suppe snart, sa gamle Hansen.
¶$– Suppa er ferdig! 
$Kom og hent! 
$ropte Samir.

#¶$Alle tok en tallerken og ei skje 
$og helte opp suppe med den store øsa.
¶$– Det lukter godt, sa moren.
¶$– Veldig godt, sa faren.
¶$– Jeg er sulten, sa jenta. 
$– Hva er det vi spiser?
¶$– Naturens egen suppe, sa Jenny.
¶$De gikk bort til stolene. 
$Det var plass på gresset også.  
$Suppa var så pen med de gule gulrøttene, 
$den hvite risen, de hvite potetene og de hvite bønnene, 
$de grønne bladene fra brennesle og løvetann, 
$den lyse løken, de blå blåbærene, de røde rognebærene 
$og på toppen lå de grønne, knasende sukkerertene 
$og de oransje ringblomstene.
¶$– Ei vakker suppe, sa moren.

#¶$– Deilige sukkererter, sa jenta
¶$– Blåbær har jeg ikke smakt før, sa faren.
¶$Da kom Katt bort til dem. 
$Katt hadde armene fulle av noe de kjente igjen. 
$Noe godt. 
$Noe med skall. 
$Katt la en haug på bakken foran dem og tok en. 
$Knuste skallet. 
$Inni var det to nøtter.
¶$– Peanuts! 
$ropte jenta.
¶$– Peanøtter, sa Jenny overraska. 
$– Har du sådd?  
$– Høsta, sa Samir.
¶$Katt smilte og ga dem flere peanøtter.
¶$Et ekorn løp forbi dem og klatra fort opp i epletreet.
¶$– Vi spiste ekorn også, sa gamle Hansen. 
$– Med hår og alt. 
$Halen kunne være litt tørr. 
$Men god. 
$Vil dere ha?
¶$Hva tror du de andre svarte på det?`
,
`#¶$Da Jenny og Samir ville bli med gjessene til Afrika

#¶$Jenny, Samir, Hen og Katt er ute i hagen. 
$Det er blitt kaldere, særlig om natta. 
$Det er is på dammen. 
$Det er høst. 
$Vinteren nærmer seg.
¶$Jenny er ikke glad. 
$– Jeg synes det er trist om høsten. 
$Sommerfugler og humler blir borte. 
$Blomster visner. 
$Bladene faller av trærne. 
$Alt dør! 
$Alt er slutt!
¶$– Er det sant? 
$sa Hen. 
$– Det må vi undersøke!
¶$– Min hypotese er at vi bare finner ei mus som skal fryse til is, sa Samir.
¶$– Det er best at vi er små når vi undersøker, sa Hen. 
$– Da kommer vi nærmere. 
$Bli små!

#¶$Alle tre ble små, men ikke Katt. 
$Katt studerte is og fisk. 
$De dyttet gresset til side og gikk sakte.
¶$Jenny stoppet – Se! 
$Humle! 
$Den er død! 
$Hva var det jeg sa!
¶$– Men kan humler finne blomstersaft om vinteren, spurte Hen.
¶$– Nei, det er jo maten deres, sa Jenny.
¶$– Hva har denne humla gjort i sommer, spurte Hen.
¶$– Flydd til mange tusen blomster og tatt med blomsterstøv, vel. 
$Det visste Jenny.
¶$– Ja, og hun har gitt mat til hundrevis av nye, små humler, sa Samir. 
$– Og hun har passa på dronninga. 
$Og dronninga har laget nye dronninger.

#¶$– Og hvor er dronningene nå?
¶$– De har gjemt seg og ligger og sover!
¶$– Og hva har de i magen?
¶$– Eggceller og spermceller!
¶$– Og hva kan de gjøre når de våkner om våren?
¶$– De kan legge egg og lage nye humler!
¶$– Så hva har alt arbeidet til denne døde humla ført til?
¶$– At humler lever videre, enda det blir vinter og ikke noe mat, ropte Samir.
¶$– OK, humler, men alt det andre dør, sa Jenny.
¶$– Er det sånn at høsten og vinteren gjemmer våren, spurte Samir.
¶$– Det kan du godt si, sa Hen. 
$– Det er for at naturen ikke skal fryse i stykker om vinteren
¶$– Men hvordan er naturen blitt så smart, lurte Jenny på.

#¶$– Det er det som er utvikling, sa Hen. 
$– Evolusjon er et annet navn. 
$Sakte, sakte, sakte, i millioner av år, har det vært noen insekter som har klart seg der det er kaldt, som hos dere i Norge. 
$Kanskje de har hatt litt mer pels, kanskje de har ligget nedi bakken og ikke frosset i hjel, mens mange andre har dødd. 
$Da får de som lever, nye barn. 
$De som lever, har kanskje fått litt smartere kropper, og så får de flere barn. 
$Så langt om lenge og lenger enn langt, i tusen år og millioner år, blir det sakte noen insekter og noen dyr som klarer seg i det kalde landet. 
$Det er evolusjon. 
$Utvikling.

#¶$– Ja, en V! 
$Fuglene lager en bokstav! 
$Det er V! 
$V for Vår!
¶$– Se! 
$De bytter plass, sa Jenny. 
$– Hører du hvordan de roper og snakker sammen! 
$Jeg tror jeg skjønner det! 
$«Jeg er sliten! 
$Bytt plass!»
¶$– Hen gikk bort til dammen, der Katt lå på isen og studerte en fisk.
¶$Fuglene fløy ned mot bakken bak huset. 
$Jenny og Samir gikk forsiktig bort dit. 
$Gåseflokken gikk og spiste gress. 
$– De spiser før de flyr videre, hvisket Samir. 
$– Vi er små, vi går nærmere!

#¶$– De skal sikkert til varmere land for å finne mat når det er vinter her, sa Jenny. 
$– Kanskje de kan ta med noen trær!
¶$– Tuller du, sa Samir.
¶$– Nei, jeg tuller ikke. 
$Vi kan gi dem et frø fra bjørka, og hvis det spirer og blir et tre i Afrika, så får det mange tusen frø, og de kan bli mange trær.
¶$– Vi finner mer, sa Samir. 
$– Vi gir dem en bukett med blomster! 
$Jeg mener frø fra blomster!
¶$De løp rundt og fant mange frø. 
$De bar frø bort til fuglene, fram og tilbake, og ingen så dem. 
$Nå var haugen med frø stor. 
$Jenny listet seg bort til ei gås. 
$Den bøyde seg ned for å nappe gress. 
$Jenny tok et frø og klarte å putte det innimellom fjærene på vingen til gåsa. 
$Hun tok et til og et til. 
$– Ta med trær, tenkte hun. 
$– Ta med blomster.

#¶$Ei gås kom og spiste av haugen med frø. 
$Ei gås til gjorde det samme.
¶$– Dette blir fint, sa Samir. 
$– De kommer til å bæsje bjørk og selje og epletrær og geitrams og løvetann og hvitveis hele veien til Nord-Afrika og Iran!
¶$– Nei, det gjør de ikke.
¶$– Jo, de gjør de. 
$Egentlig, så.
¶$Jenny ble plutselig i godt humør. 
$– Vi blir med!
¶$– Tuller du?
¶$– Nei, tenkt så gøy, vi kan bare gjemme oss i fjærene til gåsa! 
$Der er det varmt og godt, det har jeg lest!

#¶$De listet seg bort til den nærmeste gåsa som fortsatt spiste gress og frø. 
$Den kunne ikke se dem. 
$– Vi klatrer oppover beina, sa Jenny. 
$– Kom!
¶$Da hørte de Hen. 
$– Jenny! 
$Samir! 
$Bli store!
¶$De ble store. 
$Fuglene skreik høyt, flakset med de store vingene og lettet og fløy vekk.
¶$Hen var også blitt stor. 
$Hen kom bort til dem: 
$– Jeg skjønner at det var fristende å bli med gjessene. 
$Men det hadde vært farlig for dere. 
$Det går an å falle av når vinden blåser. 
$Det kan hende noen ikke klarer å fly så langt, de faller ned i havet. 
$Så jeg måtte stoppe dere.
¶$– Ok, sa Jenny. 
$– Ok, sa Samir.

#¶$Hen snudde seg og gikk tilbake til Katt. 
$– Det var kanskje bra at Hen stoppa oss, sa Samir. 
$– Kanskje Hen redda livet vårt, sa Jenny. 
$– Vi må takke. 
$Hen kan få blomster.
¶$– Det er ingen blomster, sa Samir. 
$– De er visne.
¶$– Men ikke døde for bestandig, sa Jenny. 
$– Vi plukker!
¶$Noen minutter etter kom de til bort til Hen. 
$– Takk for at du stoppa oss, sa Jenny. 
$– Vær så god, her er det blomster til deg! 
$sa Samir. 
$I handa hadde han mange frø. 
$Jenny også.
¶$– Tusen takk, sa Hen. 
$– Frø er det aller fineste.

#¶$– Akkurat dalte ei fjær ned fra lufta. 
$Den landet ved siden den døde humla. 
$Den var hvit og grå og blank og pen. 
$Jenny plukket den opp. 
$Fjæra var litt bøyd som en båt. 
$Hun tenkte litt. 
$Hun sa: 
$– Hen, kan du ikke gjøre oss små igjen? 
$– Jo, sa Hen. 
$Fjæra lå på bakken. 
$Jenny og Samir klatret oppi og la seg. 
$Koselig, mumlet Samir. 
$– Min hypotese var visst feil. 
$Ingen døde mus. 
$Han sov. 
$– Min også, hvisket Jenny. 
$– Alt lever. 
$På en eller annen måte.`
,
`#¶$Avskjedsgaven

#¶$Det ble tidligere mørkt om kveldene. 
$Det nærmet seg vinter. 
$Jenny og Samir står ute og ser opp på den mørke, blå himmelen. 
$Den er full av stjerner. 
$Hen og Katt er der også.

#¶$– Et sted der oppe er Proxima Centauri, sa Jenny.
¶$– Den røde sola, sa Samir.
¶$– Vi kan ikke se den herfra, sa Hen. 
$– Den er for langt unna. 
$Men jeg må si dere noe. 
$Katt og jeg må reise hjem. 
$Vi må si farvel.
¶$– Nei, ikke reis! 
$Vi har ikke kjørt med kula inne i fisk og ikke i fugl!
¶$– Ikke i mennesker eller maur eller potetblomster heller, sa Jenny. 
$Dere kan sikkert bo hos oss!
¶$– Tusen takk, men dere trenger ikke reise inn i fisk og potetblomst. 
$Dere veit det viktigste allerede.
¶$– Hva mener du? 
$sa Samir.
¶$– Ja, og hvorfor kom dere hit, sa Jenny. 
$– Dere skulle fortelle seinere. 
$Og nå er det blitt seinere.

#¶$– Vi skal fortelle, sa Hen. 
$– Men kanskje vi skal ta en siste tur med romskipet? 
$For å se på stjernene på himmelen og på jorda?
¶$De gikk inn i glasskula og satte seg. 
$Katt trykte på knappene i beltet sitt, og de steg til værs mot den mørke himmelen og stjernene.
¶$Under seg så de lysene fra alle vinduene. 
$Mellom husene gikk det veier, og veiene hadde lamper som lyste. 
$Både stjernene og lysene blinket litt.

#¶$– Det er fint å se på, sa Samir. 
$– Så mange mennesker!
¶$– Ja, sa Hen. 
$– Mange mennesker som vil ha det bra. 
$De fleste vil gjøre gode og kloke ting hvis de kan. 
$Hvis de får lov. 
$Det er derfor vi kom hit.
¶$– Hva mener du? 
$Reiste dere så langt for å treffe snille? 
$Er det så mange slemme hos dere, spurte Jenny.
¶$– Nei, nei. 
$Dette handler om planeten vår. 
$Mo-lo. 
$Den får lys fra ei sol som skinner med rødt lys. 
$Sola er gammel. 
$De fleste planetene i verdensrommet har slike gamle soler. 
$Vår sol har brent lenge. 
$Derfor skinner den rødt. 
$Det som lever på planeten vår, er ikke likt det som lever på planeten deres. 
$På vår planet er alle opptatt av det som lever. 
$Vi passer på det. 
$Men hvor lenge går det? 
$Vi reiser til andre planeter, fordi vi lurer på: 
$Er det vann der? 
$Hvor varmt er det? 
$Hvor kaldt? 
$Hva lever der? 
$Er det planter? 
$Er det insekter og dyr? 
$Går noen på to bein? 
$Eller seks? 
$Er det stein og jord? 
$Vi ser også i de store teleskopene våre. 
$Slik så vi dere.

#¶$– Har dere visst noe om oss, spurte Samir.
¶$– Ja, vi har fulgt med på planeten jorda. 
$Vi har sterke apparater som vi kan se jorda med. 
$Vi har sett at dere har alt. 
$Vann, jord, stein, dyr, insekter, mennesker, fugler – alt. 
$Og den er veldig vakker. 
$Vi har lurt på: 
$Er det noen mennesker på planeten jorda som forstår hvor fin den er? 
$Som blir glade og begeistret og vil vite mer? 
$Vi så at dere to, Jenny og Samir, forstår. 
$Vi kom til dere.

#¶$– Forstår? 
$spurte Samir og Jenny i munnen på hverandre. 
$– Forstår hva da?
¶$– Ja, som forstår hvordan alt er nødvendig og alt har en oppgave. 
$Og nå har dere sett mer. 
$Dere har sett hvordan en meitemark er inni. 
$Dere forstår hvordan den spiser og blander jord.
¶$– Jeg hadde aldri trodd at de brune, små markene har lagd jorda på jorda, sa Jenny.
¶$– Nettopp. 
$Det er det jeg mener, sa Hen.
¶$– Jeg visste ikke at humlene og biene gjør sånn at vi får epler og tomater og blomster, sa Samir.
¶$– Og jeg visste ikke at et frø er ei plante som lever videre, sa Jenny, og at frøet er både slutten og begynnelsen.
¶$– Og at frø må få lov til å spire, sa Samir.

#¶$– Alt henger sammen med alt, sa Hen. 
$– Dere forstår det. 
$Alt har en oppgave, alt betyr noe. 
$Små bakterier som Risobium kan jo til og med hjelpe erteplanter med å lage proteiner, som kroppen til mennesker og dyr må ha.
¶$– Det er jo egentlig fantastisk, sa Jenny.
¶$– Veldig morsomt å tenke på, faktisk, sa Samir.
¶$– Men jeg må jo også si, sa Hen, at sjøl om dere ikke trenger å reise sammen med Katt og meg inn i fisk og fugl og potetblomst for å forstå, så kan dere likevel lære hvordan fisk og fugl og potetblomst ser ut inni. 
$Dere finner ut hvordan.

#¶$– Nå skal vi hjem og fortelle at på jorda er det mennesker som forstår det som er viktig å forstå.
¶$– Det er ikke bare oss, sa Jenny.
¶$– Klassen vår, sa Samir.
¶$– Og mange andre, sa Jenny.
¶$– Ja, det er virkelig bra, sa Hen. 
$– Vi vil takke dere for at dere har vært så hyggelige mot oss fremmede. 
$Tusen takk.
¶$– Dere er ikke fremmede mer nå, sa Samir.

#¶$Plutselig hørte de en ukjent stemme. 
$Hvor kom lyden fra? 
$Det var Katt! 
$De hadde aldri før hørt Katt snakke.  
$– Vi takker dere, sa Katt. 
$– Dere skal få en gave.
¶$Katt holdt et skrin i hendene. 
$Det var så fint. 
$Det blinket og strålte og så ut som sølv og gull og perler og diamanter.
¶$– Dere får skrinet nå, men dere må vente med å åpne det til vi har reist.
¶$– Å! 
$Tusen takk! 
$Ååååå! 
$sa Jenny og Samir i munnen på hverandre.
¶$Katt styrte romskipet ned mot bakken. 
$De tok farvel enda en gang. 
$Det var trist, syntes Jenny. 
$Samir så heller ikke glad ut.
¶$Romskipet lettet. 
$De vinket. 
$Hen og Katt vinket. 
$Brått forsvant de opp mot himmelens soler.

#¶$Og der sto Jenny og Samir, aleine i mørket.
¶$– Vi må åpne skrinet!
¶$De løftet lokket forsiktig opp. 
$De kunne ikke se hva det var. 
$Øynene ble blendet av lys. 
$Gnister sprutet opp som små lyn og blanke stråler. 
$Hva var det? 
$Hvorfor?
¶$Det sluttet å gnistre og lyse. 
$Da så de noe rundt som lå i skrinet. 
$Ei kule? 
$Et sukkertøy? 
$Et smykke?
¶$De tok det ut. 
$Forsiktig. 
$Kjente på det og snudde på det. 
$Luktet.
¶$Jenny så på Samir. 
$Samir så på Jenny. 
$Det datt ut av dem, – samtidig:
¶$– FRØ?

#¶$Slutt`
);
}

window.addEventListener('load',sourceloader, false);
