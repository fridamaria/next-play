import React from "react";
import Layout from "@/components/layout";
import Button from "@/components/button";
import { FaStar } from "react-icons/fa";

export default function Buttons() {
  return (
    <Layout>
      <section>
        <h2 className="text-3xl mb-2">Buttons</h2>
        <div className="mb-4">
          <h3 className="uppercase font-semibold text-gray-800 mb-2">Sizes</h3>
          <div className="flex">
            <Button size="large" className="mr-4">Large</Button>
            <Button className="mr-4">Regular</Button>
            <Button size="small">Small</Button>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="uppercase font-semibold text-gray-800 mb-2">Variants</h3>
          <div className="flex">
            <Button className="mr-4">Regular</Button>
            <Button className="mr-4 inline-flex items-center">
              <FaStar className="w-4 h-4 mr-2"/>
              Icon
            </Button>
            <Button variant="outline" className="mr-4">Outline</Button>
            <Button variant="ghost" className="mr-4">Ghost</Button>
            <Button variant="link">Link</Button>
            <div className="flex items-center">
              <Button className="border-l rounded-r-none">One</Button>
              <Button className="border-l border-r rounded-none ">Two</Button>
              <Button className="border-r rounded-l-none">Three</Button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="uppercase font-semibold text-gray-800 mb-2">Disabled</h3>
          <div className="flex">
            <Button disabled className="mr-4">Regular</Button>
            <Button disabled className="mr-4 inline-flex items-center">
                <FaStar className="w-4 h-4 mr-2"/>
                Icon
              </Button>
            <Button variant="outline" disabled className="mr-4">Outline</Button>
            <Button variant="ghost" disabled className="mr-4">Ghost</Button>
            <Button variant="link" disabled className="mr-4">Link</Button>
            <div className="flex items-center">
              <Button disabled className="border-l rounded-r-none">One</Button>
              <Button disabled className="border-l border-r rounded-none ">Two</Button>
              <Button disabled className="border-r rounded-l-none">Three</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
