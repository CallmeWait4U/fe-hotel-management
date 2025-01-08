import { JSX } from "react";

export type ImageObject = {
  id: string;
  url: string;
  title?: string;
  description?: string;
};

export type CardObject = {
  img: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

export type BreadcrumbObject = {
  name: string;
  route?: string;
}