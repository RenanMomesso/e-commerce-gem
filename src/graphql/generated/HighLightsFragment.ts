/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HighLightsFragment
// ====================================================

export interface HighLightsFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighLightsFragment_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HighLightsFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighLightsFragment_background | null;
  floatImage: HighLightsFragment_floatImage | null;
  buttonLink: string;
  buttonLabel: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT;
}
