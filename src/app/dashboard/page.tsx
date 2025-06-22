"use client";
import React from "react";
import {
  GithubProfileDetails,
  RepoCarousel,
  SearchRepo,
  IncomingDocumentation,
} from "@/components";

const DashboardPage = () => {
  return (
    <main className="min-h-screen w-full bg-gray-50 pt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <GithubProfileDetails />
          <SearchRepo />
        </div>
        <RepoCarousel />
        <IncomingDocumentation />
      </div>
    </main>
  );
};

export default DashboardPage;
