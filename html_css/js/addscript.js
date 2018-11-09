function getsum(){
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;

    var sum=op1+op2;
    var x=parseInt(op1);
    var y=parseInt(op2);
    var sum=x+y;
    document.getElementById("sum").innerHTML="<div class='table'><tr><td>Result is </td><td><b>"+sum+"</b></td></tr></div>";
    alert(sum);


}
function calculate(){
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    var x=parseInt(op1);
    var y=parseInt(op2);
    var op=document.getElementById("operation");
    var option=op.options[op.selectedIndex].value;
    if(option=="Addition"){
       result=x+y;

    }
    else if(option=="Subtraction"){
        result=x-y;
    }
    else if(option=="Multiplication"){
        result=x*y;
    }
    else if(option=="Division"){
        result=x/y;
    }
    console.log(result);
    alert(result);
    document.getElementById("result").innerHTML="<div class='table'><tr><td>Result is </td><td><b>"+result+"</b></td></tr></div>";

}
function largest(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    var n3=document.getElementById("num3").value;
    var num1=parseInt(n1);
    var num2=parseInt(n2);
    var num3=parseInt(n3);
    if(num1>num2){
        sl=num1;
    }
    else{
        sl=num2;
    }
    if(sl>num3){
        largest=sl;
    }
    else{
        largest=num3;
    }
    console.log(largest);
    document.getElementById("result").innerHTML=largest;


}
function smallest(){
    var n1=document.getElementById("num1").value;
    var n2=document.getElementById("num2").value;
    var n3=document.getElementById("num3").value;
    var num1=parseInt(n1);
    var num2=parseInt(n2);
    var num3=parseInt(n3);
    var smallest=num1<num2?(num1<num3?num1:num3):(num2<num3?num2:num3);
    console.log(smallest);
    document.getElementById("rlt").innerHTML=smallest;

}



