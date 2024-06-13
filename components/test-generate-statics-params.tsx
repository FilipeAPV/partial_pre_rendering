import React from 'react';

type TestGenerateStaticParamsProps = {
  language: string;
};

export default async function TestGenerateStaticParams({
  language,
}: TestGenerateStaticParamsProps) {
  const isProd = process.env.NODE_ENV === 'production';
  const domain = isProd
    ? 'https://app-router-api.vercel.app'
    : 'http://localhost:3000';

  const product = await fetch(`http://localhost:3000/api/cnb/${language}`);
  const data = await product.json();
  const message = data.message;
  console.log(message);
  return <div>{message}</div>;
}
