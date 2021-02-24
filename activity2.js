function getscore(){
    score=localStorage.getItem("scorekey");
    document.getElementById("newscore").innerHTML="score:"+score;
}
function back(){
window.location="activity_1.html";
}