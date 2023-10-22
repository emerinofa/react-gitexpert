// React
import { Fragment } from "react"
// Importaciones de terceros

// Nuestro codigo
import { GifItem } from "./GifItem"

// Funciones que no sean componentes ocultos
import { useFetchGifs } from "../hooks/useFetchGifs"



export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category)

    return (
        <Fragment>

            <h3>{ category }</h3>
            {   //si isLoading esta en true va ejecutar la segunda parte 
                // si esta en false lo que regresa ya no continua haciendo las demas evaluaciones
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map((image)=> (
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        / >
                    ))
                }
            </div>

        </Fragment>
    )
}
