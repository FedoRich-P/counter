import type {ButtonHTMLAttributes} from "react";

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
    const {className, onClick, disabled, children} = props
    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}>
            {children}
        </button>
    );
};