import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex gap-5">
      <div className="relative w-[200px] space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <div className="h-[280px] w-[175px] rounded-lg bg-neutral-600" />
        <div className="space-y-3">
          <div className="h-5 w-full rounded-full bg-neutral-600" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
