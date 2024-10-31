const SET_VALUE = 'SET_VALUE';
const SET_MIN_VALUE = 'SET_MIN_VALUE';
const SET_MAX_VALUE = 'SET_MAX_VALUE';
const SET_ERROR = 'SET_ERROR';

// export type InitialState = typeof initialState

type InitialState = {
    value: number,
    maxValue: number ,
    minValue: number,
    error: string,
}

const initialState: InitialState = {
    value: 0,
    maxValue: 0 ,
    minValue: 0,
    error: '',
}



export const counterReducer = (state = initialState, action: Action): InitialState => {
    switch (action.type) {
        case SET_VALUE: {
            return {
                ...state,
                value: action.payload.value,
            }
        }
        case SET_MIN_VALUE: {
            return {
                ...state,
                minValue: action.payload.value,
            }
        }
        case SET_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.payload.value,
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload.value,
            }
        }
        default: {
            return state;
        }
    }
};

export const setValueAC = (value: number) => {
    return {type: SET_VALUE, payload: {value}} as const;
}
export const setMinValueAC = (value: number) => {
    return {type: SET_MIN_VALUE, payload: {value}} as const;
}
export const setMaxValueAC = (value: number) => {
    return {type: SET_MAX_VALUE, payload: {value}} as const;
}
export const setErrorAC = (value: string) => {
    return {type: SET_ERROR, payload: {value}} as const;
}

type SetValueAction = ReturnType<typeof setValueAC>
type MinValueAction = ReturnType<typeof setMinValueAC>
type MaxValueAction = ReturnType<typeof setMaxValueAC>
type ErrorAction = ReturnType<typeof setErrorAC>
type Action = SetValueAction| MinValueAction | MaxValueAction | ErrorAction