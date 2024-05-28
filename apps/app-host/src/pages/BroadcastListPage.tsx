import React, { useEffect, useState, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';

const BroadcastListPage = () => {
  const navigate = useNavigate();
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    let app = { unmount: () => {} };

    async function mountAppFeed() {
      try {
        // @ts-ignore
        const { mount } = await import('appFeed/mount');
        app = mount();
      } catch (e) {
        console.error('Failed to mount appFeed:', e);
        setLoadingError(e);
      }
    }

    mountAppFeed();

    return () => {
      app?.unmount();
    };
  }, []);

  useEffect(() => {
    const goToBroadcastDetail = (event : CustomEvent<{ campaignKey: String }>) => {
      const { campaignKey } = event.detail;
      navigate(`/${campaignKey}`, { state: { campaignKey } });
    };

    window.addEventListener('item-click', goToBroadcastDetail);

    return () => {
      window.removeEventListener('item-click', goToBroadcastDetail);
    };
  }, [navigate]);

  return (
    <AppLayout>
      {loadingError ? <h3 style={{color: "red"}}>Error loading broadcast list.</h3> : <div id="app-feed" />}
    </AppLayout>
  );
};

export default BroadcastListPage;