import { 
  GET_DATA_LIST,
  GET_DATA_DETAIL,
  POST_DATA_CREATE,
  PUT_DATA_EDIT,
} from "../actions/userAction";

let initialState = {
  getDataList: false,
  errorDataList: false,
  getDataDetail: false,
  errorDataDetail: false,
  getResponData: false,
  errorResponData: false,
  title: "Rafi Fuady"
}

const cust = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_LIST:
      return {
        ...state,
        getDataList: action.payload.data,
        errorDataList: action.payload.errorMessage,
      };

    case GET_DATA_DETAIL:
      return {
        ...state,
        getDataDetail: action.payload.data,
        errorDataDetail: action.payload.errorMessage,
      }
    
    case POST_DATA_CREATE:
      return {
        ...state,
        getResponData: action.payload.data,
        errorResponData: action.payload.errorMessage,
      };
    
    case PUT_DATA_EDIT:
      return {
        ...state,
        getResponData: action.payload.data,
        errorResponData: action.payload.errorMessage
      };

      default:
        return state;
  }
};

export default cust