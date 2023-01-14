
let flag=false;
// GET THE DETAILS

window.addEventListener("DOMContentLoaded",()=>{
	axios.get("http://localhost:3000/get-user")
.then((response)=>{
 // console.log(response)
  response.data.allUsers.forEach((ele) => {
	showNewUseronScreen(ele);
   
})
    }) 
        .catch((err)=>{
            console.log(err)
		})
		//console.log(data);
})

//POST THE DETAILS


function additem(event){
	event.preventDefault();
  let id = document.getElementById('id').value;
	let name=document.getElementById('username').value;
	let phonenumber=document.getElementById('phn').value;
	let age=document.getElementById('Age').value;
	let address=document.getElementById('addr').value;
   
	
	let userdetails={
    id,	name, phonenumber, age,address
	}
	console.log(userdetails);

  postRequest=async()=>{
    try{
 if(flag==false){
    const response= await axios.post("http://localhost:3000/add-user",userdetails);
    console.log(response);
    console.log(response.data.newUserDetail);
    location.reload();
    showNewUseronScreen(response.data.newUserDetail);
    return;
 }
 else
 {
  console.log(userdetails.id);

    const response=await axios.post(`http://localhost:3000/edit-user/${id}`,userdetails);
    console.log(response.data);
    flag=false;
    location.reload();

}
 
    }
 catch(err){
    document.body.innerHTML= document.body.innerHTML+"<h4>Something went wrong</h4>"
    console.log(err)
}

}
postRequest();
  }


//DISPLAY ON THE SCREEN 

function showNewUseronScreen(user){
 
	const parentNode=document.getElementById('users');
	console.log(user.id);
	const child=`<li id=${user.id}>${user.name} , ${user.phonenumber} , ${user.Age} , ${user.address}
    <button onclick=deleteuser('${user.id}')>DELETE</button>
 <button onclick=edituser('${user.name}','${user.phonenumber}','${user.age}','${user.address}','${user.id}')>EDIT</button>
	
	 </li>`
	parentNode.innerHTML=parentNode.innerHTML+child;
}

//EDIT THE USERDETAILS

function edituser(NAME,PHN,AGE,ADDRESS,id)
{
    flag=true;
   
document.getElementById('username').value=NAME;
document.getElementById('phn').value=PHN;
document.getElementById('Age').value=AGE;
document.getElementById('addr').value=ADDRESS;
document.getElementById('id').value=id;
// deleteuser(userid)
}


//DELETE USERDETAILS FROM THE BACKEND

function deleteuser(id){
    console.log(id)
   
    axios.delete(`http://localhost:3000/delete-user/${id}`)
	.then((response)=>{
        removeUserFromScreen(id)
        console.log(response);
     
    })
    .catch((err)=>{
        console.log(err)
    })
      
}


//DELETE USERDETAILS FROM THE SCREEN

function removeUserFromScreen(id){
	const parentNode=document.getElementById('users');
  const child1=document.getElementById(id);
  if(child1){
  parentNode.removeChild(child1);
}
}



