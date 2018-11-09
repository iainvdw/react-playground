import React from 'react';
import Loadable from 'react-loadable';

const LazyBar = Loadable({
  loader: () => import('../components/Bar'),
  loading: () => <div>loading...</div>,
});

const LazyBaz = Loadable({
  loader: () => import('../components/Baz'),
  loading: () => <div>loading...</div>,
});

export default function Foo(props: object) {
  return (
    <>
      <h1>This is foo</h1>
      <LazyBar />
      <LazyBaz />
    </>
  );
}
