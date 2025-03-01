"use client";

import MainDesktopLayout from "../components/layouts/MainDesktopLayout";
import MainMobileLayout from "../components/layouts/MainMobileLayout";

export default function Home() {
  return (
    <div>
      <div className="hidden lg:block">
        <MainDesktopLayout />
      </div>
      <div className="block lg:hidden">
        <MainMobileLayout />
      </div>
    </div>
  );
}
