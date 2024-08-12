import './Button.css';

interface IButton {
    content: string,
    buttonState: boolean,
    typeButton: string
}

function Button({content, buttonState, typeButton}: IButton) {
    return (
        <>
        <button disabled={buttonState} className={typeButton} type='button'>{content}</button>
        </>
    );
}

export default Button;
