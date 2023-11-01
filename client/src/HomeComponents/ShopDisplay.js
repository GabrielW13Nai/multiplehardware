import { React} from 'react'

const ShopDisplay = ({ attribs}) => {

  const { name, description } = attribs

  return (
    <div className='shopdisp'>
        <img
          src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ufC5lOGXanTdQHriSbhVgT0cOH-WW0frHQ&usqp=CAU"
          alt="machine"
          width="100"
          height="100"/>
        <div className='description'>
          <h4>{name}</h4>
          <p className='descript'>{description}</p>
        {/* <button ><IoPencilSharp /></button> */}
        </div>

    </div>

  )
}
export default ShopDisplay;
