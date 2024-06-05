import React, { useState } from "react";
import HeroSection from "../components/AmlPolicyHeroSection/index";
import InfoSection from "../components/AmlPolicyInfoSection";
import { AmlPolicyObjOne, AmlPolicyObjThree, AmlPolicyObjTwo } from "../components/AmlPolicyInfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AmlpolicyPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AmlPolicyHeroSection />
      <Amlpolicy />
      <AmlPolicyInfoSection {...AmlPolicyeObjOne} />
      <AmlPolicyInfoSection {...AmlPolicyObjTwo} />
      <AmlPolicyInfoSection {...AmlPolicyObjThree} />
    </>
  );
};

export default AmlpolicyPage;




