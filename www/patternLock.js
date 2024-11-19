/*!
 * Pattern Lock
 * Author: Pradeep Kumar S M
 *
 * Includes jQuery.js
 * Date: 2014-01-01
 */
 
 
 var area = document.getElementById('canvasArea');
    var dummyArea = document.getElementById('dummyArea');

    var ctx11 = area.getContext('2d'),
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
        dummyctx11 = dummyArea.getContext('2d');

    area.width = parseInt(400);
    area.height = parseInt(400);
    dummyArea.width = parseInt(400);
    dummyArea.height = parseInt(400);


 

//For Line color
    ctx11.lineWidth = 10;
    ctx11.lineJoin = 'round';
    ctx11.lineCap = 'round';
    ctx11.strokeStyle = 'red';

    dummyctx11.lineWidth = 10;
    dummyctx11.lineJoin = 'round';
    dummyctx11.lineCap = 'round';
    dummyctx11.strokeStyle = 'red';

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
			
            //ctx11.clearRect(0, 0, area.width, area.height);
            ctx11.beginPath();
            ctx11.moveTo(prev_x, prev_y);
            ctx11.lineTo($(btn).offset().left  + 25 - enclosureX, $(btn).offset().top  + 22 - enclosureY);
            ctx11.closePath();
            ctx11.stroke();
     //   }
}
