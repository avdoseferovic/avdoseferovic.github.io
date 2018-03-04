var button = document.getElementById("button");
var username = document.getElementById("username");
var table = document.querySelector("table");
var message = document.getElementById("message");

function isLength(nameMessage){
    if (nameMessage.value.length > 0) {
        return true;
    }
    else if (nameMessage === "name" && nameMessage <= 0)
        alert(`You have to enter the name or the message!`);
}
function post (name, message){
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td1.appendChild(document.createTextNode(name.value));
    td2.appendChild(document.createTextNode(message.value))
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    message.value ="";
}

button.addEventListener("click", function(){
    if (isLength(username) && isLength(message)){
        post(username, message);
    }
});
message.addEventListener("keypress", function(event){
    if (isLength(username) && isLength(message) && event.keyCode === 13){
        post(username, message);
    }
});


