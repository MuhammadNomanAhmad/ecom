export const ENDPOINTS = {
    AUTH: {
      LOGIN: '/auth/login',
      REGISTER: '/auth/register',
    },
    PRODUCTS: {
      LIST: '/products',
      DETAIL: (id: string) => `/products/${id}`,
      SEARCH: '/products/search',
    },
    CART: {
      GET: '/cart',
      ADD_ITEM: '/cart/items',
    },
  } as const;