import { useState } from 'react';

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
    //const onInputChange = (event) => {    
        // console.log( event.target.value );
        // setInputValue( event.target.value );
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => {onInputChange(event)} }
                onChange={ onInputChange }
            />
        </form>
    )
}
