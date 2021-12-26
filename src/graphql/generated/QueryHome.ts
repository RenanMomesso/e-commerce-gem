/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_newProducts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newProducts_category {
  __typename: "Category";
  name: string;
}

export interface QueryHome_newProducts {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryHome_newProducts_cover | null;
  category: QueryHome_newProducts_category | null;
}

export interface QueryHome_upcomingProducts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcomingProducts_category {
  __typename: "Category";
  name: string;
}

export interface QueryHome_upcomingProducts {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryHome_upcomingProducts_cover | null;
  category: QueryHome_upcomingProducts_category | null;
}

export interface QueryHome_onWished_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_onWished_category {
  __typename: "Category";
  name: string;
}

export interface QueryHome_onWished {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryHome_onWished_cover | null;
  category: QueryHome_onWished_category | null;
}

export interface QueryHome_sections_newProducts_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newProducts_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_newProducts_highlight_background | null;
  floatImage: QueryHome_sections_newProducts_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_newProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_newProducts_highlight | null;
}

export interface QueryHome_sections_popularProducts_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularProducts_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_popularProducts_highlight_background | null;
  floatImage: QueryHome_sections_popularProducts_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_popularProducts_products_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularProducts_products_category {
  __typename: "Category";
  name: string;
}

export interface QueryHome_sections_popularProducts_products {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryHome_sections_popularProducts_products_cover | null;
  category: QueryHome_sections_popularProducts_products_category | null;
}

export interface QueryHome_sections_popularProducts {
  __typename: "ComponentPagePopularProducts";
  title: string;
  highlight: (QueryHome_sections_popularProducts_highlight | null)[] | null;
  products: QueryHome_sections_popularProducts_products[];
}

export interface QueryHome_sections_favoritesProducts_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_favoritesProducts_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_favoritesProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_favoritesProducts_highlight_background | null;
  floatImage: QueryHome_sections_favoritesProducts_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_favoritesProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_favoritesProducts_highlight | null;
}

export interface QueryHome_sections_upcomingProducts_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upcomingProducts_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upcomingProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_upcomingProducts_highlight_background | null;
  floatImage: QueryHome_sections_upcomingProducts_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryHome_sections_upcomingProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_upcomingProducts_highlight | null;
}

export interface QueryHome_sections {
  __typename: "Home";
  newProducts: QueryHome_sections_newProducts | null;
  popularProducts: QueryHome_sections_popularProducts | null;
  favoritesProducts: QueryHome_sections_favoritesProducts | null;
  upcomingProducts: QueryHome_sections_upcomingProducts | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  newProducts: QueryHome_newProducts[];
  upcomingProducts: QueryHome_upcomingProducts[];
  onWished: QueryHome_onWished[];
  sections: QueryHome_sections | null;
}
