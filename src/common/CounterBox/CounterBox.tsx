import '../../app/App.css';
import {Button} from '../components/Button';
import {Counter} from "../components/Counter/Counter";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../app/store";
import {setErrorAC, setValueAC} from "../../model/counter-reducer";
import s from './CounterBox.module.css'


export const CounterBox = () => {

    const dispatch = useDispatch();

    const value = useSelector<RootState, number>(state => state.counter.value);
    const minInputValue = useSelector<RootState, number>(state => state.counter.minValue);
    const maxInputValue = useSelector<RootState, number>(state => state.counter.maxValue);
    const error = useSelector<RootState, string>(state => state.counter.error);


    const increment = () => {
        if (+value < +maxInputValue) {
            dispatch(setValueAC(+value + 1))
        }
    }

    const reset = () => {
        dispatch(setValueAC(minInputValue))
        dispatch(setErrorAC(''))
    }

    const isDone = +value === +maxInputValue

    return (
        <div className={s.counter}>
            <Counter done={isDone} error={error}/>
            <div>
                <Button
                    disabled={isDone}
                    onClick={increment}
                    className={`${s.button} ${s.inc} ${isDone ? s.disabled : ''}`}>
                    {/*className={`button inc ${isDone ? 'disabled' : ''}`}>*/}
                    inc
                </Button>
                <Button
                    disabled={!isDone}
                    className={`${s.button} ${s.res} ${!isDone ? s.disabled : ''}`}
                    onClick={reset}>
                    reset
                </Button>
            </div>
        </div>
    );
}

{/*className={`button res ${!isDone ? 'disabled' : ''}`}*/}


