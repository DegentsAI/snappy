import AboutAreaOne from "@/components/AboutAreaOne";
import BannerOne from "@/components/BannerOne";
import BlockChainGalleryAreaOne from "@/components/BlockChainGalleryAreaOne";
import CreatorAreaOne from "@/components/CreatorAreaOne";
import FeatureAreaOne from "@/components/FeatureAreaOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import HelpCenterInner from "@/components/HelpCenterInner";
import PartnerAreaOne from "@/components/PartnerAreaOne";
import TestimonialAreaOne from "@/components/TestimonialAreaOne";
import TopAuctionAreaOne from "@/components/TopAuctionAreaOne";
import TopSellerAreaOne from "@/components/TopSellerAreaOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Snappy",
  description:
    "snappy",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* FeatureAreaOne */}
      {/* <FeatureAreaOne /> */}

      {/* TopSellerAreaOne */}
      <TopSellerAreaOne />

      {/* AboutAreaOne */}
      <AboutAreaOne />

      {/* TopAuctionAreaOne */}
      {/* <TopAuctionAreaOne /> */}

      {/* BlockChainGalleryAreaOne */}
      {/* <BlockChainGalleryAreaOne /> */}

      {/* CreatorAreaOne */}
      <CreatorAreaOne />

      {/* TestimonialAreaOne */}
      {/* <TestimonialAreaOne /> */}

      {/* PartnerAreaOne */}
      {/* <PartnerAreaOne /> */}
      <HelpCenterInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
