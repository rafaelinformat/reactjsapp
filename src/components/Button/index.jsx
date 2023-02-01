import './styles.css'
export const Button = ({btnText, handleOnClick, disabled}) =>{
    return(
        <button  
            className='button'
            onClick={handleOnClick} 
            disabled = {disabled}>
             {btnText}
         </button>
    );
}