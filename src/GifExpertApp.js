import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['Demon Slayer','Star Wars','Lego'];
    const [categories, setCategories] = useState( [] );

    // const handleAdd = () => {
    //     setCategories([...categories,'Transformers']);
    //     //setCategories( cats => [...cats, 'Transformers' ]);
    // }

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory 
                setCategories={ setCategories }
            />

            <hr />


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key = { category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;