import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';
import { formReducer, FinalFormReducer} from './reducers/formReducer'

const reducer = combineReducers({
    
    form: formReducer,
    final: FinalFormReducer
    
})


const personalDetailsFromStorage = localStorage.getItem('personalDetails') ? JSON.parse(localStorage.getItem('personalDetails')) : {}
const wivesDetailsFromStorage = localStorage.getItem('wivesDetails') ? JSON.parse(localStorage.getItem('wivesDetails')) : {}
const executorDetailsFromStorage = localStorage.getItem('executorDetails') ? JSON.parse(localStorage.getItem('executorDetails')) : {}
const childrenDetailsFromStorage = localStorage.getItem('childrenDetails') ? JSON.parse(localStorage.getItem('childrenDetails')) : {}
const distributionDetailsFromStorage = localStorage.getItem('distributionDetails') ? JSON.parse(localStorage.getItem('distributionDetails')) : {}
const remainderDetailsFromStorage = localStorage.getItem('remainderDetails') ? JSON.parse(localStorage.getItem('remainderDetails')) : {}
const otherDetailsFromStorage = localStorage.getItem('otherDetails') ? JSON.parse(localStorage.getItem('otherDetails')) : {}
const petDetailsFromStorage = localStorage.getItem('petDetails') ? JSON.parse(localStorage.getItem('petDetails')) : {}
const burialDetailsFromStorage = localStorage.getItem('burialDetails') ? JSON.parse(localStorage.getItem('burialDetails')) : {}
const additionalDetailsFromStorage = localStorage.getItem('additionalDetails') ? JSON.parse(localStorage.getItem('additionalDetails')) : {}
const signingDetailsFromStorage = localStorage.getItem('signingDetails') ? JSON.parse(localStorage.getItem('signingDetails')) : {}
const guardianDetailsFromStorage = localStorage.getItem('guardianDetails') ? JSON.parse(localStorage.getItem('guardianDetails')) : {}
const validationDetailsFromStorage = localStorage.getItem('selfies') ? JSON.parse(localStorage.getItem('selfies')) : {}


const initialState = {
    form: {
        personalDetails: personalDetailsFromStorage,
        wivesDetails: wivesDetailsFromStorage,
        executorDetails: executorDetailsFromStorage,
        childrenDetails: childrenDetailsFromStorage,
        distributionDetails: distributionDetailsFromStorage,
        remainderDetails: remainderDetailsFromStorage,
        otherDetails: otherDetailsFromStorage,
        petDetails: petDetailsFromStorage,
        burialDetails: burialDetailsFromStorage,
        additionalDetails: additionalDetailsFromStorage,
        signingDetails: signingDetailsFromStorage,
        guardianDetails: guardianDetailsFromStorage,
        selfies: validationDetailsFromStorage
        
    }
}


const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;