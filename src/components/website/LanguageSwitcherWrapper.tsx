import React, { Suspense } from "react";
import LanguageSwitcherCountryName from "./LanguageSwitcherCountryName";

interface Props {
  paramKey?: string;
}

const LanguageSwitcherFallback = () => (
  <div style={{ minHeight: "44px", background: "#f0f0f0", borderRadius: "4px" }} />
);

export const LanguageSwitcherWrapper: React.FC<Props> = ({ paramKey = "lang" }) => {
  return (
    <Suspense fallback={<LanguageSwitcherFallback />}>
      <LanguageSwitcherCountryName paramKey={paramKey} />
    </Suspense>
  );
};

export default LanguageSwitcherWrapper;
