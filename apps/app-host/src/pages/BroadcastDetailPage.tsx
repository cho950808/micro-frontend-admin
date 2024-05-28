import AppLayout from "@/components/AppLayout";
import React, { Suspense, useState } from "react";
import { useLocation } from "react-router-dom";



const BroadcastDetailPage = () => {
  const {
    state: { campaignKey },
  } = useLocation();
  const [loadError, setLoadError] = useState(null);
  const AppDetail = React.lazy(() => import("appDetail/App").catch((e) => setLoadError(e)));

  return (
    <AppLayout>
      <Suspense fallback={"loading..."}>
        {loadError ? (
          <h3 style={{ color: "red" }}>Error loading broadcast Detail.</h3>
        ) : (
          <AppDetail campaignKey={campaignKey} />
        )}
      </Suspense>
    </AppLayout>
  );
}

export default BroadcastDetailPage;
