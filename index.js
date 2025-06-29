let string = "";

let input = document.getElementById('inputBt');
let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);
arr.forEach(button => {
     button.addEventListener('click', (e) => {


        
        /*

        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        
        */



     // here use try & catch condition 
     if (e.target.innerHTML == '=') {

       try {

         if (/[^0-9+\-*/%.() ]/.test(string)) {
            input.value = "Invalid input";
         } 
         else {
            string = eval(string);
            input.value = string;
         }

     }   
      catch (err) {
         input.value = "Syntax Error";
         string = "";
     }
       }

       
        
        else if (e.target.innerHTML == 'AC'){
             string = "";
             input.value = string;
        }
        
        else if (e.target.innerHTML == 'DE'){
           
          string = string.slice(0, -1);
          input.value = string;

        }
        
      
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
     })
})