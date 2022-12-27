
createUserWithEmailAndPassword()
createUser = (email, password, confirmPassword,first_name, last_name) =>{
  if(password==confirmPassword){
    firebase 
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential)=>{
        alert.alert("User registered !!");
    })
    .catch(error => {
     alert.alert(error.message); 
  });
  }

