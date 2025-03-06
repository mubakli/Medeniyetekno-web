import AboutMobileLayout from "@/components/layouts/AboutMobileLayout";
import AboutDesktopLayout from "@/components/layouts/AboutDesktopLayout";
import AboutTrial from "@/components/layouts/AboutTrial";

export default function About() {
  return (
    <>
      <AboutTrial></AboutTrial>
      {/* <div className="block md:hidden">
        <AboutMobileLayout />
      </div>
      <div className="hidden md:block">
        <AboutDesktopLayout />
      </div> */}
    </>
  );
}
