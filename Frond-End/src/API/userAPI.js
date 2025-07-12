import axios from 'axios';

let baseURL="https://jsonplaceholder.typicode.com/users";
let base="https://daweney.onrender.com/providers";
let getRequestes=()=> axios.get( baseURL)  ;

let addUser=(request)=> axios.post( baseURL,request)  ;
let deleteUser=(userId)=> axios.delete( `${baseURL}/${userId}`)  ;
let updateUser=(userId,request)=> axios.put( `${baseURL}/${userId}`,request)  ;
let fetchRequest=( data )=> axios.post( `${base}/getreq`,data )
let applyRequest=( data )=> axios.post( `${base}/applyreq`,data )
let cancelRequest=( data )=> axios.post( `${base}/cancelreq`,data )
let GetApp = (data)=> axios.post( `${base}/getapp`,data )
let cancelApp = (data)=> axios.post( `${base}/cancelapp`,data )




export let  userAPI={
    getRequestes,
    addUser,
    deleteUser,
    updateUser,
    fetchRequest,
    applyRequest,
    cancelRequest,
    GetApp,
    cancelApp

}