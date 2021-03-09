import React, { useState } from 'react'

// Shop Data
import { SHOP_DATA } from './shop.data'

// Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  )
}

export default ShopPage
