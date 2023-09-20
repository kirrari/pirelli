'use client';

import Header, { TOP_HEADER_HEIGHT } from '@/components/Header';
import PageContent from './components/PageContent';

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <Header />
      <main className={`h-[calc(100%-${TOP_HEADER_HEIGHT}px)]`}>
        <PageContent />
      </main>
    </div>
  );
}
