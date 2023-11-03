import { Person } from './person';
import { useEffect, useState, useSyncExternalStore } from "react";
import {data,people} from '../../data';

// const Lis= ({name}) =>{
//   // console.log(name)
//   return (
//     <div >
//       <h2>{name}</h2>
//       <button onClick={deletename}>delete</button></div>
//   )

// }
// const deletename = ()=>{

// }
// const ErrorExample = () => {

//   // console.log(people)
//   const [person,setPerson]=useState(
//     {
//       name:"peter",
//       age:2,
//       hobby:"read books"
//     }
//   )
//   const display = ()=>{
//     setPerson({...person,name:'susan'})
//   }

//   const [name,setName]=useState("susan");
//   const [age,setAge]=useState(0);
//   const [hobby,setHobby]=useState("travel");
//   const [value,setValue]=useState(0)
//   const [count,setCount]=useState(data);
//   const handleClick = () =>{
//     // count=count+1;
//     // setCount(count+1)
//     // console.log(count)
//     setCount([])
//   }
//   const handleRemove = (id) =>{
//     setCount(count.filter((p)=>p.id!==id))
//   }
//   const changePerson =()=>{
//     setName("anthobu")
//     setAge(3)
//     setHobby("watch")
//   }
//   const handleIncrement = () =>{
//     setValue((currentState)=>{
//       const newState = currentState+1
//       console.log(currentState,newState)
//       return newState

//     })
//   }
  
//   return (
//   <div className="section">
//     {/* <h1>{count}</h1> */}
//     {count.map((p)=>{
//       return (
//         // <Lis {...p} key={p.id}/>
//         <div key={p.id}><h2>{p.name}</h2>
//         <button type="button" onClick={()=>handleRemove(p.id)}>remove</button></div>
//       )
//     })}
//     <div><h3>{name}</h3>
//     <h3>{age}</h3>
//     <h3>{hobby}</h3></div>
//     <button type="button" onClick={changePerson}>change</button>
//     <button type="button" onClick={handleClick} className="btn"> Increment</button>
//     <h1>{value}</h1>
//     <button  type="button" onClick={handleIncrement}>value</button>
//   </div>)
// };




// const url = 'https://api.github.com/users';

// // const FetchData = () => {
// //   return <h2>fetch data example</h2>;
// // };
// // export default FetchData;

// const ErrorExample = () =>{

//   const[firstValue,setFirstValue]=useState([])
//   // const [secondValue,setSecondValue]=useState(0)

//   useEffect(()=>{

//     const res = async ()=>{
//       try{
//         const response =   await fetch(url);
//         const users= await response.json()
//         console.log(users )
//         setFirstValue(users)

//       }
//       catch(error){
//         console.log(error)
//       }
      
//     }
//     res()
//     // console.log(res)
//   },[])

//   // useEffect(()=>{
//   //   console.log("hi")
//   // },[])

//   return(
//     <div>
//       <h1>hi</h1>
//       <ul className="users">
//         {/* {firstValue.map((user)=>{
//           console.log(user)
//           return ( <li>list</li>)
//         })} */}

// {firstValue.map((user) => {
//           const { id, login, avatar_url, html_url } = user;
//           return (
//             <li key={id}>
//               <img src={avatar_url} alt={login} />
//               <div>
//                 <h5>{login}</h5>
//                 <a href={html_url}>profile</a>
//               </div>
//             </li>
//           );
//         })}
//       </ul>
//       {/* <button type="button" onClick={()=>{setFirstValue(firstValue+1)}}>clickme</button> */}
//       {/* <p>{secondValue}</p>
//       <button type="button" onClick={()=>{setSecondValue(secondValue+1)}}>clickme</button> */}
//     </div>
//   )

// }


// const url = 'https://api.github.com/users/QuincyLarson';
// const ErrorExample=()=>{
//   const [user,setUser]=useState(null)
//   const [isLoading,setIsLoading]=useState(true)
//   const [iserror,setError]=useState(false)

//   useEffect(()=>{

//     // setTimeout(()=>{
//     //     //done fetchin gdaatda
//     //     setIsLoading(false)
//     // },3000)

//     const fetchdata = async   () =>{
//       try{
//       const response = await fetch(url)
//       const users= await response.json()
//       setUser(users)
//       console.log(users)
      
//       setError(false)
//       }
//       catch(error){
//         setError(true)
//         console.log(error)
//       }
//       setIsLoading(false)

//     }
    
//     fetchdata();
//   },[])

//   if(isLoading){
//     return <h2>loading...</h2>
//   }
//   if(iserror){
//     return <h2>error</h2>
//   }
//   return (
//     <div>
//       <img src={user.avatar_url}/>
//       <p>{user.name}</p>
//       <p>{user.company}</p>
//     </div>

//   )

// }


// const ErrorExample =()=>{
//   const [text, setText] = useState('');
//   // truthy
//   const [name, setName] = useState('susan');
//   const [user, setUser] = useState({ name: 'john' });
//   const [isEditing, setIsEditing] = useState(false);

//   return (<div>
//     <h2>{text||'defaultvalue'}</h2>
//     {user&&<SomeComponent name={user.name}/>}
//     <h2>operator</h2>
//     <button>{isEditing?'edit':'add'}</button>
//     {user ? <div><h4>hello there {user.name}</h4></div>:<div><h4>plaese login</h4></div>}
//     </div>)


    
// }


// const SomeComponent = ({name})=>{

//   return(
//     <div>
//       <h2>whatever</h2>
//       <h2>{name}</h2>
//     </div>
//   )


// }


// const ErrorExample = () => {

//   const [isLoading,setIsLoading]=useState(null)
//   const toggle =()=>{
//     console.log(isLoading)
//     if(!isLoading){
//       login()
//     }
//     else{
//     logout()}
//   }
//   const login=()=>{
//     setIsLoading({name:'ayush'})
//   }
//   const logout=()=>{
//     setIsLoading(null)
//   }


//   return (<div>
//     {isLoading?`hi user ${isLoading.name}`:`please lgin`}
//      <button onClick={toggle}>{isLoading?'Logout':'login'}</button>
//      {/* {isLoading?<SomeComponent name={isLoading}/>:<div>no</div>} */}
//     </div>)
 
// };

// export default ToggleChallenge;

// const ErrorExample = () =>{

//   return (
//     <div>
//       {
//         people.map((p)=>{
//           return (<Person  key={p.id} {...p}   />)

//         })
//       }
//     </div>
//   )
// }





// const ErrorExamples = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   // const handleChange = (e) => {
//   //   // for now we won't use it
//   //   const name = e.target.name;
//   //   const value = e.target.value;
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // do something
//     console.log(name, email);
//   };
//   return (
//     <form className='form' onSubmit={handleSubmit}>
//       <h4>controlled inputs</h4>
//       <div className='form-row'>
//         <label htmlFor='name' className='form-label'>
//           name
//         </label>
//         <input
//           type='text'
//           className='form-input'
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           id='name'
//         />
//       </div>
//       <div className='form-row'>
//         <label htmlFor='email' className='form-label'>
//           Email
//         </label>
//         <input
//           type='email'
//           className='form-input'
//           id='email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <button type='submit' className='btn btn-block'>
//         submit
//       </button>
//     </form>
//   );
// };

// const ErrorExample = ()=>{

//   const [n,setN]=useState('')
//   const [user,setUser]=useState(data)


//   const handleSubnit = (e)=>{
//     e.preventDefault();
    
//     if(!n) return;
//     const fakeId= Date.now();
//     const newUser = {
//       id:fakeId,
//       name:n
//     }
//     const updatedsUser=[...user,newUser]
//     setUser(updatedsUser)
//     setN('')
//   }

//   const removeUsser=(id)=>{
//     const updatedsUser=user.filter((u)=>u.id!==id)
//     setUser(updatedsUser)
//   }
//   return(
//     <div>
//     <form className='' onSubmit={handleSubnit}>
//       <h4>controlled inputs</h4>
//       <div>
//       <label htmlFor='name'>name</label>
//       <input type="text" value={n} id='name' onChange={(e)=>{setN(e.target.value)}}/>


//       </div>
//       <div>
//         <button type="submit" >submit</button>
//       </div>
     
//     </form>

//     <div>
//       {user.map((u)=>{
//         return( <div key={u.id}>{u.name}
//         <button onClick={()=>{removeUsser(u.id)}}>remove</button></div>)
//       })}
//     </div>
//     </div>
//   )
// }

// const frameworks = ['df','react', 'angular', 'vue', 'svelte'];
// const ErrorExample = ()=>{

//   const [shipping,setshipping]=useState(false)
//   const [framework,setFramework] =useState('angular')
//   const handleShipping =(e)=>{
//     console.log(e.target.checked)
//     setshipping(e.target.checked)

//   }

//   const handleFramework =(e)=>{
//     console.log(e.target.value)
//     // setFramework(e.target.value)
//     // setshipping(e.target.checked) 

//   }


//   return (
//     <div>
//       <form className='form'>
//         <h4>Other Inputs</h4>
//         {/* name */}
//         <div className='form-row' style={{ textAlign: 'left' }}>
//           <label htmlFor='shipping'> Free Shipping </label>
//           <input type="checkbox" name="shipping" id='shipping'
//           checked={shipping} onChange={handleShipping}/>
//         </div>
//         <div className='form-row' style={{ textAlign: 'left' }}>
//           <label htmlFor='framework' className='form-label'>
//             Framework
//           </label>
//           {/* <input type="checkbox" name="framework" id='framework' 
//           checked={framework}/>
//            */}
//            <select name="framework" id="framework" value={framework} onChange={handleFramework}>
//             {frameworks.map((framewqork)=>{
//               return(<option key={framewqork}>{framewqork}</option>)
//             })}
//            </select>
//         </div>
//         <button type='submit' className='btn btn-block'>
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };


const ErrorExample =()=>{
  
}

export default ErrorExample;