import React from "react";
import Layout from "@/components/layout";
import { FaGithub, FaHeart, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <section className="min-h-screen min-w-full flex items-center justify-center bg-dark-beige">
        <p>Playground</p>
      </section>
      
      <section className="min-w-full @container">
        <section className="block @3xl:grid @3xl:grid-cols-3 min-h-screen">
          <div className="min-h-[30vh] flex items-center justify-center bg-lake-blue">
            <p>About</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-light-beige">
            <p>Game</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-lemon-yellow">
            <Link href="/components">Components</Link>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-dark-beige">
            <p>Time</p>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-light-white">
          <div className="grid grid-cols-1 h-40 w-40">
          <div className="row-start-1 col-start-1 bg-gradient-to-r from-lemon-yellow to-dark-beige blur-2xl bg-animate rounded-3xl"></div>
          <div className="text-white row-start-1 col-start-1 z-0 flex items-center justify-center">
            <FaHeart size={80}/>
          </div>
        </div>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-japan-blue">
            <FaGithub size={80} className="text-dark-beige hover:scale-110"/>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center bg-lemon-yellow">
            <FaLinkedinIn size={80} className="text-japan-blue hover:scale-110"/>
          </div>
          <div className="min-h-[33vh] flex items-center justify-center col-span-2 bg-lake-blue">
            <p>Bye</p>
          </div>
        </section>
      </section>
    </Layout>
  )
}
