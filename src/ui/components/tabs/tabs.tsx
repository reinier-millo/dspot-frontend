/**
 * Tabs component
 */
import '../../../styles/components/tabs.scss';
import { useState } from 'react';

const TabsComponent = ({
  tabs,
  childrens,
  className,
}: {
  tabs: string[];
  childrens: React.ReactNode[];
  className?: string;
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row gap-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`h-8 w-[65px] flex justify-center tab ${selectedTab === index ? 'tab__active' : ''}`}
            onClick={() => setSelectedTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content grow p-7 custom-scrollbar overflow-y-auto">
        {childrens[selectedTab]}
      </div>
    </div>
  );
};

export default TabsComponent;
