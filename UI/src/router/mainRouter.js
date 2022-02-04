import PanelSettings from "../components/panels/PanelSettings.vue"
import PanelSearch from "../components/panels/PanelSearch.vue"
import PanelProfile from "../components/panels/PanelProfile.vue"
import PanelMeta from "../components/panels/PanelMeta.vue"
import PanelDeckLib from "../components/panels/PanelDeckLib.vue"
import PanelDeckCode from "../components/panels/PanelDeckCode.vue"
import PanelLeaderboard from "../components/panels/PanelLeaderboard.vue"
import ContactInfo from "../components/panels/PanelContact.vue"

import PanelTest from "../components/panels/PanelTest.vue"

export default [
  { name: "home", path: "/", component: PanelLeaderboard },
  { name: "settings", path: "/settings", component: PanelSettings },
  {
    name: "search",
    path: "/search",
    component: PanelSearch,
    props: (route) => ({ player: route.query.name, region: route.query.region, tag: route.query.tag }),
  },
  { name: "profile", path: "/profile", component: PanelProfile },
  { name: "meta", path: "/meta", component: PanelMeta },
  { name: "decklib", path: "/decklib", component: PanelDeckLib },
  { name: "code", path: "/code", component: PanelDeckCode, props: (route) => ({ code: route.query.code }) },
  { name: "leaderboard", path: "/leaderboard", component: PanelLeaderboard },
  { name: "contact", path: "/contact", component: ContactInfo },
  { name: "test", path: "/test", component: PanelTest },
]
