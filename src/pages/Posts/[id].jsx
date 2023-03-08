import Link from "next/link";
import React from "react";
import Head from "next/head";


export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );
  const paths = data.map((post) => {
    return {
      params: { id: post?.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(
    (res) => res.json()
  );

  return {
    props: { data },
  };
};

const Posts = ({ data }) => {
  return (
    <>
      <Head>
        <title>First Post Page</title>
      </Head>
      <div className="text-[26px] text-red-900">This is the Post Page</div>
      <p>{data?.title}</p>
      <p>{data?.body}</p>
      <Link href="/">
        <button>Home Page</button>
      </Link>
    </>
  );
};

export default Posts;
