
var rep = new Array;

var faite = new Array;

var score = 0;

rep[1] = "b";

rep[2] = "a";

rep[3] = "c";

rep[4] = "c";

rep[5] = "a";

rep[6] = "a";

rep[7] = "b";

rep[8] = "c";

rep[9] = "c";

rep[10] = "b";

rep[11] = "a";

rep[12] = "c";

rep[13] = "a";

rep[14] = "a";

rep[15] = "d";

function truc() {
    alert("point of vue");
}

function Engine(question, reponse) {

    if (reponse != rep[question]) {

        if (!faite[question]) {

            faite[question] = -1;

            alert("false !!   the right answer was - " + rep[question] + " -");

        }

        else {

            alert("you had done this question !");

        }

    }

    else {

        if (!faite[question]) {

            faite[question] = -1;

            score++;

            alert("right answer !! ");

        }

        else {

            alert("you had done this question !");

        }

    }

}


function NextLevel() {

    if (score > 15) {

        alert("hacker!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

    }
    if(score == 15){
        alert(score +"/15."+"you are the GOAT!")
    }

    if (score > 10 && score <= 14) {

        alert(score + "/15. " + "master !");

    }

    if (score > 6 && score <= 8) {

        alert(score + "/15. " + "good ... but not perfect.");

    }



    if (score >= 4 && score < 6) {

        alert(score + "/15. " + "not bad ... wanna try ?");

    }

    if (score < 4) {

        alert(score + "/15. " + "too bad bro... you had to do it again");

    }





    faite = new Array;

    score = 0;



    document.quest.reset();

}







