function read(){
    var name=document.getElementById("getName").value;
    var username=document.getElementById("getUsername").value;
    var addr=document.getElementById("getAddr")
    
    var age=document.getElementById("getAge").value;
    var dob=document.getElementById("getDob").value;
    var op=document.getElementById("getDist");
    var district=op.options[op.selectedIndex].value;
    var email=document.getElementById("getEmail").value;
    var mobile=document.getElementById("getMobile").value;
    var pass=document.getElementById("getPass").value;
    var cPass=document.getElementById("getCPass").value;
    console.log(name);
    console.log(username);
    console.log(addr);
    console.log(age);
    console.log(dob);
    console.log(district);
    console.log(email); 
    console.log(mobile);
    console.log(pass);
    console.log(cPass);
   

}