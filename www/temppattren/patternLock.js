/*!
 * Pattern Lock
 * Author: Pradeep Kumar S M
 *
 * Includes jQuery.js
 * Date: 2014-01-01
 */
 
 
 var area = document.getElementById('canvasArea');
    var dummyArea = document.getElementById('dummyArea');

    var ctx = area.getContext('2d'),
        prev_x,
        prev_y,
        draw,
        patternArray = [],
        verifyPattern = [],
        savedPattern ,
        savePattern = true,
        enclosure = $("#enclosure"),
        enclosureX = enclosure.offset().left,
        enclosureY = enclosure.offset().top,
        dummyCtx = dummyArea.getContext('2d');

    area.width = parseInt(enclosure.width());
    area.height = parseInt(enclosure.height());
    dummyArea.width = parseInt(enclosure.width());
    dummyArea.height = parseInt(enclosure.height());


 

//For Line color
    ctx.lineWidth = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'red';

    dummyCtx.lineWidth = 10;
    dummyCtx.lineJoin = 'round';
    dummyCtx.lineCap = 'round';
    dummyCtx.strokeStyle = 'red';

//Initiate pattern tracking process.
		

function drawpatt(btn){
		draw = true;
        prev_x = $(btn).offset().left + 25 - enclosureX;
        prev_y = $(btn).offset().top + 22 - enclosureY;
        $(btn).addClass("selected");

        if (savePattern && !savedPattern)
            patternArray.push($(btn).attr("id"));
        else
            verifyPattern.push($(btn).attr("id"));

       // e.preventDefault();
		//startmove(btn);
        return false;
	}

function startmove(btn){
	 //if (draw) {
		//	alert($(btn).offset().left);
			//prev_x = $(prevbtn).offset().left
			//prev_y = $(prevbtn).offset().left
			
            //ctx.clearRect(0, 0, area.width, area.height);
            ctx.beginPath();
            ctx.moveTo(prev_x, prev_y);
            ctx.lineTo($(btn).offset().left  + 25 - enclosureX, $(btn).offset().top  + 22 - enclosureY);
            ctx.closePath();
            ctx.stroke();
     //   }
}
$(document).ready(function () {

    
	

   // $(".button").on("mousedown", function (e) {
   //     draw = true;
   //     prev_x = $(this).offset().left + 25 - enclosureX;
   //     prev_y = $(this).offset().top + 22 - enclosureY;
   //     $(this).addClass("selected");
   //
   //     if (savePattern && !savedPattern)
   //         patternArray.push($(this).attr("id"));
   //     else
   //         verifyPattern.push($(this).attr("id"));
   //
   //     e.preventDefault();
   //     return false;
   // });

	//To drag the line from one node to another
  //  $("#canvasArea").on("mousemove", function (e) {
  //      if (draw) {
  //          ctx.clearRect(0, 0, area.width, area.height);
  //          ctx.beginPath();
  //          ctx.moveTo(prev_x, prev_y);
  //          ctx.lineTo(e.pageX - enclosureX, e.pageY - enclosureY);
  //          ctx.closePath();
  //          ctx.stroke();
  //      }
  //  });

	//Store the pattern in an array
   // $(".button").on("mouseover", function () {
   //     if (draw) {
   //         $(this).addClass("selected");
   //         dummyCtx.beginPath();
   //         dummyCtx.moveTo(prev_x, prev_y);
   //         prev_x = $(this).offset().left + 25 - enclosureX;
   //         prev_y = $(this).offset().top + 25 - enclosureY;
   //         dummyCtx.lineTo(prev_x, prev_y);
   //         dummyCtx.closePath();
   //         dummyCtx.stroke();
   //         ctx.clearRect(0, 0, area.width, area.height);
   //         if (savePattern && !savedPattern)
   //             patternArray.push($(this).attr("id"));
   //         else
   //             verifyPattern.push($(this).attr("id"));
   //     }
   // });


//Stop pattern recording
  //  enclosure.on("mouseup", function (e) {
  //      if (draw)
  //          savePasswordPattern(this);
  //  });

//Save the pattern
    function savePasswordPattern(e) {
        var patternArrayString = patternArray.toString();
        draw = false;
        ctx.clearRect(0, 0, area.width, area.height);
        if (savePattern && !savedPattern) {
            if (patternArray.length >= 3) {
                $("#info").html("Your pattern is set, use same pattern to unlock").addClass("info").removeClass("error");
                dummyCtx.clearRect(0, 0, dummyArea.width, dummyArea.height);
                $(".button").removeClass("selected");
                if (localStorage)
                    localStorage.setItem("patternLock", patternArrayString);
                savedPattern = patternArrayString;
            } else {
                $("#info").html("Atleast 3 nodes should be selected. Try again").addClass("error").removeClass("info");
            }

            dummyCtx.clearRect(0, 0, dummyArea.width, dummyArea.height);
            $(".button").removeClass("selected");
        }
        else {
            checkPattern();
        }
        savePattern = false;
    }

//Check the pattern
    function checkPattern() {
        if (savedPattern === verifyPattern.toString()) {
            $("#info").html("Unlocked").addClass("info").removeClass("error");
        }
        else {
            $("#info").html("Wrong pattern, Try again").addClass("error").removeClass("info");
            verifyPattern = []
        }

        dummyCtx.clearRect(0, 0, dummyArea.width, dummyArea.height);
        $(".button").removeClass("selected");
        verifyPattern = [];
    }
 


});