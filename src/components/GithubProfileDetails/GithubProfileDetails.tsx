import React from "react";
import { GithubProfileDetailsHeader } from "./GithubProfileDetailsHeader";
import { GithubProfileInfo } from "./GithubProfileInfo";
import { GithubContributionGraph } from "../GithubContributionGraph/GithubContributionGraph";

export const GithubProfileDetails = () => {
  return (
    <div className="rounded-lg border bg-white border-gray-300 shadow-sm w-full flex flex-col">
      <GithubProfileDetailsHeader />
      <div className="p-6 flex items-center justify-center gap-8 w-full">
        <GithubProfileInfo />
        <GithubContributionGraph />
      </div>
    </div>
  );
};
