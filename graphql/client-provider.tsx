import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import * as React from "react";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allProducts: {
          keyArgs: false,
          merge(exiting = [], incoming, { args }) {
            let merged = [...exiting];
            if (incoming.length !== 0 && args) {
              if (args.perPage !== 0) {
                incoming.forEach((li: any) => {
                  const index = merged.findIndex(
                    (exitingItem) => exitingItem.__ref === li.__ref
                  );
                  index === -1
                    ? (merged[merged.length] = li)
                    : (merged[index] = li);
                });
              } else if (args && args.perPage === 0) {
                merged = incoming.filter((li: any) => {
                  const index = merged.findIndex(
                    (exitingItem) => exitingItem.__ref === li.__ref
                  );
                  return index !== -1;
                });
              }
            }
            console.log("Exiting", exiting);
            console.log("Incoming", incoming);
            console.log("merged", merged);

            return merged;
          },
        },
      },
    },
  },
});

export const client = new ApolloClient({
  uri: "http://localhost:5000",
  cache: cache,
});

export default function ClientProvider({ children }: any) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
