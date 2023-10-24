import './Button.css'

const Button = ({name,fun}) => {
    return(
        <button className='button' onClick={fun}>{name}</button>
    )
}

export default Button