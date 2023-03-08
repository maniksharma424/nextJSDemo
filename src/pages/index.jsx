import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { FC } from "react";


export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  );

  return {
    props: {
      data,
    },
  };
}

export default function Home({data}) {
  return (
    <>
    <ul className="flex flex-col">
    {data.map(post=>
    <Link key={post.id} href={"/Posts/" + post?.id}><button className="p-2 bg-white text-black">
      {post?.id}
    </button></Link>)}
    </ul>
      {console.log(data)}
    </>
  );
}
