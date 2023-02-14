import React, {FC} from "react"
import classnames from "classnames"
import './Tabs.scss'

interface ITab {
  title: string
  type: number
}

interface IProps {
  onChange: (tab: ITab) => void
  tabs: ITab[]
  selectedTab: ITab
}

export const Tabs: FC<IProps> = (
  {
    onChange,
    tabs,
    selectedTab = tabs[0]
  }
) => {
  const onSelectTab = (tab: ITab) => {
    onChange(tab)
  }

  return <div className="tabs">
    {tabs.map(tab => (
      <div key={tab.type}
           className={classnames("tabs__item", {active: tab.type === selectedTab.type})}
           onClick={() => onSelectTab(tab)}
      >
        {tab.title}
      </div>))
    }
  </div>
}
