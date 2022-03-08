function Mul() {
    var m = parseInt(document.querySelector("#num1").value);
    var n = parseInt(document.querySelector("#num2").value);

    if(m>n){
        var temp;
        temp=m;
        m=n;
        n=temp;
    }

    var messege= "<b>Multiplication Table from " + m + " to " + n + "<b/> <hr>";
    document.querySelector("#d1").innerHTML= messege;

    document.querySelector(".row").innerHTML = "";

    var i=0,j=0,division;

    var content = "content";
    
    for (i = m; i <= n; i++) {
        content="content"+(i-m+1);
        division= '<div class= "col-lg-2 col-md-3 col-sm-4 col-xs-6"><section id='+content+'></section></div>';
        document.querySelector(".row").innerHTML += division;
        messege= "<p class= 'table'>Table of "+i+"</p><br>";
        document.querySelector("#"+content).innerHTML += messege;
        for (j = 1; j <= 10; j++) {
            messege= i + " X " + j + " = " + i * j+"<br/>";
            document.querySelector("#"+content).innerHTML += messege;
        }
    }
}