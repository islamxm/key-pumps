import './Button.scss';

const Button = ({text, active, variant, style}) => {
    return (
        <button className={"Button " + variant} style={style}>
            <span className="Button__text">
                {text}
            </span>
        </button>
    )
}


export default Button;