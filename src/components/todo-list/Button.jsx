import propTypes from 'prop-types';
import style from './Button.module.css'

const Button = ({name, fun, task}) => {
  
    const handleClick = () => {
        fun({task})
    }
  
    return (
        <button onClick={handleClick} className={style.input}>{name}</button>
    )
}

Button.propTypes = {
    name : propTypes.string.isRequired,
    fun : propTypes.func.isRequired,
    task : propTypes.object.isRequired
}

export default Button