import { React} from 'react'
import { IoPencilSharp } from "react-icons/io5";



const ShopDisplay = ({ attribs, onEditItem }) => {

    const { name, description } = attribs

  return (
    <div className='shopdisp'>
      <section className='shopcard'>
        <img
          src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ufC5lOGXanTdQHriSbhVgT0cOH-WW0frHQ&usqp=CAU"
          alt="machine"
          width="150"
          height="150"
        />
        <section className='description'>
        <h4>{name}</h4>
        <p>{description}</p>
        {/* <button ><IoPencilSharp /></button> */}
        </section>  

      </section>

    </div>
    
  )
}
export default ShopDisplay;