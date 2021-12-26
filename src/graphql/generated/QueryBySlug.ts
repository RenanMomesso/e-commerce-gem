/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryBySlug
// ====================================================

export interface QueryBySlug_products_cover {
  __typename: "UploadFile";
  src: string;
}

export interface QueryBySlug_products_gallery {
  __typename: "UploadFile";
  src: string;
  label: string | null;
}

export interface QueryBySlug_products_category {
  __typename: "Category";
  name: string;
}

export interface QueryBySlug_products {
  __typename: "Product";
  id: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  price: number;
  cover: QueryBySlug_products_cover | null;
  gallery: QueryBySlug_products_gallery[];
  category: QueryBySlug_products_category | null;
}

export interface QueryBySlug {
  products: QueryBySlug_products[];
}

export interface QueryBySlugVariables {
  slug?: string | null;
}
