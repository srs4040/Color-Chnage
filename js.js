function dochange()
{
  var text = ('Press a button');
  var r;
  if (text == true)
  {
    r= "you pressed OK!";
  }
  else
  {
      r = "You pressed cancel" ;
   }
 
  
 }


  function changecolor(){
  var dd1 =  document.getElementById("d1");
  var dd2 =  document.getElementById("d2");
    dd1.style.backgroundColor="Blue";
    dd2.style.backgroundColor="Orange";    
  dd1.className = "clg1";
  dd2.className = "clg2";
}

