function Validation()
{
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var Password=document.getElementById("pwd").value;
  var age=document.getElementById("age").value;
  var gender=document.getElementById("gender").value;
  var Country=document.getElementById("Country").value;


  if( name.length==" ")
  {
    alert (" Plz enter Username");
    return false;}

  else if(name.length<3)
  {
    alert ("username minimum 4 char required");
  }
  else if(name.length>13)
  {
    alert ("Maximum 12 letters");
  }
  else if(email.length==" ")
  {
    alert("enter email")
  }
  if(age<18)
  {
    alert("You age should be 18+")
  }
  if (document.reg.gender[0].checked==false && document.reg.gender[1].checked==false)
  {
    alert ("Select gender");
    return false;
  }
  if (document.reg.Country.value=="0")
  {
    alert ("select Country");
    return false;
  }
  if(Password.length<3)
  {
    alert("enter strong password ")
  }

  else{
    alert ("Registered Successfully");
    return true;
  }
}
