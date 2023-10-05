import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex gap-5">
      <div className="relative w-[300px] space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <div className="h-[300px] w-[275px] rounded-lg bg-neutral-600" />
        <div className="space-y-3">
          <div className="h-5 w-full rounded-full bg-neutral-600" />
          {/* <div className="space-y-1">
            <div className="h-4 w-full rounded-full bg-neutral-600 shadow" />
            <div className="h-4 w-full rounded-full bg-neutral-600 shadow" />
            <div className="h-4 w-full rounded-full bg-neutral-600 shadow" />
            <div className="h-4 w-7/12 rounded-full bg-neutral-600 shadow" />
          </div> */}
          {/* <div className="flex gap-2">
            <div className="h-5 w-16 rounded-full bg-neutral-600" />
            <div className="h-5 w-12 rounded-full bg-neutral-600" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
