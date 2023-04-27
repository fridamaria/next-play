import React from "react";
import Layout from "@/components/layout";
import Button from "@/components/button";

export default function Buttons() {
  return (
    <Layout>
      <section>
        <h2 className="text-3xl mb-2">Buttons</h2>
        <div className="mb-4">
          <h3 className="uppercase font-semibold text-gray-800 mb-2">Sizes</h3>
          <Button size="large" className="mr-4">Large</Button>
          <Button className="mr-4">Regular</Button>
          <Button size="small">Small</Button>
        </div>
        <div className="mb-4">
          <h3 className="uppercase font-semibold text-gray-800 mb-2">Variants</h3>
          <Button className="mr-4">Regular</Button>
          <Button variant="outline" className="mr-4">Outline</Button>
          <Button variant="ghost" className="mr-4">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="mb-4">
          <h3 className="uppercase font-semibold text-gray-800 mb-2">Disabled</h3>
          <Button disabled className="mr-4">Regular</Button>
          <Button variant="outline" disabled className="mr-4">Outline</Button>
          <Button variant="ghost" disabled className="mr-4">Ghost</Button>
          <Button variant="link" disabled className="mr-4">Link</Button>
        </div>
      </section>
    </Layout>
  )
}
