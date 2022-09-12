import './IconButton.scss';


const IconButton = ({beforeIcon, afterIcon, text}) => {
    return (
        <button className="IconButton">
            {
                beforeIcon ? (
                    <span className="IconButton__before">
                        {beforeIcon}
                    </span>
                ) : null
            }
            <span className="IconButton__text">{text}</span>
            {
                afterIcon ? (
                    <span className="IconButton__after">
                        {afterIcon}
                    </span>
                ) : null
            }
        </button>
    )
}

export default IconButton;