/*
  * There are 5 functions 
	 -Function scrollFix() for Scroll the web page, it will fix at the top
   -Function checkUsername()
   -Function checkEmail()
   -Function suggestMessage()
   -Function showMessage()
  * Author: sokvebol.kol
*/

 window.onscroll = function () {scrollFix()};

 var fixHeader = document.getElementById('nav-bar');
 var isSticky = fixHeader.offsetTop;

 function scrollFix(){
  if (window.pageYOffset > isSticky){
    fixHeader.classList.add("fix");
  }
  else{
    fixHeader.classList.remove("fix");
  }
 }

	// this function check the user input name is correct or not?
 function checkUsername()
 {
 	var validateUname = myForm.isUname.value;// to get value from the typing of user
 	var spanUname = document.getElementById('span_username');//To replace on span
 	var i = validateUname.length;// to count one by one of user input

    if (validateUname == "")
    {
      spanUname.innerHTML = "Name is required";
      spanUname.style.color="red";
    }
 		else if (i < 4)
 		{
 			spanUname.innerHTML = "Name is at least 4 characters";
 			spanUname.style.color="red";
 		}
 		else if(i > 10)
 		{
 		 	spanUname.innerHTML = "Name is less than 10 characters";
 			spanUname.style.color="red";
 		}
 		else // if the user make typing true it will show something
 		{
 		 	spanUname.innerHTML = "Name is correct!!";
 			spanUname.style.color="green";
 		}
 	}

 	// this function to check user input email correct or not

 function checkEmail()
 {
  event.preventDefault();
 	var validateEmail = myForm.isEmail.value;// to get value from the typing of user
 	var spanEmail = document.getElementById('eSpan');//To replace on span
  //formular required email in javascript
	var emailCheck=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
	
 	if (validateEmail == "")// if user doesn't type something it will required
 	{
 		spanEmail.innerHTML = "Email is required";
 		spanEmail.style.color="red";
 	}
 	else if (!emailCheck.test(validateEmail))
 	{
 		spanEmail.innerHTML = "Email is invalid!";
 		spanEmail.style.color="red";
 	}
 	else
 	{
 		spanEmail.innerHTML = "Email is correct";
 		spanEmail.style.color="green";
 	}
 }	
 
//formular required textarea part

 function suggestMessage()// this function attractive onblur in textarea
 {
  var validateTextarea = myForm.textMessage.value;
  var spanMessage = document.getElementById('span_message');
  var j = validateTextarea.length; // to get length one by one of user input

  if (validateTextarea == "")
  {
    spanMessage.innerHTML = " Message is required";
    spanMessage.style.color="red";
  }
  else if (j < 20)
  {
    spanMessage.innerHTML = " Message is at least 20 characters";
    spanMessage.style.color="red";
  }
  else if ( j > 900)
  {
    spanMessage.innerHTML = " Message is less than 900 characters";
    spanMessage.style.color="red";
  }
  else
  {
    spanMessage.innerHTML = " Message is correct";
    spanMessage.style.color="green";
  }
 }

 //button contact us will alert message when user click 

 function showMessage() // this function attractive with contact button
 {
  var validateUname = myForm.isUname.value;// to get value from the typing of user
  var validateEmail = myForm.isEmail.value;// to get value from the typing of user
  var validateTextarea = myForm.textMessage.value;
  var i = validateUname.length;// to count one by one of user input
  //formular required email in javascript
  var emailCheck =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  var j = validateTextarea.length; // to get length one by one of user input
    if (validateUname == "" || validateEmail == "" || validateTextarea == "")
    {
      alert(" Sorry, the field cannot be empty!");
    }
    else if ( i < 4 || i > 10)  // warning for username input type
    {
      alert(" Sorry, your information is not correct!");
    }
    else if ( j < 20 || j > 900)// warning for message input type
    {
      alert(" Sorry, your information is not correct!");
    }
    else if (!emailCheck.test(validateEmail)) // warning for email valid type
    {
      alert(" Sorry, your information is not correct!");
    }
    else
    {
      //the user input is correct
      alert ("Thanks for your comment for improving our service");
    }
 }
