

function generateTable(){

var getData = document.getElementById("number").value;
var putData = document.getElementById("blackboard");
var i, temp;
for (i=1; i<10; i++) {
    putData.innerHTML+= getData + "X" + i + "=" + getData * i + "<br>";
}
}

