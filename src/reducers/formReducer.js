import {ADDITIONAL_DETAILS_SAVE_REQUEST, BURIAL_DETAILS_SAVE_REQUEST, CHILDREN_DETAILS_SAVE_REQUEST,
    DISTRIBUTION_DETAILS_SAVE_REQUEST,
     EXECUTOR_DETAILS_SAVE_REQUEST, 
     FINAL_SAVE_FAIL, 
     FINAL_SAVE_REQUEST,
      FINAL_SAVE_SUCCESS,
       GUARDIAN_DETAILS_SAVE_REQUEST, 
       OTHER_DETAILS_SAVE_REQUEST, 
       PERSONALFORM_SAVE_REQUEST , 
       PET_DETAILS_SAVE_REQUEST, 
       REMAINDER_DETAILS_SAVE_REQUEST, 
       SIGNING_DETAILS_SAVE_REQUEST, 
       VALIDATION_SAVE_REQUEST, 
       WIVESDETAILS_SAVE_REQUEST} from "../constants/formConstans"


export const formReducer =(state={
    personalDetails: {},
    wivesDetails:{},
    executorDetails:{},
    childrenDetails:{},
    guardianDetails:{},
    distributionDetails:{},
    remainderDetails:{},
    otherDetails:{},
    petDetails:{},
    burialDetails:{},
    additionalDetails:{},
    signingDetails:{},
    selfies:[],
    final:{}
    
}, action)=>{
    switch(action.type){
        
        case PERSONALFORM_SAVE_REQUEST:
            return {
                ...state,
                personalDetails: action.payload,
            }
        case WIVESDETAILS_SAVE_REQUEST:
            return {
                    ...state,
                    wivesDetails: action.payload,
                }
        case EXECUTOR_DETAILS_SAVE_REQUEST:
            return {
                     ...state,
                     executorDetails: action.payload,
            }
        case CHILDREN_DETAILS_SAVE_REQUEST:
                return{
                    ...state,
                    childrenDetails: action.payload
                }
                case GUARDIAN_DETAILS_SAVE_REQUEST:
                    return{
                        ...state,
                        guardianDetails: action.payload
                    }
           
        case DISTRIBUTION_DETAILS_SAVE_REQUEST:
            return{
                ...state,
                distributionDetails: action.payload
           
         }

         case REMAINDER_DETAILS_SAVE_REQUEST:
            return{
                ...state,
                remainderDetails: action.payload
           
         }

         case OTHER_DETAILS_SAVE_REQUEST:
            return{
                ...state,
                otherDetails: action.payload
           
         }

         case PET_DETAILS_SAVE_REQUEST:
         return{
             ...state,
             petDetails: action.payload
         }
         case BURIAL_DETAILS_SAVE_REQUEST:
            return{
                ...state,
                burialDetails: action.payload
            }
            case ADDITIONAL_DETAILS_SAVE_REQUEST:
                return{
                    ...state,
                    additionalDetails: action.payload
                }
               
       
                case SIGNING_DETAILS_SAVE_REQUEST:
                    return{
                        ...state,
                        signingDetails: action.payload
                    }
                    case VALIDATION_SAVE_REQUEST:
                        return{
                            ...state,
                            selfies: action.payload
                        }
                   
           
            default:
            return state
    }
}

export const FinalFormReducer =(state={}, action)=>{
    switch(action.type){
        case FINAL_SAVE_REQUEST:
            return {
                loading: true,
            }
        case FINAL_SAVE_SUCCESS:
            return {
                loading: false,
                success: true,
                final: action.payload
            }
            case FINAL_SAVE_FAIL:
                return {
                    loading: false,
                    error: action.payload
                }
       
            default:
            return state
    }
}
