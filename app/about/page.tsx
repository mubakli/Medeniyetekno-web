import AboutMobileLayout from "@/components/layouts/AboutMobileLayout";
import AboutDesktopLayout from "@/components/layouts/AboutDesktopLayout";

export default function About() {
  return (
    <>
      <div className="block lg:hidden">
        <AboutMobileLayout />
      </div>
      <div className="hidden lg:block">
        <AboutDesktopLayout />
      </div>
    </>
  );
}
