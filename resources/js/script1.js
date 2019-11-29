(function() {
  
  ("form[name='register']").validate({
   
    rules: {
     
      name: "required",
      number: "required",
      email: {
        required: true,
        email: true
      },
      pswd: {
        required: true,
        minlength: 5
      }
    },
    
    messages: {
      name: "Please enter your name",
      number: "Please enter your number",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    
    submitHandler: function(form) {
      form.submit();
    }
  });
}

);