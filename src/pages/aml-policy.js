import React, { useState } from "react";
import Amlpolicy from "../components/Amlpolicy";
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
      <Amlpolicy />
    </>
  );
};

export default AmlpolicyPage;
