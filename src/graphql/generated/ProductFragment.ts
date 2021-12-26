/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProductFragment
// ====================================================

export interface ProductFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface ProductFragment_category {
  __typename: "Category";
  name: string;
}

export interface ProductFragment {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: ProductFragment_cover | null;
  category: ProductFragment_category | null;
}
