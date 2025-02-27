function toggleForms() {
  let loginForm = document.getElementById("login");
  let signupForm = document.getElementById("signup");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];

function saveData() {
  let name = document.getElementById("name1");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  

  if ( name.value.trim() !== "" && email.value.trim() !== "" && password.value.trim() !== "") {
    let newUser = { name: name.value.trim(), email: email.value.trim(),  password: password.value.trim(), };

   
    users.push(newUser);

  
    localStorage.setItem("users", JSON.stringify(users));
      Swal.fire({
        icon: "error",
        title: "Your data will be saved successfully",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
  
  Swal.fire({
    title: "After sign up, the page will open when you log,in",
    icon: "success",
    draggable: true
  });
   
  } else {
    
    Swal.fire({
        icon: "error",
        title: "Please fill in all fields.",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
  }

}
function logIn() {
  let logEmail = document.getElementById("logEmail").value.trim();
  let logPassword = document.getElementById("logPassword").value.trim();

  
  let users = JSON.parse(localStorage.getItem("users")) || [];

 
  let matchedUser = users.find((user) => user.email === logEmail && user.password === logPassword);

  if (matchedUser) {
    Swal.fire({
      title: `Login Successful!`,
      icon: "success",
      text: "Redirecting...",
      timer: 2000, 
      showConfirmButton: false,
    });

    
    setTimeout(() => {
      window.location.href = "post.html"; 
    }, 2000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Invalid email or password!",
      footer: '<a href="#">Forgot your password?</a>',
    });
  }
}
