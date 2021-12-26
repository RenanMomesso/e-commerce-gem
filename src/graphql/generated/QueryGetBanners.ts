/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGERIBBON_COLOR } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryGetBanners
// ====================================================

export interface QueryGetBanners_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGetBanners_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryGetBanners_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
}

export interface QueryGetBanners_banners {
  __typename: "Banner";
  image: QueryGetBanners_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryGetBanners_banners_button | null;
  ribbon: QueryGetBanners_banners_ribbon | null;
}

export interface QueryGetBanners_newProducts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGetBanners_newProducts_category {
  __typename: "Category";
  name: string;
}

export interface QueryGetBanners_newProducts {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryGetBanners_newProducts_cover | null;
  category: QueryGetBanners_newProducts_category | null;
}

export interface QueryGetBanners {
  banners: QueryGetBanners_banners[];
  newProducts: QueryGetBanners_newProducts[];
}
