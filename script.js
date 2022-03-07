function Mul() {
    var m = document.querySelector("#num1").value;
    var n = document.querySelector("#num2").value;

    if(m>n){
        m=m+n;
        n=m-n;
        m=m-n;
    }

    var messege= "<b>Multiplication Table from " + m + " to " + n + "<b/> <hr>";
    document.querySelector("#d1").innerHTML= messege;

    var i=0,j=0,division;

    var content = "content";
    
    for (i = m; i <= n; i++) {
        content="content"+(i-m+1);
        division= '<div class= "col-lg-6 col-md-4 col-sm-3"><section id='+content+'></section></div>';
        document.querySelector(".row").innerHTML += division;
        messege= "<p class= 'table'>Table of "+i+"</p><br>";
        document.querySelector("#"+content).innerHTML += messege;
        for (j = 1; j <= 10; j++) {
            messege= i + " X " + j + " = " + i * j+"<br/>";
            document.querySelector("#"+content).innerHTML += messege;
        }
    }
}