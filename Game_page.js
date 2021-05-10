player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn:"+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn:"+player2_name;
function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("nUmBeR2").value;
    actuallanswer=parseInt(number1)*parseInt(number2);
    question="<h4 id='question_word'>Q:"+number1+"X"+number2+"</h4>";     
    answerbox="<br>answer:<input type='text' id='inputbox'>";
    checkbutton="<br><button onclick='check()'>check</button>";
    row=question+answerbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("nUmBeR2").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    answer=document.getElementById("inputbox").value;
    finalanswer=answer.toLowerCase();
    if(finalanswer==actuallanswer){
        if(answer_turn=="player1")
    {
        player1_score=player1_score+1;
        answer_turn="player2";
        document.getElementById("player1_score").innerHTML=player1_score;
        document.getElementById("player_answer").innerHTML="answer_turn-"+player2_name;
    
    }
else{
player2_score=player2_score+1;
answer_turn="player1";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_answer").innerHTML="answer_turn-"+player1_name;


}
if(question_turn=="player1")
{
    question_turn="player2";
    document.getElementById("player_question").innerHTML="question_turn-"+player2_name;

}
else{
question_turn="player1";
document.getElementById("player_question").innerHTML="question_turn-"+player1_name;


}

}
    
}

