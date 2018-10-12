function init() {
    //  a little bit of browser sniffing
    if (!window.navigator.userAgent.match(/\bMSIE\b/)) {
        //	Only IE returns a file path we can load into the video element and then only when we're running locally on the intranet zone
        $(".browseForVideoFile").css("display", "none");
    } else {
        if (location.hostname.indexOf(".") != -1) {
            //	IE only returns a file path we can load into the video element when we're running locally on the intranet zone
            $(".browseForVideoFile").css("display", "none");
        }

        if (typeof document.documentMode == "undefined" || document.documentMode < 9) {
            //	we can't run in IE before 9
            $("#warning").css("display", "block");
        }
    }

    //  browsing for a caption file requires FileReader
    if (typeof window.FileReader == 'undefined') {
        $(".browseForCaptionFile").css("display", "none");
    }

    //	saving caption files locally requires msSaveOrOpenBlob
    if (typeof window.navigator.msSaveOrOpenBlob == 'undefined') {
        $("#blobBuilderSave, #saveToDiskAdvice").css("display", "none");
    }

    //	copying to the clipboard requires clipboardData
    if (typeof window.clipboardData == 'undefined') {
        $("#copyToClipboard").css("display", "none");
    }

    //  this disables and grays out the demo portions except for loading a video
    function DisableDemoExceptLoadVideo() {
        $(".grayNoVideo a, .grayNoVideo button, .grayNoVideo input, .grayNoVideo textarea").prop("disabled", true);
        $(".grayNoVideo, .grayNoVideo a").css("color", "rgb(153,153,153)");
    }

    DisableDemoExceptLoadVideo();

    //  this enables the demo after a successful video load
    function EnableDemoAfterLoadVideo() {
        $(".grayNoVideo, .grayNoVideo a").removeAttr("style");
        $(".grayNoVideo a, .grayNoVideo button, .grayNoVideo input, .grayNoVideo textarea").prop("disabled", false);
        $("#pauseButton, #saveCaptionAndPlay, #justSaveCaption").prop("disabled", true); // these are still disabled
        $("#textCaptionEntry").prop("readonly", true);
    }

    //  this resets our state on a video load
    function ResetState() {
        captionsArray.length = 0;
        autoPauseAtTime = -1;

        $("#videoElm").each(function() {
            $(this).get(0).pause();
            $(this).attr("src", "");
        });

        $("#display div").remove();
        $("textarea, #ttURL, #ttFile").val("");
        $("#captionFormatNone").prop("checked", true);
        $("#textCaptionEntry").val("").prop("readonly", true).removeClass("playing");
        $("#captionTitle").html("&nbsp;");
        DisableDemoExceptLoadVideo();
    }

    ResetState();

    $("#clearAllCaptions").click(function () {
        captionsArray.length = 0;
        autoPauseAtTime = -1;
        $("#display div").remove();
        $("#captionTitle").html("&nbsp;");
        $("#textCaptionEntry").val("");
        $("#captionFormatNone").click();
    });

    //  keep track of whether we've attached an error handler to the video element
    //  we don't do this during initialization because it immediately throws an error because we have no source
    var errorHandlerBound = false;

    //  sets the video source to the URL s
    function LoadVideoSource(s) {
        console.log(s);
        ResetState();

        if (!errorHandlerBound) {
            $("#videoElm").bind("error", function(event) {
                var vh = $(this).height();

                // error handling straight from the HTML5 video spec (http://dev.w3.org/html5/spec-author-view/video.html)
                switch (event.originalEvent.target.error.code) {
                case event.originalEvent.target.error.MEDIA_ERR_ABORTED:
                    $("#videoError").text("You aborted the video playback.");
                    break;
                case event.originalEvent.target.error.MEDIA_ERR_NETWORK:
                    $("#videoError").text("A network error caused the video download to fail part-way.");
                    break;
                case event.originalEvent.target.error.MEDIA_ERR_DECODE:
                    $("#videoError").text("The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
                    break;
                case event.originalEvent.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    $("#videoError").text("The video could not be loaded, either because the server or network failed or because the format is not supported.");
                    break;
                default:
                    $("#videoError").text("An unknown error occurred.");
                    break;
                }

                $("#videoError").height(vh).css("display", "block");
                $(this).css("display", "none");
            });

            errorHandlerBound = true;
        }

        s = Trim(s);
        if (s != "") {
            $("#videoError").css("display", "none");
            $("#videoElm").css("display", "block").attr("src", s).prop("controls", true).get(0).load();
        }
    }

    //  when a video file is loaded, jack it straight to the video element as its src
    //  this is IE-specific so jQuery doesn't recognize the event with "bind"
    $("#videoFile").get(0).addEventListener("change", function () {
        $("#videoURL").val(""); // clear any value that may be in the video URL edit box
        LoadVideoSource($("#videoFile").val());
    }, false);

    $("#loadVideoFromUrl").click(function() {
        console.log('#loadVideoFromUrl clicked!');
        LoadVideoSource($("#videoURL").val());
    });

    function LoadCaptionFile(fileObject) {
        if (window.FileReader) {
            var reader = new window.FileReader();

            reader.onload = function() {
                ProcessProxyVttResponse({ status: "success", response: reader.result });
            };

            reader.onerror = function(evt) {
                alert("Error reading caption file. Code = " + evt.code);
            };

            try {
                reader.readAsText(fileObject);
            } catch(exc) {
                alert("Exception thrown reading caption file. Code = " + exc.code);
            }
        } else {
            alert("Your browser does not support FileReader.");
        }
    }

    //  this button should be disabled when window.FileReader is undefined
    //  we expect browsers that support FileReader to have a files collection on the input[type=file] control
    $("#ttFile").get(0).addEventListener("change", function() {
        var filesObject = $("#ttFile").get(0).files;
        if (filesObject && filesObject.length > 0) {
            LoadCaptionFile(filesObject[0]);
        } else {
            alert("No files collection on input[type=file] control.");
        }
    }, false);

    $("#loadCaptionFileFromUrl").click(function() {
        //	insert a script request that returns a function invocation and a simple json object
        var s = document.createElement("script");
        s.setAttribute("type", "text/javascript");
        s.setAttribute("src", "https://www.baccano.com/proxyvtt.ashx?vtt=" + $("#ttURL").val());
        document.body.appendChild(s);

        //	this would work except for the cross-domain restrictions
        //	$.ajax({
        //	url: $("#ttURL").val(),
        //	success: function (data) {
        //	ProcessProxyVttResponse({ status: "success", response: data });
        //	}
        //	});
    });

    $("#loadSampleCaptionFile").click(function() {
        $("#ttURL").val(window.location.origin + "/ieblog/2011/nov/ppb4_blog_demo_en.vtt");
        $("#loadCaptionFileFromUrl").click();
    });


    //  index into captionsArray of the caption being displayed. -1 if none.
    var captionBeingDisplayed = -1;

    function DisplayExistingCaption(seconds) {
        var ci = FindCaptionIndex(seconds);
        if (ci != captionBeingDisplayed) {
            captionBeingDisplayed = ci;
            if (ci != -1) {
                var theCaption = captionsArray[ci];
                $("#captionTitle").text("Caption for segment from " + FormatTime(theCaption.start) + " to " + FormatTime(theCaption.end) + ":");
                $("#textCaptionEntry").val(theCaption.caption);
            } else {
                $("#captionTitle").html("&nbsp;");
                $("#textCaptionEntry").val("");
            }
        }
    }

    function existingCaptionsEndTime() {
        return captionsArray.length > 0 ? captionsArray[captionsArray.length - 1].end : 0;
    }

    function videoPlayEventHandler() {
        captionBeingDisplayed = -1;
        
        //  give Opera a beat before doing this
        window.setTimeout(function() {
            $("#textCaptionEntry").val("").prop("readonly", true).addClass("playing");
            $("#pauseButton").prop("disabled", false);
            $("#playButton, #justSaveCaption, #saveCaptionAndPlay").prop("disabled", true);
        }, 16);
    }

    function videoPauseEventHandler() {
        $("#playButton, #justSaveCaption, #saveCaptionAndPlay").prop("disabled", false);
        $("#textCaptionEntry").removeClass("playing").prop("readonly", false);
        $("#pauseButton").prop("disabled", true);

        var playTime = $("#videoElm").prop("currentTime");
        var captionsEndTime = existingCaptionsEndTime();
        if (playTime - 1 < captionsEndTime) {
            var ci = FindCaptionIndex(playTime - 1);
            if (ci != -1) {
                var theCaption = captionsArray[ci];
                $("#captionTitle").text("Edit caption for segment from " + FormatTime(theCaption.start) + " to " + FormatTime(theCaption.end) + ":");
                $("#textCaptionEntry").val(theCaption.caption);
                captionBeingDisplayed = ci;
            } else {
                $("#captionTitle").text("No caption at this time code.");
                $("#textCaptionEntry").val("");
                captionBeingDisplayed = -1;
            }
        } else {
            $("#captionTitle").text("Enter caption for segment from " + FormatTime(existingCaptionsEndTime()) + " to " + FormatTime(playTime) + ":");
            $("#textCaptionEntry").val("");
            captionBeingDisplayed = -1;
        }

        $("#textCaptionEntry").focus().get(0).setSelectionRange(1000, 1000); // set focus and selection point to end
    }

    function videoTimeUpdateEventHandler() {
        var playTime = $("#videoElm").prop("currentTime");

        if (autoPauseAtTime >= 0 && playTime >= autoPauseAtTime) {
            autoPauseAtTime = -1;
            $("#videoElm").get(0).pause();
            return;
        }

        var captionsEndTime = existingCaptionsEndTime();
        if (playTime < captionsEndTime) {
            DisplayExistingCaption(playTime);
        } else {
            $("#captionTitle").text("Pause to enter caption for segment from " + FormatTime(captionsEndTime) + " to " + FormatTime(playTime) + ":");
            if (captionBeingDisplayed != -1) {
                $("#textCaptionEntry").val("");
                captionBeingDisplayed = -1;
            }
        }
    }

    //  the video element's event handlers
    $("#videoElm").bind({
        play: videoPlayEventHandler,
        timeupdate: videoTimeUpdateEventHandler,
        pause: videoPauseEventHandler,
        canplay: EnableDemoAfterLoadVideo,
        loadeddata: EnableDemoAfterLoadVideo    // opera doesn't appear to fire canplay but does fire loadeddata
    });

    $("#playButton").click(function() {
        $("#videoElm").get(0).play();
    });

    $("#pauseButton").click(function() {
        $("#videoElm").get(0).pause();
    });

    function SaveCurrentCaption() {
        var playTime = $("#videoElm").prop("currentTime");
        var captionsEndTime = existingCaptionsEndTime();
        if (playTime - 1 < captionsEndTime) {
            var ci = FindCaptionIndex(playTime - 1);
            if (ci != -1) {
                UpdateCaption(ci, $("#textCaptionEntry").val());
            }
        } else {
            AddCaption(captionsEndTime, playTime, $("#textCaptionEntry").val());
        }
    }

    $("#justSaveCaption").click(function() {
        SaveCurrentCaption();
    });

    $("#saveCaptionAndPlay").click(function() {
        SaveCurrentCaption();
        $("#videoElm").get(0).play();
    });

    function CaptionFileExtension() {
        return $("#captionFormatVTT").prop("checked") ? "vtt" : $("#captionFormatTTML").prop("checked") ? "ttml" : "";
    }

    function RefreshMarkupDisplay() {
        var videoName = $("#videoElm").attr("src");
        $("#markupVideoSrc").text(videoName.match( /[\/\\]([\w\-]+\.\w{3,4})$/ )[1]);

        var ttName = $("#ttURL").val() || ($("#ttFile").get(0).files && $("#ttFile").get(0).files.length > 0 ? ("#ttFile").get(0).files[0].name : videoName);
        $("#markupCaptionSrc").text(ttName.match( /[\/\\]([\w\-]+\.)\w{3,4}$/ )[1] + CaptionFileExtension());
    }

    $("#captionFormatTTML, #captionFormatVTT").click(function() {
        $("#captionFileAndMarkup").css("display", "block").get(0).scrollIntoView(false);
        RefreshCaptionFileDisplay();
        RefreshMarkupDisplay();
    });

    $("#captionFormatNone").click(function() {
        $("#captionFileAndMarkup").css("display", "none");
    });

    // function should never be called if window.MSBlobBuilder is undefined
    function SaveCaptionAsTextBlob(s) {
        var filename = $("#videoElm").attr("src");
        if (filename) {
            var bb = new window.MSBlobBuilder();
            bb.append(s.replace( /\r\n|\r|\n/g , "\r\n")); //	we normalize the line breaks to cr-lf for Notepad
            window.navigator.msSaveOrOpenBlob(bb.getBlob("text/plain"), filename.match( /[\/\\]([\w\-]+\.)\w{3,4}$/ )[1] + CaptionFileExtension());
        }
    }

    // button is not enabled if window.MSBlobBuilder is undefined
    $("#blobBuilderSave").click(function() {
        UpdateCaptionFileSource();
        SaveCaptionAsTextBlob($("#captionFile").val());
    });

    // button is not enabled if window.clipboardData is undefined
    $("#copyToClipboard").click(function() {
        UpdateCaptionFileSource();
        window.clipboardData.clearData("Text");
        window.clipboardData.setData("Text", $("#captionFile").val().replace( /\r\n|\r|\n/g , "\r\n")); // we normalize the line breaks to cr-lf for Notepad
    });

}

function Trim(s) {
	return s.replace(/^\s+|\s+$/g, "");
}

//	parses webvtt time string format into floating point seconds
function ParseTime(sTime) {

	//  parse time formatted as hours:mm:ss.sss where hours are optional
    if (sTime) {
        var m = sTime.match( /^\s*(\d+)?:?(\d+):([\d\.]+)\s*$/ );
        if (m != null) {
            return (m[1] ? parseFloat(m[1]) : 0) * 3600 + parseFloat(m[2]) * 60 + parseFloat(m[3]);
        } else {
            m = sTime.match(/^\s*(\d{2}):(\d{2}):(\d{2}):(\d{2})\s*$/);
            if (m != null) {
                var seconds = parseFloat(m[1]) * 3600 + parseFloat(m[2]) * 60 + parseFloat(m[3]) + parseFloat(m[4]) / 30;
                return seconds;
            }
        }
    }

    return 0;
}

//	formats floating point seconds into the webvtt time string format
function FormatTime(seconds) {
	var hh = Math.floor(seconds / (60 * 60));
	var mm = Math.floor(seconds / 60) % 60;
	var ss = seconds % 60;

	return (hh == 0 ? "" : (hh < 10 ? "0" : "") + hh.toString() + ":") + (mm < 10 ? "0" : "") + mm.toString() + ":" + (ss < 10 ? "0" : "") + ss.toFixed(3);
}

//	our state
var captionsArray = [];
var autoPauseAtTime = -1;

function FindCaptionIndexLinearSearch(seconds) {
	if (captionsArray.length < 1)
		return -1;

	//	linear search isn't optimal but it's safe
	for (var i = 0; i < captionsArray.length; ++i) {
		if (captionsArray[i].start <= seconds && seconds < captionsArray[i].end)
			return i;
	}

	return -1;
}

function FindCaptionIndex(seconds) {
    var below = -1;
    var above = captionsArray.length;
    var i = Math.floor((below + above) / 2);

    while (below < i && i < above) {

        if (captionsArray[i].start <= seconds && seconds < captionsArray[i].end)
            return i;
        
        if (seconds < captionsArray[i].start) {
            above = i;
        } else {
            below = i;
        }
        
        i = Math.floor((below + above) / 2);
    }

    return -1;
}


function PlayCaptionFromList(listRowId) {
	var captionsArrayIndex = parseInt(listRowId.match(/ci(\d+)/)[1]);

	var vid = $('#videoElm').get(0);
	// vid.pause();
	vid.currentTime = captionsArray[captionsArrayIndex].start;
	autoPauseAtTime = captionsArray[captionsArrayIndex].end;
	vid.play();
}

function DisplayVTTSource() {
	var s = "WEBVTT\r\n\r\n";

	for (var i = 0; i < captionsArray.length; ++i) {
		if (captionsArray[i].caption != "") {
			s += (FormatTime(captionsArray[i].start) + " --> " + FormatTime(captionsArray[i].end) + "\r\n");
			s += captionsArray[i].caption + "\r\n\r\n";
		}
	}

	$("#captionFile").val(s);
	$("#captionFileKind").text(".vtt");
}

function DisplayTTMLSource() {
	var s = '<?xml version="1.0" encoding="UTF-8"?>\r\n<tt xmlns="http://www.w3.org/ns/ttml" xml:lang="en" >\r\n  <body>\r\n    <div>\r\n';

	for (var i = 0; i < captionsArray.length; ++i) {
		if (captionsArray[i].caption != "") {
			s += '      <p begin="' + captionsArray[i].start.toFixed(3) + 's" end="' + captionsArray[i].end.toFixed(3) + 's">' + XMLEncode(captionsArray[i].caption).replace(/\r\n|\r|\n/g, "<br />") + "</p>\r\n";
		}
	}

	s += "    </div>\r\n  </body>\r\n</tt>\r\n";

	$("#captionFile").val(s);
	$("#captionFileKind").text(".ttml");
}

var captionFileSourceUpdateTimer = null;

function UpdateCaptionFileSource() {
	captionFileSourceUpdateTimer = null;
	if ($("#captionFormatVTT").prop("checked"))
		DisplayVTTSource();
	else if ($("#captionFormatTTML").prop("checked"))
		DisplayTTMLSource();
}

function RefreshCaptionFileDisplay() {
	if ($("#captionFileAndMarkup").css("display") != "none") {
		if (captionFileSourceUpdateTimer === null)
			captionFileSourceUpdateTimer = window.setTimeout(UpdateCaptionFileSource, 16);
	}
}

function XMLEncode(s) {     
	return s.replace(/\&/g, '&amp;').replace(/“/g, '&quot;').replace(/”/g,'&quot;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');   //.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function XMLDecode(s) {
    return s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
}

function UpdateCaption(ci, captionText) {
	captionsArray[ci].caption = captionText;
	$("#ci" + ci.toString() + " span:last-child").html(XMLEncode(captionText).replace(/\r\n|\r|\n/g, "<br/>"));

	RefreshCaptionFileDisplay();
}

function AddCaptionListRow(ci) {
    var theId = "ci" + ci.toString();
    $("#display").append("<div id=\"" + theId + "\"><span>" + FormatTime(captionsArray[ci].start) + "</span><span>" + FormatTime(captionsArray[ci].end) + "</span><span>" + XMLEncode(captionsArray[ci].caption).replace(/\r\n|\r|\n/g, "<br/>") + "</span></div>");
    $("#" + theId).click(function () {
        PlayCaptionFromList($(this).attr("id"));
    });
}

function AddCaption(captionStart, captionEnd, captionText) {
	captionsArray.push({ start: captionStart, end: captionEnd, caption: Trim(captionText) });
	AddCaptionListRow(captionsArray.length - 1);
	RefreshCaptionFileDisplay();
}

function SortAndDisplayCaptionList() {
    captionsArray.sort(function(a, b) {
        return a.start - b.start;
    });

    $("#display div").remove();
    for (var ci = 0; ci < captionsArray.length; ++ci) {
        AddCaptionListRow(ci);
    }

    RefreshCaptionFileDisplay();
}


//-----------------------------------------------------------------------------------------------------------------------------------------
//	Partial parser for WebVTT files based on the spec at http://dev.w3.org/html5/webvtt/
//-----------------------------------------------------------------------------------------------------------------------------------------

function ParseAndLoadWebVTT(vtt) {

	var rxSignatureLine = /^WEBVTT(?:\s.*)?$/;

	var vttLines = vtt.split(/\r\n|\r|\n/); // create an array of lines from our file

	if (!rxSignatureLine.test(vttLines[0])) { // must start with a signature line
		alert("Not a valid time track file.");
		return;
	}

	var rxTimeLine = /^([\d\.:]+)\s+-->\s+([\d\.:]+)(?:\s.*)?$/;
	var rxCaptionLine = /^(?:<v\s+([^>]+)>)?([^\r\n]+)$/;
	var rxBlankLine = /^\s*$/;
	var rxMarkup = /<[^>]>/g;

	var cueStart = null, cueEnd = null, cueText = null;

	function appendCurrentCaption() {
	    if (cueStart && cueEnd && cueText) {
	        captionsArray.push({ start: cueStart, end: cueEnd, caption: Trim(cueText) });
		}

		cueStart = cueEnd = cueText = null;
	}

	for (var i = 1; i < vttLines.length; i++) {

		if (rxBlankLine.test(vttLines[i])) {
			appendCurrentCaption();
			continue;
		}

		if (!cueStart && !cueEnd && !cueText && vttLines[i].indexOf("-->") == -1) {
			//	this is a cue identifier we're ignoring
			continue;
		}

		var timeMatch = rxTimeLine.exec(vttLines[i]);
		if (timeMatch) {
			appendCurrentCaption();
			cueStart = ParseTime(timeMatch[1]);
			cueEnd = ParseTime(timeMatch[2]);
			continue;
		}

		var captionMatch = rxCaptionLine.exec(vttLines[i]);
		if (captionMatch && cueStart && cueEnd) {
			//	captionMatch[1] is the optional voice (speaker) we're ignoring
			var capLine = captionMatch[2].replace(rxMarkup, "");
			if (cueText)
				cueText += " " + capLine;
			else {
				cueText = capLine;
			}
		}
	}

    appendCurrentCaption();

    SortAndDisplayCaptionList();
}

//-----------------------------------------------------------------------------------------------------------------------------------------
//	A very partial parser for TTML files based on the spec at http://www.w3.org/TR/ttaf1-dfxp/
//  see samples at \\iefs\users\franko\ttml
//-----------------------------------------------------------------------------------------------------------------------------------------

function ParseAndLoadTTML(ttml) {

	var rxBr = /<br\s*\/>/g;
	var rxMarkup = /<[^>]+>/g;
	var rxP = /<p\s+([^>]+)>\s*((?:\s|.)*?)\s*<\/p>/g;
	var rxTime = /(begin|end|dur)\s*=\s*"([\d.:]+)(h|m|s|ms|t)?"/g;

	var tickRateMatch = ttml.match(/<tt\s[^>]*ttp:tickRate\s*=\s*"(\d+)"[^>]*>/i);
	var tickRate = (tickRateMatch != null) ? parseInt(tickRateMatch[1], 10) : 1;
	if (tickRate == 0)
	    tickRate = 1;

	var pMatch;
	while ((pMatch = rxP.exec(ttml)) != null) {
		var cues = {};
		var timeMatch;
		rxTime.lastIndex = 0;
	    var attrs = pMatch[1];
	    while ((timeMatch = rxTime.exec(attrs)) != null) {
			var seconds;
			var metric = timeMatch[3];
			if (metric) {
				seconds = parseFloat(timeMatch[2]);
				if (metric == "h")
					seconds *= (60 * 60);
				else if (metric == "m")
					seconds *= 60;
				else if (metric == "ms")
					seconds /= 1000;
				else if (metric == "t")
				    seconds /= tickRate;
            }
			else {
				seconds = ParseTime(timeMatch[2]);
			}

			cues[timeMatch[1]] = seconds;
		}

        if ("begin" in cues && ("end" in cues || "dur" in cues)) {
		    var cueEnd = "end" in cues ? cues.end : (cues.begin + cues.dur);
            var cueText = Trim(XMLDecode(pMatch[2].replace(/[\r\n]+/g, "").replace(rxBr, "\n").replace(rxMarkup, "").replace(/ {2,}/g, " ")));
            captionsArray.push({ start: cues.begin, end: cueEnd, caption: cueText });
		}
	}

    SortAndDisplayCaptionList();
}

//  invoked by script insertion of proxyvtt.ashx
function ProcessProxyVttResponse(obj) {
	if (obj.status == "error")
		alert("Error loading caption file: " + obj.message);
	else if (obj.status == "success") {
	    //  delete any captions we've got
	    captionsArray.length = 0;

		if (obj.response.indexOf("<tt") != -1) {
			ParseAndLoadTTML(obj.response);
		} else if (obj.response.indexOf("WEBVTT") == 0) {
			ParseAndLoadWebVTT(obj.response);
		} else {
			alert("Unrecognized caption file format.");
		}
	}
}