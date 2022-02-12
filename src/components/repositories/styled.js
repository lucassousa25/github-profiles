import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 10px;
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
  
  padding: 10px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  
  &:focus {
    outline: none;
  }
  
  &.is-selected {
    background-color: #fff;
    border: 1px solid #ccc;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #fff;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;