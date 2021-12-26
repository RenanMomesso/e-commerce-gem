/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcomming
// ====================================================

export interface QueryUpcomming_upcomingProducts_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcomming_upcomingProducts_category {
  __typename: "Category";
  name: string;
}

export interface QueryUpcomming_upcomingProducts {
  __typename: "Product";
  name: string;
  slug: string;
  price: number;
  cover: QueryUpcomming_upcomingProducts_cover | null;
  category: QueryUpcomming_upcomingProducts_category | null;
}

export interface QueryUpcomming_showcase_upcomingProducts_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcomming_showcase_upcomingProducts_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcomming_showcase_upcomingProducts_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcomming_showcase_upcomingProducts_highlight_background | null;
  floatImage: QueryUpcomming_showcase_upcomingProducts_highlight_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}

export interface QueryUpcomming_showcase_upcomingProducts {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcomming_showcase_upcomingProducts_highlight | null;
}

export interface QueryUpcomming_showcase {
  __typename: "Home";
  upcomingProducts: QueryUpcomming_showcase_upcomingProducts | null;
}

export interface QueryUpcomming {
  upcomingProducts: QueryUpcomming_upcomingProducts[];
  showcase: QueryUpcomming_showcase | null;
}
