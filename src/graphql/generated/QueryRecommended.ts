/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
  title: string;
  subtitle: string;
  background: QueryRecommended_recommended_section_highlight_background | null;
  buttonLabel: string;
  buttonLink: string;
  floatImage: QueryRecommended_recommended_section_highlight_floatImage | null;
}

export interface QueryRecommended_recommended_section_products_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_products_category {
  __typename: "Category";
  name: string;
}

export interface QueryRecommended_recommended_section_products {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryRecommended_recommended_section_products_cover | null;
  category: QueryRecommended_recommended_section_products_category | null;
}

export interface QueryRecommended_recommended_section {
  __typename: "ComponentPagePopularProducts";
  title: string;
  highlight: (QueryRecommended_recommended_section_highlight | null)[] | null;
  products: QueryRecommended_recommended_section_products[];
}

export interface QueryRecommended_recommended {
  __typename: "Recommended";
  section: QueryRecommended_recommended_section | null;
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null;
}
