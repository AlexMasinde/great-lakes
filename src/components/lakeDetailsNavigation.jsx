"use client";
import { tabs } from "@/utils/navigationTabs";
import { useState } from "react";

export function LakeDetailsNavigation({ setSelectedTab, selectedTab }) {
  return (
    <div className="flex flex-col md:flex-row mt-4 md:border-b md:border-[#ffcc00]">
      {tabs.map((tab) => {
        return (
          <NavigationTab
            key={tab.name}
            tab={tab}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        );
      })}
    </div>
  );
}

function NavigationTab({ tab, setSelectedTab, selectedTab }) {
  const { name, title } = tab;

  const isSelectedTab = name === selectedTab;

  function handleClick() {
    setSelectedTab(name);
  }

  return (
    <div
      className={`md:mr-[2px] ${
        isSelectedTab ? "md:border-b md:border-[#ffcc00]" : ""
      }`}
    >
      <div
        className={`cursor-pointer px-2 py-2 ${
          isSelectedTab ? "bg-black text-white" : "bg-[#f2f2f2] text-blacks"
        }`}
        onClick={handleClick}
      >
        <p>{title}</p>
      </div>
    </div>
  );
}
