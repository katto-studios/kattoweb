import { ComponentProps } from "react";
import { CardContainer } from "./3d-card";

export function Card(props: ComponentProps<"div">) {
  return (
    <CardContainer
      className="border rounded-xl p-8 shadow-lg space-y-8 flex flex-col h-full hover:shadow-blue-200 hover:shadow-2xl"
      {...props}
    />
  );
}
