import homeData from "@/data/homeData.json";

import StatsSection from "@/app/Components/Home/StatsSection";
import CaseStudySection from "@/app/Components/Home/CaseStudySection";
import AIAdvisorySection from "@/app/Components/Home/AIAdvisorySection";
import PartnershipSection from "@/app/Components/Home/PartnershipSection";
import SolutionsSection from "@/app/Components/Home/SolutionsSection";
import GlobalOffices from "@/app/Components/Home/GlobalOffices";
import Footer from "@/app/Components/Home/Footer";
import ConsultationForm from "@/app/Components/Home/ConsultationForm";
import TechCapabilities from "@/app/Components/Home/TechCapabilities";

import HeaderBanner from "@/app/Components/Home/HeaderBanner";
import OfficialPartners from "@/app/Components/Home/OfficialPartners";
import HeroSection from "@/app/Components/Home/HeroSection";
import AwardSection from "@/app/Components/Home/AwardSection";
import ServicesSection from "@/app/Components/Home/ServicesSection";
import DiscussProject from "@/app/Components/Home/DiscussProject";
import LatestBlogs from "@/app/Components/Home/LatestBlogs";
import VideoTestimonialsSection from "@/app/Components/Home/VideoTestimonialsSection";
import OurServices from "@/app/Components/Home/OurServices";
import SoftwarePreview, { SoftwarePreview2 } from "@/app/Components/Home/SoftwarePreview";
import IndustriesSection from "@/app/Components/Home/IndustriesSection";
import WhyChooseUs from "@/app/Components/Home/WhyChooseUs";
import PartnershipExperience from "@/app/Components/Home/PartnerExpirence";
import DevelopmentProcess from "./Components/Home/DevelopmentProcess";
// import HeaderBanner2 from "./Components/Home/HeaderBanner2";

export default function Home() {
  return (
    <>
      <HeaderBanner data={homeData.headerBanner} />
      {/* <HeaderBanner2 data={homeData.headerBanner} /> */}
      <HeroSection data={homeData.heroSection} />
      {/* <AwardSection /> */}
      <OfficialPartners data={homeData.officialPartners} />
      <StatsSection data={homeData.statsSection} />
      <ServicesSection data={homeData.servicesSection} />
      <AIAdvisorySection data={homeData} />
      <OurServices data={homeData.ourServices} />
      <SoftwarePreview data={homeData.softwarePreview} />
      <TechCapabilities data={homeData.techCapabilities} />
      <DevelopmentProcess />
      <IndustriesSection data={homeData.industriesSection} />
      <WhyChooseUs data={homeData.whyChooseUs} />
      <SolutionsSection data={homeData.solutionsSection} />
      <VideoTestimonialsSection data={homeData.videoTestimonials} />
      <PartnershipExperience data={homeData.partnershipExperience} />
      <PartnershipSection data={homeData.partnershipSection} />
      <CaseStudySection data={homeData.caseStudySection} />
      <ConsultationForm />
      <LatestBlogs data={homeData.latestBlogs} />
      <DiscussProject data={homeData.discussProject} />
      {/* <GlobalOffices /> */}
      {/* <Footer /> */}
    </>
  );
}
