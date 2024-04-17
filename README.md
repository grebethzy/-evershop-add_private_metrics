# Add private metrics extension for EverShop by @thenguyen

This extension is implemented based on another npm package - Evershop @thenguyen. 

It allows you to track the essential e-commerce user actions: view, click, add to cart, checkout and order. 

> **Note**: This extension requires EverShop version 1.0.0-rc.9 or higher.

## Installation guide

### Step 0: Install the Evershop application

There are three approaches to install the Evershop application, please refer to: 
- NPM package published: https://www.npmjs.com/package/@evershop/evershop 
- Github repository: https://github.com/evershopcommerce/evershop

### Step 1: Install the extension using npm:

```bash
npm i addPrivateMetrics
```

### Step 2: Enable the extension

Edit the `config/default.json` file in the root directory of your EverShop installation and add the following line to the `extensions` section:

```json
{
  ...,
  "system": {
    ...,
    "extensions": [
      ...,
      {
        "name": "addPrivateMetrics",
        "resolve": "node_modules/addPrivateMetrics",
        "enabled": true,
        "priority": 10
      }
    ]
  }
}
```

## Testing guide

The extension has preloaded some products for testing purpose. It also pre-set the shipping zone to include the US. 
User can directly create a new account and perform the five actions, which will be reflected in the backend database.
Use ```psql -U postgres -d evershop``` to check the updates. 

