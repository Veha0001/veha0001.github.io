---
title: User
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/Veha0001.png',
    name: 'Veha0001',
    title: 'អ្នកបង្កេីត',
    desc: 'សិស្សរៀន សាលាវិទ្យាល័យ រស់នៅប្រទេសកម្ពុជា។',
    links: [
      { icon: 'github', link: 'https://www.github.com/Veha0001' },
      { icon: 'twitter', link: 'https://twitter.com/LongVE980' },
      { icon: 'gmail', link: 'mailto:veha0001@gmail.com' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      អំពីអ្នកប្រេី
    </template>
    <template #lead>
      សូមអរគុណសម្រាប់ការចូលមេីល!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>