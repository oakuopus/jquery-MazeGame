$(document).ready(function() {
    //Maze Size/Dimensions
    var mazeHeight = 400
    var mazeWidth = 400

    //Player starting position
    var playerX = 0
    var playerY = 0

    //Movement Functionality for player
    function movePlayer(dx, dy) {
        var newX = playerX + dx;
        var newY = playerY + dy;

        //Verify new position is inside of the maze walls
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight) {
            //Check to see if the new position is a wall or not
            if (!$('#maze').find('.wall').is('[style="top: ' + newY + 'px; left: ' + newX + 'px;"]')) {
                //We can move the player
                playerX = newX;
                playerY = newY;
                $('#player').css({ top: playerY + 'px', left: playerX + 'px' });
            }

            //Check to see if the player reaches the end
            if(playerX === 380 && playerY === 380){
                alert("Congratulations you made it throught maze")
            }

        }
    }

    // Keypress Event Listener
    $(document).keydown(function(e){
        switch (e.which) {
            case 65: // Left arrow
                movePlayer(-20, 0);
                break;
            case 87: // Up arrow
                movePlayer(0, -20);
                break;
            case 68: // Right arrow
                movePlayer(20, 0);
                break;
            case 83: // Down arrow
                movePlayer(0, 20);
                break;
            case 37: // Left arrow
                movePlayer(-20, 0);
                break;
            case 38: // Up arrow
                movePlayer(0, -20);
                break;
            case 39: // Right arrow
                movePlayer(20, 0);
                break;
            case 40: // Down arrow
                movePlayer(0, 20);
                break;
        }
    })

    //Create Maze Walls
    var wallCoordinates = [
        {top:20, left:20},
        {top:20, left:40},
        {top:20, left:60},
        {top:20, left:80},
        {top:20, left:120},
        {top:20, left:140},
        {top:20, left:160},
        {top:20, left:200},
        {top:20, left:220},
        {top:20, left:260},
        {top:20, left:280},
        {top:20, left:300},
        {top:20, left:320},
        {top:0, left:220},
        {top:20, left:360},
        {top:20, left:20},
        {top:40, left:20},
        {top:60, left:20},
        {top:100, left:20},
        {top:120, left:20},
        {top:140, left:20},
        {top:140, left:40},
        {top:160, left:40},
        {top:180, left:0},
        {top:180, left:20},
        {top:180, left:40},
        {top:40, left:360},
        {top:60, left:360},
        {top:80, left:360},
        {top:100, left:360},
        {top:120, left:360},
        {top:160, left:360},
        {top:160, left:380},
        {top:160, left:320},
        {top:140, left:320},
        {top:120, left:320},
        {top:100, left:320},
        {top:80, left:320},
        {top:60, left:320},
        {top:60, left:340},
        {top:40, left:160},
        {top:40, left:200},
        {top:40, left:220},
        {top:40, left:240},
        {top:40, left:260},
        {top:40, left:280},
        {top:60, left:80},
        {top:60, left:100},
        {top:60, left:120},
        {top:60, left:60},
        {top:60, left:160},
        {top:80, left:180},
        {top:80, left:200},
        {top:80, left:220},
        {top:80, left:240},
        {top:80, left:260},
        {top:80, left:280},
        {top:180, left:280},
        {top:180, left:180},
        {top:180, left:260},
        {top:180, left:240},
        {top:180, left:220},
        {top:180, left:200},
        {top:180, left:160},
        {top:180, left:140},
        {top:180, left:120},
        {top:180, left:100},
        {top:180, left:80},
        {top:140, left:280},
        {top:140, left:260},
        {top:140, left:240},
        {top:140, left:220},
        {top:140, left:200},
        {top:140, left:160},
        {top:140, left:140},
        {top:140, left:120},
        {top:140, left:100},
        {top:140, left:80},
        {top:120, left:80},
        {top:100, left:80},
        {top:100, left:100},
        {top:100, left:120},
        {top:100, left:140},
        {top:80, left:160},
        {top:100, left:160},
        {top:120, left:240},
        {top:120, left:260},
        {top:120, left:220},
        {top:120, left:200},
        {top:100, left:60},
        {top:220, left:20},
        {top:220, left:40},
        {top:220, left:60},
        {top:220, left:80},
        {top:220, left:0},
        {top:240, left:120},
        {top:260, left:120},
        {top:280, left:120},
        {top:200, left:120},
        {top:220, left:120},
        {top:220, left:240},
        {top:220, left:260},
        {top:220, left:280},
        {top:220, left:300},
        {top:240, left:340},
        {top:240, left:360},
        {top:220, left:0},
        {top:200, left:340},
        {top:200, left:360},
        {top:200, left:380},
        {top:220, left:340},
        {top:220, left:200},
        {top:240, left:200},
        {top:260, left:200},
        {top:280, left:200},
        {top:300, left:200},
        {top:220, left:160},
        {top:240, left:160},
        {top:260, left:160},
        {top:280, left:160},
        {top:300, left:160},
        {top:320, left:160},
        {top:340, left:180},
        {top:340, left:200},
        {top:340, left:160},
        {top:340, left:180},
        {top:340, left:200},
        {top:340, left:220},
        {top:340, left:240},
        {top:340, left:260},
        {top:340, left:280},
        {top:340, left:300},
        {top:340, left:320},
        {top:340, left:360},
        {top:340, left:0},
        {top:360, left:340},
        {top:360, left:320},
        {top:360, left:360},
        {top:380, left:200},
        {top:360, left:240},
        {top:380, left:280},
        {top:360, left:160},
        {top:280, left:360},
        {top:300, left:360},
        {top:320, left:360},
        {top:280, left:340},
        {top:280, left:320},
        {top:280, left:300},
        {top:280, left:280},
        {top:280, left:260},
        {top:280, left:240},
        {top:240, left:260},
        {top:260, left:300},
        {top:220, left:320},
        {top:220, left:220},
        {top:300, left:220},
        {top:300, left:240},
        {top:320, left:280},
        {top:300, left:320},
        {top:300, left:20},
        {top:320, left:20},
        {top:340, left:20},
        {top:280, left:20},
        {top:360, left:20},
        {top:280, left:40},
        {top:280, left:60},
        {top:240, left:20},
        {top:280, left:80},
        {top:260, left:80},
        {top:320, left:80},
        {top:320, left:60},
        {top:320, left:100},
        {top:320, left:120},
        {top:320, left:140},
        {top:360, left:80},
        {top:360, left:100},
        {top:360, left:60},
        {top:360, left:40},
        {top:360, left:120},
    ]

    for (var i = 0; i < wallCoordinates.length; i++) {
        $('#maze').append('<div class="wall" style="top: ' + wallCoordinates[i].top + 'px; left: ' + wallCoordinates[i].left + 'px;"></div>');
    }

    //Create the player and append it to the board
    $('#maze').append('<div class="player" id="player" style="top: '+ playerY + 'px; left: ' + playerX + 'px; ;"><img style="max-height: 20px; max-width: 20px;" src="./assests/Idle (1).png" alt=""></div>')

    $("#start").css({
        backgroundcolor: "white",
    })

    var start = new Date; setInterval(function() { $('.Timer').text((new Date - start) / 1000 + " Seconds"); }, 1000);
    console.log(start)
})