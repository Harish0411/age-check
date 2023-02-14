     
	  let sex= prompt("Enter your gender(M or F)")
	 let age= Number(prompt("Enter your age"));
	
	 
	 if(sex=="M"){
	     if(age>=20 && age<40){
	     document.write("you are working anywhere");
		 }
		 else if(age<=60 && 40<=age){
		       document.write("You are working in only urban areas");
			}
			else{
		    document.write("ERROR");
	       }
		}
		else if(sex=="F"){
			  document.write("you are working only in urban areas")
	    }
		else{
		    document.write("ERROR");
	     }