import '../../app/App.css';
import {Button} from '../components/Button';
import {ChangeEvent, useEffect} from "react";
import {Input} from "../components/Input";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../app/store";
import {setErrorAC, setMaxValueAC, setMinValueAC, setValueAC} from "../../model/counter-reducer";
import s from './CalculationBox.module.css'


export const CalculationBox = () => {
    const minValueFromLS = JSON.stringify(localStorage.getItem('minValue'))
    const maxValueFromLS = JSON.stringify(localStorage.getItem('maxValue'))
    const valueFromLS = JSON.stringify(localStorage.getItem('value'))

    let startMaxValue = localStorage ? JSON.parse(maxValueFromLS) : 0
    let startMinValue = localStorage ? JSON.parse(minValueFromLS) : 0
    let startValue = localStorage ? JSON.parse(valueFromLS) : 0

    const dispatch = useDispatch();

    useEffect(() => {
        if (startMaxValue && startMinValue && startValue) {
            dispatch(setMinValueAC(startMinValue))
            dispatch(setMaxValueAC(startMaxValue))
            dispatch(setValueAC(startValue))
        }
    }, []);

    const value = useSelector<RootState, number>(state => state.counter.value);
    const minInputValue = useSelector<RootState, number>(state => state.counter.minValue);
    const maxInputValue = useSelector<RootState, number>(state => state.counter.maxValue);
    const error = useSelector<RootState, string>(state => state.counter.error);

    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = (+e.currentTarget.value)
        if (inputValue < 0 || inputValue >= maxInputValue) {
            dispatch(setMinValueAC(inputValue))
            dispatch(setErrorAC(`${inputValue} is too big`))
            return;
        }
        dispatch(setMinValueAC(inputValue))
        dispatch(setErrorAC(''))
    }

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        if (maxValue <= minInputValue) {
            dispatch(setMaxValueAC(startMaxValue))
            dispatch(setErrorAC(`${maxValue} is too small`))
            return
        }
        dispatch(setMaxValueAC(maxValue))
        dispatch(setErrorAC(''))
    }

    const setInputValue = () => {
        dispatch(setValueAC(minInputValue))
        saveToLS()
    }

    const saveToLS = () => {
        localStorage.setItem('minValue', `${minInputValue}`)
        localStorage.setItem('maxValue', `${maxInputValue}`)
        localStorage.setItem('value', `${value}`)
    }

    return (
        <div className={s.counter}>
            <ul className={s.listItem}>
                <li className={s.item}>
                    <h4 className={s.title}>Max Value :</h4>
                    <Input
                        className={error ? s.error : ''}
                        value={maxInputValue}
                        type={'number'}
                        onChange={setMaxValue}/>
                </li>
                <li className={s.item}>
                    <h4 className={s.title}>Start Value :</h4>
                    <Input
                        className={error ? s.error : ''}
                        value={minInputValue}
                        type={'number'}
                        onChange={setMinValue}/>
                </li>

            </ul>
            <Button
                onClick={setInputValue}
                className={`${s.button} ${s.inc}`}>
                set
            </Button>
        </div>
    );
}
