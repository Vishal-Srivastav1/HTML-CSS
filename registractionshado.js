
function validate(frm){
    // empty the from validation error masseages
    document.getElementById("text1").innerHTML="";
    document.getElementById("Age").innerHTML="";
    
    // read from data 
    let name1=frm.text1.value;
    let age1=frm.Age.value;
    //clint side from validations
    let flag = true;
    if(name1=="") {
        document.getElementById("text1").innerHTML=" Name Is required ";               
        //frm.name.focus();
        flag=false;
    }
    
    else if(name1.length<3) {
        document.getElementById("text1").innerHTML="Name Should be more than 3 character ";               
       // frm.name.focus();
        flag=false;
    }

     if(age1=="") {
        document.getElementById("Age").innerHTML="Age Is required ";               
        frm.age.focus();
        flag=false;
    }
    
     else if(isNaN(age1)) {
        document.getElementById("Age").innerHTML="Age must be numbric value ";               
        frm.age.focus();
        flag=false;
    }
    // change hidden box value(vflage) to "yes" indicating clint side from vaidations are done
    frm.vflag.value="yes"; 
    return flag;
    
    }// function close
    
    
    
