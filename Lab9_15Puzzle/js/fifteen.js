$(document).ready(function () {
    "use strict";
    var Xval = 300;
    var Yval = 300;
    $('#puzzlearea div').click(move);
    function move() {
        if (isMovable(this.x, this.y)) {
            var tempX = this.x;
            var tempY = this.y;
            this.x = Xval;
            this.y = Yval;
            $(this).attr('id', (this.x / 100) + "_" + (this.y / 100));

            Xval = tempX;
            Yval = tempY;

            $(this).css({
                'left': this.x + 'px',
                'top': this.y + 'px'
            });
        }
        
        var col = 0;
        var row = 0;
        $(".puzzlepiece").each(function () {
            if ($(this).attr('id') === row + "_" + col) {
                row++;
                if (row === 4) {
                    row = 0;
                    col++;
                }
            }
        });
        if (row === 3 && col === 3) {
            var r = confirm("You Won!! \n if you want to restart press ok");
            if (r === true) {
                sheffel();
            } else {
                
            }
        }
        
    }
    $('#puzzlearea div').mouseover(function () {
        if (isMovable(this.x, this.y)) {
            $(this).addClass("movablepiece");
        }
    });
    $('#puzzlearea div').mouseleave(function () {
        if ($(this).hasClass("movablepiece")) {
            $(this).removeClass("movablepiece");
        }
    });
    $('#shufflebutton').click(sheffel);
    function sheffel() {
        for (var i = 0; i < 100; i++) {
            var row = Math.floor((Math.random() * 4) % 4);
            var col = Math.floor((Math.random() * 4) % 4);
            if ((row !== Xval / 100) || (col !== Yval / 100)) {
                var selected = $("#" + row + "_" + col);
                //alert(selected[0].x);
                if (isMovable(selected[0].x, selected[0].y)) {
                    selected.triggerHandler("click");
                }
            }
        }
    }
    function isMovable(x, y) {
        if (Xval === x && Yval === y - 100){
            return true;
        }
        else if (Xval === x && Yval === y + 100){
            return true;
        }
        else if (Xval === x - 100 && Yval === y){
            return true;
        }
        else if (Xval === x + 100 && Yval === y){
            return true;
        }
        else{
            return false;
        }
    }


    var init = function () {
        $("#puzzlearea div").each(function (index) {
            var x = ((index % 4) * 100);
            var y = (Math.floor(index / 4) * 100);
            $(this).addClass("puzzlepiece");
            $(this).attr('id', (x / 100) + "_" + (y / 100));
            $(this).css({
                'left': x + 'px',
                'top': y + 'px',
                'background-image': 'url("Images/background.jpg")',
                'background-position': -x + 'px ' + (-y) + 'px'

            });
            this.x = x;
            this.y = y;

        });
    };
    init();

});


    