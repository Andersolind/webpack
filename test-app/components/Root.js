import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';

export default function Root({ title, subTitle, body }) {
  return (
    <>
      <Header title={title} />
      <Counter />
      <Post subTitle={subTitle} body={body} />
      <Footer />
    </>
  );
}
