import './App.css';

import { useState } from 'react';
import { useAsync } from 'react-async';

import MainScreen from './components/Main';
import Avatar from './components/Avatar';


import * as FirestoreService from './services/firestore';

// function App() {
//   if (!localStorage.getItem('userKey')) {
//     FirestoreService.createUser();
//     // .than(() => localStorage.setItem('userKey'))
//     // .catch(error =>console.log(error))
//   } else {
//     return <div></div>
//   }
//   FirestoreService.createUser()
//   .then(result => console.log(result))
//   .catch(error =>console.log(error))

//   FirestoreService.getAllScores()
//   .then(result => console.log(result))
//   .catch(error =>console.log(error))

 
// return (<div>sdfsdf</div>)
//   // if (!localStorage.getItem("userKey")) {
//   //   return <CreateUser />
//   // } else {
//   //   return <div></div>
//   //   // <CheckUser />
//   // }
// }



function App() {
  const [page, setPage] = useState("main");

  // if (!localStorage.getItem("userKey")) {
  //   createUser();
  // }
  switch (page) {
    case "main":
      return(
        <MainScreen 
          setPage = {(value) => setPage(value)}
        />
      )
    case "avatar":
      return(
        <Avatar 
        setPage = {(value) => setPage(value)}
        // transparency = {transparency}
        />
      )
    default:
      return(
        <MainScreen 
          setPage = {(value) => setPage(value)}
        />
      )
  }
  // option to remember user
  // if (localStorage.getItem("token")) {
  //   return (<CheckUser />)
  // } else {
  //   return(
  //     <LoginScreen />
  //   )
  // }
}

// function CheckUser() {
//   // check if token is valid
//   const { data, error, isLoading } = useAsync({ promiseFn: checkUser })
//   if (isLoading) return null
//   if (error) return (<h1>Something went wrong please reload page</h1>)
//   if (data) 
//     if (data.code === 200) {
//       localStorage.setItem("auth_key", data.token)
//     }
//     return(
//     <div>
//       {
//         (data.code === 200) ? (
//           <Homescreen 
//             merchantConfirmed = {data.merchant_confirmed}
//           />
//         ) : (
//           <LoginScreen />
//         )
//       }
//     </div>
//   )
// }

// function Homescreen(props) {
 
//   if(props.merchantConfirmed) {
//     return (
//       // <Main /> 
//       null
//     )
//   } else {
//     return(
//       <Demo />
//     )
//   }
 
// }

// function LoginScreen() {
//   const [page, setPage] = useState("login");
//   const [merchantConfirmed, setMerchantConfirmed] = useState(false);

//   switch (page) {
//     case "login":
//       return(
//         <Login 
//           setPage ={(value) => setPage(value)}
//           setMerchantConfirmed = {(value) => setMerchantConfirmed(value)}
//         />
//       )
//     case "homescreen":
//       return(
//         <Homescreen 
//           merchantConfirmed = {merchantConfirmed}
//         />
//       )
//     default:
//       return(
//         <Login 
//         setPage ={(value) => setPage(value)}
//         />
//       )
//   }
// }
export default App;
