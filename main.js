function adduser()
{
player_name1=document.getElementById("player1_name_input").value;
player_name2=document.getElementById("player2_name_input").value;
localStorage.setItem("player_name1",player_name1);
localStorage.setItem("player_name2",player_name2);
window.location="game_page.html";
}