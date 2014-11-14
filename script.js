var bscore = 0;

$(window).bind('load', function() {
   // $.preload(["Images/fon.jpg"])
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.drawImage(img1, 0, 0, 500, 500);
    
})
    

function render() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = "Images/fon.jpg";
    ctx.drawImage(img1, 0, 0, 500, 500);
}


function main() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var score;
   
	document.onkeydown = Pressk;
	kvxy = document.getElementById('canvas').width;
	cw = 20;
	mx = kvxy / cw;
	nap = "r";
	var snake_len = 0;
	var snake_a = [];
	
	
	
	
		function cell(x, y) { 
		this.x = x;
		this.y = y;
		}
		
		function Pressk(e) {
		
		
		switch (e.keyCode) {
		
			case (40):
			if (nap != 'u') {
			nap = 'd';
			}
			break;
			
			case (37):
			if (nap != 'r') {
			nap = 'l';
			}
			break;
			
			case (38):
			if (nap != 'd') {
			nap = 'u';
			}
			
			break;
			
			case (39):
			if (nap != 'l') {
			nap = 'r';
			}
			
			break;
		}
		
		
		}
	
	    function paint_cell(x, y, color) {
		ctx.fillStyle = color;
        ctx.fillRect(x * cw, y * cw, cw, cw);
        ctx.strokeStyle = "white";
        ctx.strokeRect(x * cw, y * cw, cw, cw);
		}
		
		function spawn_snake() {
		snake_a = new Array();
		snake_len = 2;
		for(i = 0;i<=snake_len;i++)
			{
			sn = new cell(6 - i,2);
			snake_a.push(sn);
			}
		}
		
		function moving() {
		
            score = snake_len - 2;
		for (i = snake_len; i>=1; i--) {
			snake_a[i].x=snake_a[i-1].x;
			snake_a[i].y=snake_a[i-1].y;
			}
			
			switch (nap) {
			
				case ('r'):
				if(chekcol(snake_a[0].x + 1,snake_a[0].y))
				{
				 GG();
				}
				snake_a[0].x++;
				break;
				
				case ('d'):
				if(chekcol(snake_a[0].x,snake_a[0].y + 1))
				{
				 GG();
				}
				snake_a[0].y++;
				break;
			
				case ('l'):
				if(chekcol(snake_a[0].x - 1,snake_a[0].y))
				{
				 GG();
				}
				snake_a[0].x--;
				break;
				
				case ('u'):
				if(chekcol(snake_a[0].x,snake_a[0].y - 1))
				{
				 GG();
				}
				snake_a[0].y--;
				break;
				
			}
			
			
			
			
			if (snake_a[0].x < 0) {
			
				snake_a[0].x = mx-1;
			}
				
			if (snake_a[0].x == mx) {
			
				snake_a[0].x = 0;
			}
			if (snake_a[0].y < 0) {
			
				snake_a[0].y = mx - 1;
			}
			
			if (snake_a[0].y == mx) {
			
				snake_a[0].y = 0;
			}
			
			if(chekcol(app.x,app.y)) 
				{
				snake_a.push(new cell(snake_a[0].x,snake_a[0].y));
				snake_len++;
				spawn_aple();
			}
			
		}
		
		function Randomnum(min, max) {
				var rand = min - 0.5 + Math.random()*(max-min+1)
				return Math.round(rand);
				
				}

		
		function spawn_aple() {
		do {
			x = Randomnum(0, mx-1);
			y = Randomnum(0, mx-1);
		}	while(chekcol(x,y)) 
		app = new cell(x,y);
		}
		
		function chekcol(x, y) {
				
			for (i in snake_a) {
			if((x == snake_a[i].x)&(y == snake_a[i].y)) {return true}
			
			}
		
		}
		
		function paint() {
		
		
        ctx.drawImage(img1, 0, 0, 500, 500);
            
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, 500, 500);
		
		for (i in snake_a) {
			paint_cell(snake_a[i].x,snake_a[i].y,"#07071C");
			}
		paint_cell(app.x,app.y,"#F60");
		}
		
		function GG() {
		      if (score > bscore) {
                  
            bscore = score;
              }
		alert("Game over. Score: " + score);
		start();
		}
		
		function start() {
		    nap = 'r';
			spawn_snake();
			spawn_aple();
			
			if (typeof game_loop != "undefined") clearInterval(game_loop);
			game_loop = setInterval(g_loop, 150);
		}
		
		function g_loop() {
		    //alert(snake_a[0].y);
			moving();
			paint();
            document.getElementById('score').innerHTML = '<p> ' + score + ' </p>';
            document.getElementById('Bscore').innerHTML = '<p> ' + bscore + ' </p>';
			
		}
		

	start();
	
	
	
}