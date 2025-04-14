import React from "react";
import { ReviewPeopleList } from "./review-people-list.tsx/review-people-list";

export default function Companies() {
  return (
    <div className="px-6 md:px-12 lg:px-14 border-x border-border h-[120px] max-w-6xl mx-auto">
      <ReviewPeopleList />
    </div>
  );
}
