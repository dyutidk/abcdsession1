function read(){
    var name=document.getElementById("getName").value;
    var roll=document.getElementById("getRoll").value;
    var admno=document.getElementById("getAdm").value;
    var age=document.getElementById("getAge").value;
   
    if(age>=18){
        alert("Eligible");
    }else{
        alert("Not eligible");
    }
}