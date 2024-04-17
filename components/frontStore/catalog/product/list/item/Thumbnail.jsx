import PropTypes from 'prop-types';
import React from 'react';
import '@components/frontStore/catalog/product/list/item/Thumbnail.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';

const handleProductClick = async (product_id, url_key, customer_id, customer_email, addClickViewApi) => {
    // Send the click data to your server
    const newRow = {
      customer_id, 
      customer_email,
      product_id,
      url_key
    }; 
  
    const response = await fetch(addClickViewApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRow),
      credentials: 'include'
    });
  
    const data = await response.json();
    if (!data.success) {
      console.error(data.message); 
    } 
  };

function Thumbnail({ url, imageUrl, alt, product_id, url_key, customer_id, customer_email, addClickViewApi }) {
  return (
    <div className="product-thumbnail-listing">
      {imageUrl && (
        <a href={url}>
          <img src={imageUrl} alt={alt} />
        </a>
      )}
      {!imageUrl && (
        <a href={url} onClick={() => handleProductClick(product_id, url_key, customer_id, customer_email, addClickViewApi)}>
          <ProductNoThumbnail width={100} height={100} />
        </a>
      )}
    </div>
  );
}

Thumbnail.propTypes = {
  alt: PropTypes.string,
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  product_id: PropTypes.number.isRequired,
  url_key: PropTypes.string, 
  customer_id: PropTypes.number, 
  customer_email: PropTypes.string,
  addClickViewApi: PropTypes.string.isRequired
};

Thumbnail.defaultProps = {
  alt: '',
  imageUrl: '',
  url: '',
  url_key: '', 
  customer_id: -1,
  customer_email: ''
};

export { Thumbnail };