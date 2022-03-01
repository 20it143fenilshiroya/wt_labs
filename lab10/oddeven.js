function odd_even(){

    let x=prompt("enter any number");
    x=parseInt(x);
    /*var i;
    i=parseInt(i);
    let t="";
    x=parseInt(x);
    
    for(i=1;i<=x;i++)
    {
        t+=i+"<br>";
    }
    document.getElementById('n1').innerHTML=t;
  */

    if(x%2==0){
     document.getElementById('n1').innerHTML=x;
     document.getElementById('n1').style.color='red';
     alert('number is even..');
     
    }
    else{
     document.getElementById('n1').innerHTML=x;
     document.getElementById('n1').style.color='green';
     alert('number is odd..');
    }
}
