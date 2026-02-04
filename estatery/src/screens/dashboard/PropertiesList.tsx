"use client";

import * as React from "react";
import { DashboardLayout } from "@/components/dashboard";
import { AddPropertyModal } from "@/components/dashboard/AddPropertyModal";
import {
  PropertiesPageHeader,
  ListingViewsChart,
  PropertyListedDonut,
  PropertyListingTable,
} from "@/components/dashboard/properties";
import { properties } from "@/lib/properties";
import type { Property } from "@/lib/properties";

const TABLE_PROPERTIES = properties.filter(
  (p) => p.views != null && p.lastUpdated
) as Property[];
const DEFAULT_TABLE: Property[] =
  TABLE_PROPERTIES.length > 0 ? TABLE_PROPERTIES : (properties.slice(0, 5) as Property[]);

export default function PropertiesList() {
  const [addModalOpen, setAddModalOpen] = React.useState(false);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl space-y-6">
        <PropertiesPageHeader onAddProperty={() => setAddModalOpen(true)} />

        <div className="grid gap-4 sm:grid-cols-2">
          <ListingViewsChart />
          <PropertyListedDonut />
        </div>

        <PropertyListingTable properties={DEFAULT_TABLE} />
      </div>
      <AddPropertyModal open={addModalOpen} onClose={() => setAddModalOpen(false)} />
    </DashboardLayout>
  );
}
