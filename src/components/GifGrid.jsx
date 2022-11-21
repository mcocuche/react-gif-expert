// import { useEffect, useState } from "react";

// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    
    const { images, isLoading} = useFetchGifs( category );
    console.log({ isLoading});

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [])

    return (
        <>
            <h3>{ category }</h3>
            {
                // isLoading ? (<h2>Cargando...</h2>) : null
                isLoading && (<h2>Cargando...</h2>) 
            }

            <div className="card-grid">
                {
                    // images.map( ({id, title}) => (
                    //     <li key={ image.id }>{ image.title }</li>
                    // ))
                    images.map( image => (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
