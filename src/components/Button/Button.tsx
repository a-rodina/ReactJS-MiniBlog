import './Button.css';
import { TButton } from '../../types/types';

function Button({content, buttonState, typeButton}: TButton) {
    return (
        <>
        <button disabled={buttonState} className={typeButton} type='button'>{content}</button>
        </>
    );
}

export default Button;
