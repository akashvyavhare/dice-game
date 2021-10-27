function play()
{
var num1 = Math.random()*6+1;
num1 = Math.floor(num1);
var randomimg1 = "dice"+num1+".ico";
var setimage1 = document.getElementById("img1");
setimage1.setAttribute("src",randomimg1);

var num2 = Math.random()*6+1;
num2 = Math.floor(num2);
var randomimg2 = "dice"+num2+".ico";
var setimage2 = document.getElementById("img2");
setimage2.setAttribute("src",randomimg2);

if (num1>num2)
{ 
 document.getElementById("h3").innerHTML= "Player 1 is Winner";
}
else if(num2>num1)
{
    document.getElementById("h3").innerHTML= "Player 2 is Winner";
}
else{
    document.getElementById("h3").innerHTML= "Match Draw";
}
};