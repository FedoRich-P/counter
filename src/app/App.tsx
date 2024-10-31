import './App.css';
import {CounterBox} from "../common/CounterBox/CounterBox";
import {CalculationBox} from "../common/CalculationBox/CalculationBox";


function App() {
    return (
        <div className="App">
            <CalculationBox/>
            <CounterBox/>
        </div>
    );
}

export default App;

// const minValueFromLS = JSON.stringify(localStorage.getItem('minValue'))
// const maxValueFromLS = JSON.stringify(localStorage.getItem('maxValue'))
// const valueFromLS = JSON.stringify(localStorage.getItem('value'))
//
// let startMaxValue = localStorage ? JSON.parse(maxValueFromLS) : 0
// let startMinValue = localStorage ? JSON.parse(minValueFromLS) : 0
// let startValue = localStorage ? JSON.parse(valueFromLS) : 0
//
// const dispatch = useDispatch();
//
// useEffect(() => {
//     if (startMaxValue && startMinValue && startValue) {
//         dispatch(setMinValueAC(startMinValue))
//         dispatch(setMaxValueAC(startMaxValue))
//         dispatch(setValueAC(startValue))
//     }
// }, []);
//
// const value = useSelector<RootState, number>(state => state.counter.value);
// const minInputValue = useSelector<RootState, number>(state => state.counter.minValue);
// const maxInputValue = useSelector<RootState, number>(state => state.counter.maxValue);
// const error = useSelector<RootState, string>(state => state.counter.error);
//
// const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
//     const inputValue = (+e.currentTarget.value)
//     if (inputValue < 0 || inputValue >= maxInputValue) {
//         dispatch(setMinValueAC(inputValue))
//         dispatch(setErrorAC(`${inputValue} is too big`))
//         return;
//     }
//     dispatch(setMinValueAC(inputValue))
//     dispatch(setErrorAC(''))
// }
//
// const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
//     const maxValue = +e.currentTarget.value
//     if (maxValue <= minInputValue) {
//         dispatch(setMaxValueAC(startMaxValue))
//         dispatch(setErrorAC(`${maxValue} is too small`))
//         return
//     }
//     dispatch(setMaxValueAC(maxValue))
//     dispatch(setErrorAC(''))
// }
//
// const setInputValue = () => {
//     dispatch(setValueAC(minInputValue))
//     saveToLS()
// }
//
// const saveToLS = () => {
//     localStorage.setItem('minValue', `${minInputValue}`)
//     localStorage.setItem('maxValue', `${maxInputValue}`)
//     localStorage.setItem('value', `${value}`)
// }

// const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
//     const inputValue = (+e.currentTarget.value)
//     console.log()
//     if (inputValue >= 0) {
//         setValue(0);
//         setMinInputValue(inputValue.toString())
//         setError(false)
//     }
//     if (inputValue < 0 || inputValue >= +maxInputValue) {
//         setError(true);
//         setValue('Incorrect value')
//         setMinInputValue(inputValue.toString())
//     }
// }


// console.log(maxInputValue)
// console.log(minInputValue)
//
// console.log(error)

//
// const [value, setValue] = useState<number | string>(startMinValue);
// const [minInputValue, setMinInputValue] = useState(startMinValue);
// const [maxInputValue, setMaxInputValue] = useState(startMaxValue);
// const [error, setError] = useState(false);

// const increment = () => {
//     if (value < +maxInputValue) {
//         setValue(+value + 1)
//     }
// }


// const reset = () => {
//     setValue(0);
//     setMinInputValue('')
//     setMaxInputValue('')
//     setError(false);
// }

