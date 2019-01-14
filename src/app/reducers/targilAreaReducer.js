const initialState = {
    "rows": {
        "row0":{
            "type":"number",
            "number":63,
        },
        "row1":{
            "type":"operator",
            "operator":"+",
        },
        "row2":{
            "type":"number",
            "number":37,
        },
        "row3":{
            "type":"line",
            "numberWidth":2,
        },
        "row4":{
            "type":"number",
            "number":100,
        },
    },

        
  }

const targilAreaReducer = (
    state = initialState, action) => {
    switch (action.type) {
        case "targilInfo":
            state = {
                ...state,
                rows: action.payload
            }
            break;
    }
    return state
};//what acton accured

export default targilAreaReducer;