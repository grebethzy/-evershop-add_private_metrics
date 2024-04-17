import ProductList from '@components/frontStore/catalog/product/list/List';
import PropTypes from 'prop-types';
import React from 'react';

export default function FeaturedProducts({ collection, customer, addClickViewApi }) {
  if (!collection) {
    return null;
  }
  return (
    <div className="pt-3">
      <div className="page-width">
        <h3 className="mt-3 mb-3 text-center uppercase h5 tracking-widest">
          {collection.name}
        </h3>
        <ProductList products={collection.products.items} countPerRow={4} 
        customer_id={customer ? customer.customerId : -1} customer_email={customer ? customer.email : ''} 
        addClickViewApi={addClickViewApi}/>
      </div>
    </div>
  );
}

FeaturedProducts.propTypes = {
  collection: PropTypes.shape({
    collectionId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    products: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.number.isRequired,
          sku: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.shape({
            regular: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired,
            special: PropTypes.shape({
              value: PropTypes.number.isRequired,
              text: PropTypes.string.isRequired
            }).isRequired
          }).isRequired,
          image: PropTypes.shape({
            alt: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
          }).isRequired,
          url: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  }).isRequired,
  customer: PropTypes.shape({
    customerId: PropTypes.number, 
    fullName: PropTypes.string, 
    email: PropTypes.string
  }), 
  addClickViewApi: PropTypes.string.isRequired
};

FeaturedProducts.defaultProps = {
  customer: PropTypes.shape({
    customerId: -1, 
    fullName: '',
    email: ''
  })
}

export const layout = {
  areaId: 'content',
  sortOrder: 15
};

export const query = `
  query query {
    collection (code: "homepage") {
      collectionId
      name
      products (filters: [{key: "limit", operation: "=", value: "4"}]) {
        items {
          productId
          name
          sku
          price {
            regular {
              value
              text
            }
            special {
              value
              text
            }
            }
          image {
            alt
            url: listing
          }
          url
          urlKey
        }
      }
    }

    customer: currentCustomer {
      customerId
      fullName
      email
    }

    addClickViewApi: url(routeId: "addClickView")
    
  }
`;
