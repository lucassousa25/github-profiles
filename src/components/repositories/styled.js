import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
  background: #eee;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 10px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  color: #fff;
  margin: 8px 15px;
  background-color: #225ed8;
  
  &:focus {
    outline: none;
  }
  
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  .rec.rec-arrow {
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ddd;
  }
  
  .rec.rec-arrow:hover {
    background-color: #225ed8;
    color: #fff;
  }
  
  .rec.rec-arrow:disabled {
      visibility: hidden;
  }
  .rec-carousel-item:focus {
      outline: none;
      box-shadow: inset 0 0 1px 1px #111;
  }

  .rec-dot_active {
    background-color: #225ed8;
    box-shadow: 0 0 1px 3px #225ed8;
  }
`;