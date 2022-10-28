import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { globalrefscontext } from "../contenxt/globalRefs";
import Footer from "./Footer";
import { useRouter } from "next/router";
import MenuLogic from "./MenuLogic";
import ScrollWrapper from "./ScrollWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  const Globalrefs = useContext(globalrefscontext);

  if (!Globalrefs) return null;
  const { contentRef } = Globalrefs;

  return (
    <div>
      <MenuLogic />
      <ScrollWrapper>
        <div
          className="relative z-[3]"
          ref={contentRef as React.MutableRefObject<HTMLDivElement>}
        >
          {children}
        </div>
        <Footer />
      </ScrollWrapper>
    </div>
  );
}
