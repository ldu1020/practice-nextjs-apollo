import React from "react";
import ClientProvider from "../../../graphql/client-provider";
import CategoryContainer from "./components/Category/Category.container";

export default function CategoryComponent() {
  return (
    <ClientProvider>
      <CategoryContainer />
    </ClientProvider>
  );
}
