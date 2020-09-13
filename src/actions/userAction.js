import axios from "axios";

export const GET_DATA_LIST = "GET_DATA_LIST";
export const GET_DATA_DETAIL = "GET_DATA_DETAIL";
export const POST_DATA_CREATE = "POST_DATA_CREATE";
export const PUT_DATA_EDIT = "PUT_DATA_EDIT";

export const getDataList = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/api/customers/")
      .then(function (response) {
        dispatch({
          type: GET_DATA_LIST,
          payload: {
            data: response.data.result.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_DATA_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDataDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "http://127.0.0.1:8000/api/customers/" +id
      )
      .then(function (response) {
        dispatch({
          type: GET_DATA_DETAIL,
          payload: {
            data: response.data.result.data[0],
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_DATA_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postDataCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
         "http://127.0.0.1:8000/api/customers/",
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: POST_DATA_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_DATA_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putDataUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
         "http://my-json-server.typicode.com/afifbasya/reactjs-redux/users/"+id,
        data
      )
      .then(function (response) {
        console.log(response);
        
        dispatch({
          type: PUT_DATA_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_DATA_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteData = (id) => {
  return (dispatch) => {
    axios
      .delete(
         ""+id
      )
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        
      });
  };
};


export const deleteDataDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_DATA_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });


    dispatch({
      type: POST_DATA_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
