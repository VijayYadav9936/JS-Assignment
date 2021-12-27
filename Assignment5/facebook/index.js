function validation(event){
  console.log("vali..");
  var user = document.getElementById('user').value
  console.log("user")
  var password = document.getElementById('password').value
  console.log(password)
  var confirmpass = document.getElementById('confirmpass').value
  console.log(confirmpass)
  var useremail = document.getElementById('useremail').value
  console.log(useremail)

 
  if (!fname.length == 0) {
    if (fname.length < 3) {
        document.getElementById('formerror1').innerHTML = "**name can  not be of 2 words";
    }
    else {
        if (!isNaN(fname)) {
            document.getElementById('formerror1').innerHTML = "** name can not be number";
            console.log("praveen sir");
        }
        else {
            document.getElementById('formerror1').innerHTML = " ";
            localStorage.setItem("first name", fname);
            console.log("praveen sir1");
        }
    }
}
else {
    document.getElementById('formerror1').innerHTML = "** please enter your first name ";
    console.log("praveen sir3");
}


// last name
if (!lname.length == 0) {
    if (lname.length < 3) {
        document.getElementById('formerror2').innerHTML = "**name can  not be of 2 words";
    }
    else {
        if (!isNaN(fname)) {
            document.getElementById('formerror2').innerHTML = "** name can not be number";
            console.log("praveen sir");
        }
        else {
            document.getElementById('formerror2').innerHTML = " ";
            localStorage.setItem("last name", lname);
            console.log("praveen sir1");
        }
    }
}
else {
    document.getElementById('formerror2').innerHTML = "** please enter your last name ";
    console.log("praveen sir3");
}


// email-id
if (!email.length == 0) {
    document.getElementById('formerror3').innerHTML = " ";
    localStorage.setItem("email-ID", email);
    console.log("praveen sir4");
} else {
    document.getElementById('formerror3').innerHTML = "**please enter your email id";
    console.log("praveen sir5");
}


// phone
if (!phone.length == 0) {
    if (phone.length == 10) {
        document.getElementById('formerror4').innerHTML = " ";
        localStorage.setItem("Number", phone);
        console.log("ish");
    } else {
        document.getElementById('formerror4').innerHTML = "** please enter correct number";
    }

} else {
    document.getElementById('formerror4').innerHTML = "** please enter your number";
}

// user-id
if (!userID.length == 0) {
    document.getElementById('formerror5').innerHTML = " ";
    localStorage.setItem("User_ID", userID);
    console.log("praveen sir4");
} else {
    document.getElementById('formerror5').innerHTML = "**please enter User-ID";
    console.log("hritik");
}

//password
if (!pass.length == 0) {
    if (pass.length < 5) {
        document.getElementById('formerror6').innerHTML = "**password should be at least 6 char";
    } else {
        document.getElementById('formerror6').innerHTML = " ";
        localStorage.setItem("Password", pass);
        console.log("ish");
    }

} else {
    document.getElementById('formerror6').innerHTML = "** please enter your password";
}


// confirm password
if (!cpass.length == 0) {
    if (cpass !== pass) {
        document.getElementById('formerror7').innerHTML = "** password does not match";
    } else {
        document.getElementById('formerror7').innerHTML = " ";
        localStorage.setItem("Confirm Password", cpass);
        window.location.href = "./index01.html";
        console.log("ish")
    }
}
else {
    document.getElementById('formerror7').innerHTML = "** please enter your password again";
}





}