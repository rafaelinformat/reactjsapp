
import './styles.css';
export const TextInput = ({searchValue, handleOnChange}) => {
    return(
        <input
        className='text-input' 
        onChange={handleOnChange}
        value={searchValue}
        type="search" 
        placeholder='Type your search'/>
    );

}