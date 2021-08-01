import {
     PERSONALFORM_SAVE_SUCCESS,
     PERSONALFORM_SAVE_FAIL, 
     WIVESDETAILS_SAVE_FAIL,
     WIVESDETAILS_SAVE_SUCCESS,
     FINAL_SAVE_REQUEST,
     FINAL_SAVE_SUCCESS,
     FINAL_SAVE_FAIL,
     EXECUTOR_DETAILS_SAVE_SUCCESS,
     EXECUTOR_DETAILS_SAVE_FAIL,
     CHILDREN_DETAILS_SAVE_FAIL,
     CHILDREN_DETAILS_SAVE_SUCCESS,
     GUARDIAN_DETAILS_SAVE_FAIL,
     GUARDIAN_DETAILS_SAVE_SUCCESS,
     DISTRIBUTION_DETAILS_SAVE_FAIL,
     DISTRIBUTION_DETAILS_SAVE_SUCCESS,
     REMAINDER_DETAILS_SAVE_FAIL,
     REMAINDER_DETAILS_SAVE_SUCCESS,
     OTHER_DETAILS_SAVE_SUCCESS,
     OTHER_DETAILS_SAVE_FAIL,
     PET_DETAILS_SAVE_SUCCESS,
     PET_DETAILS_SAVE_FAIL,
     BURIAL_DETAILS_SAVE_SUCCESS,
     BURIAL_DETAILS_SAVE_FAIL,
     ADDITIONAL_DETAILS_SAVE_SUCCESS,
     ADDITIONAL_DETAILS_SAVE_FAIL,
     SIGNING_DETAILS_SAVE_SUCCESS,
     SIGNING_DETAILS_SAVE_FAIL,
     VALIDATION_SAVE_SUCCESS,
     VALIDATION_SAVE_FAIL
    } from "../constants/formConstans"
import axios from 'axios'



export const savePersonalDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: PERSONALFORM_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('personalDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: PERSONALFORM_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveWivesDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: WIVESDETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('wivesDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: WIVESDETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveExecutorDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: EXECUTOR_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('executorDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: EXECUTOR_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveChildrenDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: CHILDREN_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('childrenDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: CHILDREN_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveGuardianDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: GUARDIAN_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('guardianDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: GUARDIAN_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const saveDistributionDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: DISTRIBUTION_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('distributionDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: DISTRIBUTION_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}



export const saveRemainderDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: REMAINDER_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('remainderDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: REMAINDER_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const saveOtherDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: OTHER_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('otherDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: OTHER_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const savePetDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: PET_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('petDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: PET_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveBurialDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: BURIAL_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('burialDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: BURIAL_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveAdditionalDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: ADDITIONAL_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('additionalDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: ADDITIONAL_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const saveSigningDetails =(data)=>async(dispatch)=>{
  
    try{
       

    dispatch({
        type: SIGNING_DETAILS_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('signingDetails', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: SIGNING_DETAILS_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const saveValidationDetails =(dat)=>async(dispatch)=> {
  
    try{
        const {data} = await axios.post(process.env.REACT_APP_API_URL+'/willcreation/createwill', dat)


    dispatch({
        type: VALIDATION_SAVE_SUCCESS,
        payload: data
    })
    localStorage.setItem('selfies', JSON.stringify(data))
}
catch(error){
    dispatch({
        type: VALIDATION_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}


export const createForm = (dat) => async(dispatch) => { 
    try{
        dispatch({
            type: FINAL_SAVE_REQUEST
        })

        const {data} = await axios.post('/willcreation/createwill', dat)

        dispatch({
            type: FINAL_SAVE_SUCCESS,
            payload: data
        })

        localStorage.setItem('final', JSON.stringify(dat));

        removeLatestWillFromLocalStorage();
}
catch(error){
    dispatch({
        type: FINAL_SAVE_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
}
}

export const removeLatestWillFromLocalStorage = () => {
    localStorage.removeItem("personalDetails");
    localStorage.removeItem("wivesDetails");
    localStorage.removeItem("executorDetails");
    localStorage.removeItem("childrenDetails");
    localStorage.removeItem("guardianDetails");
    localStorage.removeItem("distributionDetails");
    localStorage.removeItem("remainderDetails");
    localStorage.removeItem("otherDetails");
    localStorage.removeItem("petDetails");
    localStorage.removeItem("burialDetails");
    localStorage.removeItem("additionalDetails");
    localStorage.removeItem("signingDetails");
    localStorage.removeItem("selfies");
    localStorage.removeItem("final");
    console.log("Items Removed From Local Storage")
}

