import './button.css';

const Button = ({
    buttonName,
    onClick,
    disabled
}) => {


    return(
        <button
            className="btn"
            onClick={onClick}
            disabled={disabled}
        >   
        {buttonName}
        </button>
    )
}

export default Button;