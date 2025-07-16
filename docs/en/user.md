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
    title: 'Creator',
    desc: 'A high school student living in Cambodia.',
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
      About The author
    </template>
    <template #lead>
      Thank you for visiting!
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>