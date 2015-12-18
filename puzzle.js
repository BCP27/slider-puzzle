$(document).ready( function() 
    {
    
    function checkAdj (checkString, origString)
    {
        origString = "#cell" + origString;
        console.log(origString);
        if ($(checkString).children().attr("src") == "images/empty.jpg")
                    {
                        $(checkString).children().attr("src", $(origString).children().attr("src"));
                        $(origString).children().attr("src", "images/empty.jpg");
                    }
    }
    function tileclick()
    {
        if ($(this).children().attr("src") == "images/empty.jpg")
        {
            alert("You clicked on an empty square. Click on a square adjacent to the empty square to move it.");  
        }
        var adjNum;
        var num = $(this).attr("id").slice(4, 6);
        var idString = "#cell";
        if (num.charAt(0) == "1")
        {
            if (num.charAt(1) == "1")
            {
                                adjNum = parseInt(num) + 1;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
                adjNum = parseInt(num) + 10;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
            }
            else
            {
                if (num.charAt(1) == "4")
                {
                    adjNum = parseInt(num) - 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) + 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                }
                else
                {
                    adjNum = parseInt(num) + 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) + 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                }
            }   
        }
        if (num.charAt(0) == "4")
        {
            if (num.charAt(1) == "1")
            {
                adjNum = parseInt(num) + 1;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
                adjNum = parseInt(num) - 10;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
            }
            else
            {
                if (num.charAt(1) == "4")
                {
                    adjNum = parseInt(num) - 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                }
                else
                {
                    adjNum = parseInt(num) + 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                }
            }   
        }
        if (num.charAt(0) == "2" || num.charAt(0) == "3")
        {
            if (num.charAt(1) == "1")
            {
                adjNum = parseInt(num) + 1;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
                adjNum = parseInt(num) + 10;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
                adjNum = parseInt(num) - 10;
                adjNum = idString + adjNum.toString();
                checkAdj(adjNum, num);
            }
            else
            {
                if (num.charAt(1) == "4")
                {
                    adjNum = parseInt(num) - 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) + 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    
                }
                else
                {
                    adjNum = parseInt(num) + 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 1;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) + 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                    adjNum = parseInt(num) - 10;
                    adjNum = idString + adjNum.toString();
                    checkAdj(adjNum, num);
                }
            }   
        }
    }
    function isPuzzleComplete() 
    {
        var hash = "images/empty.jpgimages/02.jpgimages/03.jpgimages/04.jpgimages/05.jpgimages/06.jpgimages/07.jpgimages/08.jpgimages/09.jpgimages/10.jpgimages/11.jpgimages/12.jpgimages/13.jpgimages/14.jpgimages/15.jpg";
        var checker = "";
        var tiles = $("#puzzleGrid").find("img").each( 
            function() 
            {
                checker = checker + $(this).attr("src");
                if (hash == checker)
                {
                        $("#video1")[0].play();
                        $("#video2")[0].play();
                        $("#audio")[0].play();
                        $("#win").attr("class", "");
                        $("#puzzleGrid").css("background", "url('images/BorderGreen.png')");    
                }
            }
        );
        alert("You win!");
    }
    var original = [];
    function setreset()
    {
        $("#puzzleGrid").find("img").each(
            function (){
                original.push($(this).attr("src"));
                });
    }
    function reset()
        {
            var i = 0;
            $("#puzzleGrid").find("img").each(
                function (){
                    $(this).attr("src", original[i]);
                    i = i + 1;
                });
            $("#video1")[0].pause();
            $("#video2")[0].pause();
            $("#audio")[0].pause();
            $("#win").attr("class", "hide");
            $("#puzzleGrid").css("background", "url('images/BorderBrown.png')");
        }
    $(document).ready(setreset);
    $("#cell11").click(tileclick);
    $("#cell12").click(tileclick);
    $("#cell13").click(tileclick);
    $("#cell14").click(tileclick);
    $("#cell21").click(tileclick);
    $("#cell22").click(tileclick);
    $("#cell23").click(tileclick);
    $("#cell24").click(tileclick);
    $("#cell31").click(tileclick);
    $("#cell32").click(tileclick);
    $("#cell33").click(tileclick);
    $("#cell34").click(tileclick);
    $("#cell41").click(tileclick);
    $("#cell42").click(tileclick);
    $("#cell43").click(tileclick);
    $("#cell44").click(tileclick);
    $("#cell11").click(isPuzzleComplete);
    $("#cell12").click(isPuzzleComplete);
    $("#cell13").click(isPuzzleComplete);
    $("#cell14").click(isPuzzleComplete);
    $("#cell21").click(isPuzzleComplete);
    $("#cell22").click(isPuzzleComplete);
    $("#cell23").click(isPuzzleComplete);
    $("#cell24").click(isPuzzleComplete);
    $("#cell31").click(isPuzzleComplete);
    $("#cell32").click(isPuzzleComplete);
    $("#cell33").click(isPuzzleComplete);
    $("#cell34").click(isPuzzleComplete);
    $("#cell41").click(isPuzzleComplete);
    $("#cell42").click(isPuzzleComplete);
    $("#cell43").click(isPuzzleComplete);
    $("#cell44").click(isPuzzleComplete);
    $("#border").click(reset);
});