function alert_inputs(){
    const email=document.getElementById('email').value;
    const pass=document.getElementById('pwd').value;

    let s_flag= true;

    if(email=='')
    {
        document.getElementById('email_message').innerHTML="**Fill the email please!";
        s_flag=false;
    }
    if(pass=='')
    {
        document.getElementById('pass_message').innerHTML="**Fill the password please!";
        s_flag=false;
    }
    return s_flag;
}