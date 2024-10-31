import {useSelector} from "react-redux";
import type {RootState} from "../../../app/store";
import s from './Counter.module.css'

type CounterProps = {
    error: string
    done: boolean;
};
export const Counter = ({done, error}: CounterProps) => {

    const value = useSelector<RootState, number>(state => state.counter.value);

    return (
        <div className={s.value}>
                    <span
                        className={done ? s.isDone : ''}>
                        {!!error ? error : value}</span>
        </div>
    );
};