'use client';

import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import PackageCard from "@/components/packageCard";

export default function Home() {
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: 'Basic plan',
      description: 'Our most popular plan.',
      price: 10,
      benefits: [
        'Access to all basic features',
        'Basic reporting and analytics',
        'Up to 10 individual users',
        '20GB individual data each user',
        'Basic chat and email support',
      ]
    },
    {
      id: 2,
      name: 'Business plan',
      description: 'Growing teams up to 20 users.',
      price: 20,
      benefits: [
        '200+ integrations',
        'Advanced reporting and analytics',
        'Up to 20 individual users',
        '40GB individual data each user',
        'Priority chat and email support',
      ]
    },
    {
      id: 3,
      name: 'Enterprise plan',
      description: 'Advanced features + unlimited users.',
      price: 40,
      benefits: [
        'Advanced custom fields',
        'Audit log and data history',
        'Unlimited individual users',
        'Unlimited individual data',
        'Personalized+priority service',
      ]
    }
  ])
  
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-center -mt-24 px-20 pb-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-4 md:px-8">
          {
            packages.map(item => (
              <PackageCard key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
