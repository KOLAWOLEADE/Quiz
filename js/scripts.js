// Login function

function loginButton(){
    
    const username = document.getElementById('User').value;
    console.log(username);
    const password = document.getElementById('Password').value;
   
    console.log(password);

      
      if (username === 'user' && password === 'password'){
  
        window.location.href = index.html
      }
  
      else{
        alert('invalid username or invalid password. Try again');
      }    

   }

  //  $(document).ready(function() {

  //   $('#chemistry').click(function(){
  //     ChemistryButton();
  
  
  // });

  //  })

  //  function ChemistryButton(){
  //   window.location.href = Chemistry.html
  // }


  // // Physics index 
  // $(document).ready(function() {

  //   $('#Physics').click(function(){
  //     Physics();
  
  
  // });

  //  })

  //  function Physics(){
  //   window.location.href = Physics.html
  // }


  // Registration Form

  // $(document).ready(function(event){
  //   $("#Reg").submit(function(){
  //     event.preventDefault();

  //     const firstNameInput = $("#firstName").value().toUpperCase();
  //     const middleName = $("#middleName").value();
  //     const lastName = $("#lastName").value();
  //     const password = $("#password").value();
  //     const confirmPassword = $("#confirmPassword").value();


      // $("#formRegistration").show();

  //     let formRegistrations =[firstNameInput, middleName,lastName,password,confirmPassword]

  //     console.log(formRegistrations)
      
  //     alert(formRegistrations)

  //    $("#formRegistrations").show();






  //   })
  // })


  //  MathematicsButton Quiz function

  // function MathematicsButton(){
    
  //   window.location.href = Mathematics.html

  // }

  
  // function EnglishButton(){
  //   window.location.href = English.html
  // }

  
  // function Physics(){
  //   window.location.href = Physics.html
  // }







  function MathematicsButton() {
    let score = 0;

    // Question 1

    let q1Answer = document.querySelector("input[name='q1']:checked");

      if(q1Answer && q1Answer.value === "300cm") {
        score++;
      }

      else{
        alert(" failed q1. Answer = 300cm")
      }


       // Question 2

    let q2Answer = document.querySelector("input[name='q2']:checked");
    
    if(q2Answer && q2Answer.value === "1/2bh") {
      score++;
    }

    else{
      alert(" failed q2. Answer = 1/2bh")
    }

     // Question 3

     let q3Answer = document.querySelector("input[name='q3']:checked");
    
     if(q3Answer && q3Answer.value === "1/2") {
       score++;
     }

     else{
      alert(" failed q3. Answer = 1/2")
    }

      // Question 4

    let q4Answer = document.querySelector("input[name='q4']:checked");
    
    if(q4Answer && q4Answer.value === "0"){
      score++;
    }

    else{
      alert(" failed q4. Answer = 0")
    }



    // Display result

    let ResultDisplay = document.getElementById("Result");
    ResultDisplay.textContent = "Your score is:" +score+ "/4";
    

  }




  function PhysicsButton() {
    let score = 0;

    // Question 1

    let q1Answer = document.querySelector("input[name='q1']:checked");

      if(q1Answer && q1Answer.value === "kgs-2m-2") {
        score++;
      }

      else{
        alert(" failed q1. Answer = kgs-2m-2")
      }


       // Question 2

    let q2Answer = document.querySelector("input[name='q2']:checked");
    
    if(q2Answer && q2Answer.value === "fermi") {
      score++;
    }
    else{
      alert(" failed q2. Answer = fermi")
    }

     // Question 3

     let q3Answer = document.querySelector("input[name='q3']:checked");
    
     if(q3Answer && q3Answer.value === "Speed") {
       score++;
     }

     else{
      alert(" failed q3. Answer = Speed")
    }

      // Question 4

    let q4Answer = document.querySelector("input[name='q4']:checked");
    
    if(q4Answer && q4Answer.value === "Water"){
      score++  
    
    }

    else{
      alert(" failed q4. Answer = Water")
    }



    // Display result

    let ResultDisplay = document.getElementById("Result");
    ResultDisplay.textContent = "Your score is:" +score+ "/4";
    

  }



  function EnglishButton() {
    let score = 0;

    // Question 1

    let q1Answer = document.querySelector("input[name='q1']:checked");

      if(q1Answer && q1Answer.value === "He doesn't know the ABC of Mathematics") {
        score++;
      }

      else{
        alert(" failed q1. Answer = He doesn't know the ABC of Mathematics")
      }


       // Question 2

    let q2Answer = document.querySelector("input[name='q2']:checked");
    
    if(q2Answer && q2Answer.value ==="in inviting") {
      score++;
    }

    else{
      alert(" failed q2. Answer = in inviting")
    }

     // Question 3

     let q3Answer = document.querySelector("input[name='q3']:checked");
    
     if(q3Answer && q3Answer.value === "Occurring repeatedly all the time") {
       score++;
     }

     else{
      alert(" failed q2. Answer = Occurring repeatedly all the time")
    }

      // Question 4

    let q4Answer = document.querySelector("input[name='q4']:checked");
    
    if(q4Answer && q4Answer.value === "the broth"){
      score++;
    }

    else{
      alert(" failed q4. Answer = the broth")
    }



    // Display result

    let ResultDisplay = document.getElementById("Result");
    ResultDisplay.textContent = "Your score is:" +score+ "/4";
    

  }




  function ChemistryButton() {
    let score = 0;

    // Question 1

    let q1Answer = document.querySelector("input[name='q1']:checked");

      if(q1Answer && q1Answer.value === " Increase 4 times") {
        score++;
      }

      else{
        alert(" failed q1. Answer =  Increase 4 times")
      }


       // Question 2

    let q2Answer = document.querySelector("input[name='q2']:checked");
    
    if(q2Answer && q2Answer.value === " Methane") {
      score++;
    }

    else{
      alert(" failed q2. Answer = Methane")
    }

     // Question 3

     let q3Answer = document.querySelector("input[name='q3']:checked");
    
     if(q3Answer && q3Answer.value === "Silicon") {
       score++;
     }

     else{
      alert(" failed q3. Answer = Silicon")
    }

      // Question 4

    let q4Answer = document.querySelector("input[name='q4']:checked");
    
    if(q4Answer && q4Answer.value === "Calcium oxychloride"){
      score++;
    }

    else{
      alert(" failed q4. Answer = Calcium oxychloride")
    }



    // Display result

    let ResultDisplay = document.getElementById("Result");
    ResultDisplay.textContent = "Your score is:" +score+ "/4";
    

  }


    // Set the time limit for the quiz in seconds
    // const quizTimeLimit = 60;

    // let timer = quizTimeLimit;
    // const countdownElement = document.createElement('div');
    // countdownElement.id = 'countdown';
    // document.getElementById('quiz-container').appendChild(countdownElement);

    // function updateCountdown() {
    //     countdownElement.innerText = `Time remaining: ${timer}s`;
    //     if (timer === 0) {
    //         submitQuiz();
    //     } else {
    //         timer--;
    //         setTimeout(updateCountdown, 1000);
    //     }
    // }

    // function submitQuiz() {
    //     // You can add the logic to handle the submitted quiz data here
    //     alert('Quiz submitted!');
    //     // Optionally, you can redirect the user to another page or perform other actions
    // }

    // // Start the countdown
    // updateCountdown();

