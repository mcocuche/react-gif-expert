import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([ newCategory, ...categories]);
    };

    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            // setCategories={setCategories} 
            onNewCategory={ (event) => onAddCategory(event) }
        />

        {/* Listado de Gifs */}
        {/* <button onClick={ onAddCategory }>Agregar</button> */}
        {/* <ol> */}
        { categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ))
        }
        {/* </ol> */}
    </>
  )
}
