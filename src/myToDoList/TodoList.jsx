import React,{useState} from 'react'
function TodoList() {
const[list,setList]=useState([])
const[items,setItems]=useState([])
const handleClick=()=>{
  setList((prevState)=>[...prevState,items])
  console.log(list);
// setList("")

}

 const deleteEvent=(disp)=>{


  const fltr=list.filter((index)=> index!==disp)
setList(fltr)
// console.log(disp)
 }

  return (
    <>
<div className='main-div'>
<div className='inner-div'>
  
<h3>To Do List</h3>
<input placeholder='Add items to the List' onChange={(e)=>(setItems(e.target.value))}/>
<button onClick={handleClick}> Add</button>
{

  
list.map((disp,index) =>{
return(
<div key={index}>    

{/* <h3>{disp}   </h3> */}

<ul>

<li>  {disp} </li>

</ul>

 <button onClick={()=>deleteEvent(disp ,index)}> Delete</button> 

</div>

)})
  
}
  <div/>

</div>
</div>
    </>
  )
}

export default TodoList