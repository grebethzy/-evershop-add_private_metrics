import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

const handleProductClick = async (product_id, url_key, customer_id, customer_email, addClickViewApi) => {
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

const logView = async (product_id, url_key, customer_id, customer_email, addClickViewApi) => {
  const isView = true; 
  const viewDetails = {
    isView, 
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
    body: JSON.stringify(viewDetails),
    credentials: 'include'
  });

  const data = await response.json();
  if (!data.success) {
    console.error(data.message); 
  } 
};

function Name({ name, url, product_id, url_key, customer_id, customer_email, addClickViewApi }) {
  useEffect(() => {
    logView(product_id, url_key, customer_id, customer_email, addClickViewApi);
  }, [product_id, url_key, customer_id, customer_email, addClickViewApi]);

  return (
    <div className="product-name product-list-name mt-1 mb-025">
      <a href={url} className="font-bold hover:underline h5" onClick={() => handleProductClick(product_id, url_key, customer_id, customer_email, addClickViewApi)}>
        <span>{name}</span>
      </a>
    </div>
  );
}

Name.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  product_id: PropTypes.number.isRequired,
  url_key: PropTypes.string, 
  customer_id: PropTypes.number, 
  customer_email: PropTypes.string, 
  addClickViewApi: PropTypes.string.isRequired
};

Name.defaultProps = {
  url: '',
  name: '',
  url_key: '', 
  customer_id: -1,
  customer_email: ''
};

export { Name };
