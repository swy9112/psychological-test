// app/components/ClientRouter.js
'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientRouter() {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === 'production';  // 배포 환경 구분

  useEffect(() => {
    const basePath = isProduction ? '/psychological-test' : '';
    const currentPath = window.location.pathname;

    // 새로고침인지 확인 (performance.getEntriesByType 사용)
    const [navigationEntry] = performance.getEntriesByType('navigation');

    if (navigationEntry && navigationEntry.type === 'reload' && currentPath !== `${basePath}/`) {
      router.replace(`/`);  // 새로고침 시 루트 경로로 리다이렉트
    }
  }, [router, isProduction]);

  return null;
}
