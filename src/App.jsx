import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import routes from "./router";
import HelloWord from "@/components/HelloWord";

const App = memo(() => {
  return (
    <div>
      <HelloWord />
      <Suspense fallback="loading">
        <div>
          page
          {useRoutes(routes)}
        </div>
      </Suspense>
    </div>
  );
});

export default App;
