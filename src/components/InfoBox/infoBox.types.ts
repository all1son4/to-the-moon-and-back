import { ReactNode } from "react";

export interface IInfoBoxProps {
  type?: string,
  text: string | ReactNode,
  imageUrl: string,
}