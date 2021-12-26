/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: products
// ====================================================

export interface products_products_cover {
  __typename: "UploadFile";
  url: string;
}

export interface products_products_category {
  __typename: "Category";
  name: string;
}

export interface products_products {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: products_products_cover | null;
  category: products_products_category | null;
}

export interface products {
  products: products_products[];
}

export interface productsVariables {
  limit: number;
  start: number;
}
