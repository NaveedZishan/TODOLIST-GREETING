import React from 'react'
// }else(){
    
    
    //     greetings="Good Evening";
    
    // }
    
    
    function MyGreetings() {
        
        let Time=new Date(2022, 12, 31, 20);
        Time=Time.getHours();
        let greetings=""
        
        if(Time>=1 && Time<12){
        
            greetings="Good Morning";
        }else if(Time>=12 && Time<19)
        {
            greetings="Good AfterNoon";
        }else{
            greetings="Good Night";


        }





  return (
    <div>


<h1> {greetings},<br/>Dear,<br /> Naveed Sheikh</h1>

    </div>
  )
}

export default MyGreetings