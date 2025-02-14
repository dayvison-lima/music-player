
import SingleItem from './SingleItem'
import { Link, useLocation } from 'react-router-dom'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
    const { pathname } = useLocation()
    const isHome = pathname === '/'

    const finalItens = isHome ? items : Infinity

  return (
    <div>
        <div className='item-list'>
            <div className="item-list__header">
                <h2>{title} populares</h2>
                {
                    isHome ? (
                        <Link className='item-list__link' to={path}>
                            Mostrar tudo
                        </Link>
                    ) : (
                        <></>
                    )
                }
                
            </div>
            <div className='item-list__container'>
                {
                    itemsArray
                    .filter((current, index) => index < finalItens)
                    .map((currObj, index) => (
                    <SingleItem
                    {...currObj}
                    idPath={idPath}
                     key={`${title}-${index}`}
                 />))
                }                
            </div>
        </div>
    </div>
  )
}

export default ItemList