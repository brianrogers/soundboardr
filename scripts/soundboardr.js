var Soundboardr = {
	init :function() {
		sb_html = '';
		sb_html += '<div id="sb_title">'+soundboard_json.soundboard.title+'</div>';
		sb_html += '<div id="sb_tiles">';
		sb_html += '<div id="sb_row1"></div>';
		sb_html += '<div id="sb_row2"></div>';
		sb_html += '<div id="sb_row3"></div>';
		sb_html += '<div id="sb_row4"></div>';
		sb_html += '</div>';
		sb_html += '<div id="audio_players"></div>'
		$('#soundboard').html(sb_html);

		for(var i=0;i<soundboard_json.soundboard.tiles.length;i++) {
			//var tile = '<a id="'+soundboard_json.soundboard.tiles[i].id+'" title="'+soundboard_json.soundboard.tiles[i].audio+'"><img class="tile" src="'+soundboard_json.soundboard.tiles[i].avatar+'" /></a>';
			var tile = '<audio src="'+soundboard_json.soundboard.tiles[i].audio+'" controls autobuffer="true" title="'+soundboard_json.soundboard.tiles[i].avatar+'"></audio>';

				$('#audio_players').append(tile);
	
		}

		$("audio").removeAttr("controls").each(function(i, audioElement) {
	         var audio = $(this);
	         var that = this; //closure to keep reference to current audio tag
				log(i);
				if(i<3) {
					$('#sb_row1').append($('<img class="tile" src="'+audio.attr("title")+'" />').click(function() {
						log('playing file');
			             that.play();
			         }));
				}else if(i<6) {
					$('#sb_row2').append($('<img class="tile" src="'+audio.attr("title")+'" />').click(function() {
						log('playing file');
			             that.play();
			         }));
				}else if(i<9) {
					$('#sb_row3').append($('<img class="tile" src="'+audio.attr("title")+'" />').click(function() {
						log('playing file');
			             that.play();
			         }));
				}else if(i<12) {
					$('#sb_row4').append($('<img class="tile" src="'+audio.attr("title")+'" />').click(function() {
						log('playing file');
			             that.play();
			         }));
				}
	     });
	}
};




soundboard_json = {
	"soundboard" : {
		"id" : "123",
		"title" : "SCORM Soundboard",
		"tiles" : [
		{
			"id" : "t1",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/adventure.mp3",
			"avatar" : "http://www.avatarsdb.com/avatars/j_bieber_face.jpg"
		},
		{
			"id" : "t2",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/odds.mp3",
			"avatar" : "http://scorm.com/wp-content/uploads/2009/01/img_2379-2.jpg"
		},
		{
			"id" : "t3",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/failed.mp3",
			"avatar" : "http://www.avatarsdb.com/avatars/einteins_tongue.jpg"
		},
		{
			"id" : "t4",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/try.mp3",
			"avatar" : "http://scorm.com/wp-content/uploads/2011/04/chris.jpg"
		},
		{
			"id" : "t5",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/scruffy.mp3",
			"avatar" : "http://scorm.com/wp-content/uploads/2011/04/jena.jpg"
		},
		{
			"id" : "t6",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/smelled.mp3",
			"avatar" : "http://scorm.com/wp-content/uploads/2011/04/jeff.jpg"
		},
		{
			"id" : "t7",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/pushed.mp3",
			"avatar" : "http://scorm.com/wp-content/uploads/2011/04/tammy.jpg"
		},
		{
			"id" : "t8",
			"audio" : "http://wavcentral.com/sounds/movies/borat/howdypartners.mp3",
			"avatar" : "http://www.avatarsdb.com/avatars/borat.jpg"
		},
		{
			"id" : "t9",
			"audio" : "http://www.moviesoundclips.net/movies1/starwars5/learn.mp3",
			"avatar" : "http://scorm.com/wp-content/uploads/2009/01/img_2412-2.jpg"
		}
		]
	}
};