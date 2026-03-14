const btn = document.getElementById("button");
btn.addEventListener("click", 
    function() {
    alert('Press button');
})

const form = document.querySelector('#button');
form.addEventListener("click", function(e){
    e.preventDefault();
    const userName = document.querySelector('#full_name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone_num').value;
    const msg_subj = document.querySelector('#msg_subj').value;
    const msg_cont = document.querySelector('#msg_cont').value;

    console.log(userName); 
    console.log(email);
    console.log(phone);
    console.log(msg_subj);
    console.log(msg_cont);

    if(userName.length<=3){
        alert("the name must be at least 3 notes");
        return;
    }
    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(emailPattern.test(email));
    if(!emailPattern.test(email)){
        alert("invalid email address");
        return;
    }

    const phonePattern=/^05\d{8}$/;
    if(!phonePattern.test(phone)){
       alert("invalid phone number");
        return;
    }

    if(msg_subj.length<=5){
        alert("the massege subject must be at least 5 notes");
        return;
    }

    if(msg_cont.length<=10){
        alert("the massege contant must be at least 10 notes");
        return;
    }




})