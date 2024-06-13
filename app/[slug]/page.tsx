import { Ping } from '#/components/ping';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import TestGenerateStaticParams from '#/components/test-generate-statics-params';
import React, { Suspense } from 'react';

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const languages = ['en', 'fr'];

  return languages.map((language) => ({
    slug: language,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const language = params.slug;
  return (
    <div className="space-y-8 lg:space-y-14">
      {/* <SingleProduct  /> */}
      <TestGenerateStaticParams language={language} />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
