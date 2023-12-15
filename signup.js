// function signup(){
  
//     mob=document.getElementById('mobno');
//     fname=document.getElementById('fullname');
//     uname=document.getElementById('username');
//     pass=document.getElementById('pass');
    

// let person={
//     mobile: mob.value,
//     fullname: fname.value,
//     username: uname.value,
//     password: pass.value,
// }

// let person1=[mobile= mob.value,fullname= fname.value,username= uname.value,password= pass.value]
       
//     console.log(person)
//     console.log(person1)
//     deform={mobile,fullname,username,password}=person
//     alert(`your:-  Mob/Email: "${mobile}", Fullname: "${fullname}", Username: "${username}", Password:"${password}".`);
    
// }


function signup(){
     let mob=document.getElementById('mobno');
     let fname=document.getElementById('fullname');
     let uname=document.getElementById('username');
     let pass=document.getElementById('pass');

    if(mob.value.trim() === '' || fname.value.trim() === '' || uname.value.trim() === '' || pass.value.trim() === ''){
        validate()
    }
    else{
        add()
    }
}

function validate(){
    let mob=document.getElementById('mobno');
    let fname=document.getElementById('fullname');
    let uname=document.getElementById('username');
    let pass=document.getElementById('pass');
    if(mob.value.trim() === ''){
        alert('Enter Mob or Email')
    }
    else if(fname.value.trim() === ''){
        alert('Enter Fullname')
    }
    else if(uname.value.trim() === ''){
        alert('Enter Username')
    }
    else if(pass.value.trim() === ''){
        alert('Enter Password')
    }
    else{
        add()
    }
}

function add(){
        let mob=document.getElementById('mobno');
        let fname=document.getElementById('fullname');
        let uname=document.getElementById('username');
        let pass=document.getElementById('pass');
        
    
     let person={
         mobile: mob.value,
         fullname: fname.value,
         username: uname.value,
         password: pass.value,
     }
    
     let person1=[mobile= mob.value,fullname= fname.value,username= uname.value,password= pass.value]
           
         console.log(person)
         console.log(person1)
         deform={mobile,fullname,username,password}=person
         alert(`your:-  Mob/Email: "${mobile}", Fullname: "${fullname}", Username: "${username}", Password:"${password}".`);
        
    
}
