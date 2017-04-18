var txt=document.getElementById("txtScream");
var firstnum;//第一个数字
var sign;//记录符号
var clearscreen=false; //false不清屏，true清屏
function inputnumber(num){
    if (clearscreen) {
        txt.value="";
        clearscreen=false;
    }
    if (num=="."&&(txt.value==""||txt.value.indexOf('.')!==-1)) {
        return;
    }
    if(num=="0"&&txt.value==""){
        return;
    }
    else{
        txt.value+=num;//可输入多位
    }
}
function control(con){
    if(firstnum!=null&& sign!=null)//可以不按等号连续计算
        {
            equal();
            }
    sign=con;
    firstnum=txt.value;
    clearscreen=true;
}
function control2(con2){
        sign=con2;
        if (sign=="sin"){
            txt.value=Math.sin(txt.value);
    }
        else if(sign=="cos"){
            txt.value=Math.cos(txt.value);
        }
         else if(sign=="tan"){
            txt.value=Math.tan(txt.value);
        }
        else if(sign=="π"){
            txt.value=Math.PI*txt.value;
        }
        else if(sign=="log"){
            txt.value=Math.log(txt.value);
        }
        else if(sign=="sqrt"){
            txt.value=Math.sqrt(txt.value);
        }
        else if(sign=="denominator"){
            txt.value=1/txt.value;
        }
}

function equal(){
    var secondnum=txt.value;
    firstnum=parseFloat(firstnum);
    secondnum=parseFloat(secondnum);
    if (sign=="+") {
        txt.value=firstnum+secondnum;
    }
    else if(sign=="-"){
        txt.value=firstnum-secondnum;
    }
    else if (sign=="*") {
        txt.value=firstnum*secondnum;
    }
    else if (sign=="/") {
        txt.value=firstnum/secondnum;
    }
    else if (sign=="pow") {
        txt.value=Math.pow(firstnum,secondnum);
    }
}
function clearAC(){
    txt.value="";
    clearscreen=false;
    firstnum=parseFloat(txt.value);
    sign = null;
}