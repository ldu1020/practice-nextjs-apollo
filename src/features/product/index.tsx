import React from "react";
import ClientProvider from "../../../graphql/client-provider";
import ProductContainer from "./components/Product/Product.container";

export default function ProductComponent() {
  return (
    <ClientProvider>
      <ProductContainer />
    </ClientProvider>
  );
}
