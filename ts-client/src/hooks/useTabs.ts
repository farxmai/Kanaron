import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const index = Number(searchParams.get("tab")) || 0;
  const [tabIndex, setTabIndex] = useState(index);

  const handleSetTabIndex = (i: any) => {
    setSearchParams({ tab: i });
    setTabIndex(i);
  };
  return { tabIndex, setTabIndex: handleSetTabIndex };
};
