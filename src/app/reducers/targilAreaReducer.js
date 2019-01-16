const initialState = {
    "rows": {
        "row0":{
            "type":"number",
            "number":63,
            "show":[1,2],
        },
        "row1":{
            "type":"operator",
            "operator":"+",
            "symbleCol":3,
            "show":[3],
        },
        "row2":{
            "type":"number",
            "number":37,
            "show":[1,2],
        },
        "row3":{
            "type":"line",
            "symbleCol":3,
        },
        "row4":{
            "type":"number",
            "number":100,
            "show":[],
        },
    }, 
    "steps": {
        "step0":{
            "highlight":{
                "row0":[0], // can be enterd as array
                "row2":[0],
            },
            "mark":{
                "type":"mono", // mono/left/right wait for one or two nombers
                "row4":[0]
            },
            "targil":{
                "tragil":"3 + 7",
                "result":10
            }
        }
    }
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