import React from 'react'


const MiniProduct = ({item, count}) => {
  const {title, price, color} = item

  return (
    <div className={styles.main} style={{backgroundColor: color}}>
      <p>{title} | {count}u. x ${price}</p>      
    </div>
  )
}

export default MiniProduct;