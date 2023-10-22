import { Fragment, useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return
        setCategories( [newCategory, ...categories] )
    }

    return (
        <Fragment>
            <h1>Git Expert App</h1>
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))                
            }
        </Fragment>
    )
}
