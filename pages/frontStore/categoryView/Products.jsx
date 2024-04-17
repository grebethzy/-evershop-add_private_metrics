import PropTypes from 'prop-types';
import React from 'react';
import ProductList from '@components/frontStore/catalog/product/list/List';
import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function Products({
  products: {
    products: { items }
  }, customer, addClickViewApi
}) {
  return (
    <div>
      <ProductList products={items} countPerRow={3} 
      customer_id={customer ? customer.customerId : -1} customer_email={customer ? customer.email : ''} 
      addClickViewApi={addClickViewApi}/>
      <span className="product-count italic block mt-2">
        {_('${count} products', { count: items.length })}
      </span>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.shape({
    products: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          productId: PropTypes.number,
          url: PropTypes.string,
          price: PropTypes.shape({
            regular: PropTypes.shape({
              value: PropTypes.float,
              text: PropTypes.string
            }),
            special: PropTypes.shape({
              value: PropTypes.float,
              text: PropTypes.string
            })
          }),
          image: PropTypes.shape({
            alt: PropTypes.string,
            listing: PropTypes.string
          })
        })
      )
    })
  })
};

Products.defaultProps = {
  products: {
    products: {
      items: []
    }
  }
};

export const layout = {
  areaId: 'rightColumn',
  sortOrder: 25
};

export const query = `
  query Query($filters: [FilterInput]) {
    products: category(id: getContextValue('categoryId')) {
      products(filters: $filters) {
        items {
          ...Product
        }
      }
    }

    customer: currentCustomer {
        customerId
        fullName
        email
      }
  
    addClickViewApi: url(routeId: "addClickView")
  }`;

export const fragments = `
  fragment Product on Product {
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
`;

export const variables = `
{
  filters: getContextValue('filtersFromUrl')
}`;