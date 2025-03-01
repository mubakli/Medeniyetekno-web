import AboutMobileLayout from "@/components/layouts/AboutMobileLayout";
import AboutDesktopLayout from "@/components/layouts/AboutDesktopLayout";

export default function About() {
  return (
    <>
      <div className="block md:hidden">
        <AboutMobileLayout />
      </div>
      <div className="hidden md:block">
        <AboutDesktopLayout />
      </div>
    </>
  );
}
