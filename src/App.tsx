import React from "react";
import { Provider } from "react-redux";
import { RootRoute } from "./routes";
import { store } from "./store";
import { PageWrapper } from "./templates/PageWrapper";

export const App: React.FC = () => {
  return (
  <Provider store={store}>
     <PageWrapper>
      <RootRoute />
   </PageWrapper>
  </Provider>
  )
}