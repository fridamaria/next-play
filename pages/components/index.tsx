import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section>
        <p>Components</p>
        <Link href="/components/buttons">Buttons</Link>
      </section>
    </Layout>
  )
}
