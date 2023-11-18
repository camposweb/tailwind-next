'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem value="1" title="my Details" isSelected={currentTab === '1'} />
        <TabItem value="2" title="Profile" isSelected={currentTab === '2'} />
        <TabItem value="3" title="Password" isSelected={currentTab === '3'} />
        <TabItem value="4" title="Team" isSelected={currentTab === '4'} />
        <TabItem value="5" title="Plan" isSelected={currentTab === '5'} />
        <TabItem value="6" title="Email" isSelected={currentTab === '6'} />
        <TabItem
          value="7"
          title="Notifications"
          isSelected={currentTab === '7'}
        />
        <TabItem
          value="8"
          title="Integrations"
          isSelected={currentTab === '8'}
        />
        <TabItem value="9" title="API" isSelected={currentTab === '9'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
