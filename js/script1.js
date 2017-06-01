//--Mora da nestane id 2 pogledaj else if-->
    
       /* function myFunction() {
                            var x = document.getElementById("id1").value;
                            if (x == "11") {
                                document.getElementById("id2").style.display = "block";
                                document.getElementById("id3").style.display = "none";
                            }  else if (x=="12") {
                                document.getElementById("id2").style.display = "none";
                              document.getElementById("id3").style.display = "block";

                            }
                        }  */
    /*function myFunction()  {                 
        var x = document.getElementById("id1").value;

        switch (x) {
            case (x = "11"):
                document.getElementById("id2").style.display = "block";

                break;
                case (x!=="11"):
               document.getElementById("id2").style.display = "none";
break;
            case (x = "12"):
                document.getElementById("id3").style.display = "block";
break;


        }
    }*/
    function myFunction() {
                            var x = document.getElementById("id1").value;
                            
                            if (x == "11") {
                                document.getElementById("id2").style.display = "block";
                                document.getElementById("id3").style.display = "none";
                                document.getElementById("id4").style.display = "none";
                                document.getElementById("id5").style.display = "none";
                            }  else if (x=="12") {
                                document.getElementById("id2").style.display = "none";
                                document.getElementById("id3").style.display = "block";
                                document.getElementById("id4").style.display = "none";
                                document.getElementById("id5").style.display = "none";
                            }
                            else if (x== "13") {
                                document.getElementById("id4").style.display = "block";
                                document.getElementById("id5").style.display = "none";
                                document.getElementById("id2").style.display = "none";
                                document.getElementById("id3").style.display = "none";


                            }
                            else if (x=="14") {
                                document.getElementById("id4").style.display = "none";
                                document.getElementById("id5").style.display = "block";
                                document.getElementById("id2").style.display = "none";
                                document.getElementById("id3").style.display = "none";
                        } 
    
    }
        
