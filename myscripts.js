document.getElementById("mybutton").addEventListener("click",parseJwt);
document.getElementById("mybutton1").addEventListener("click",reset);
function parseJwt () {
    token = document.getElementById("user_jwt").value;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    myresult= JSON.parse(jsonPayload);
    //alert(myresult[0].VALUE);
    document.getElementById("result").textContent = JSON.stringify(myresult, undefined, 2);
    //document.getElementById("result").innerHTML= myresult[0].VALUE;
};
function reset(){
    document.getElementById("user_jwt").value="";
    document.getElementById("result").textContent="";
}

