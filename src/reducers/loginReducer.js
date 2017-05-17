const initialState = {
    status: false 
};

function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case "login": 
            return Object.assign( 
                    {}, 
                    state, 
                    { status: true }
            );
        default:
            return state;
    }
};

export default LoginReducer;