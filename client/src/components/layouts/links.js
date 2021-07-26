import {
  AccountCircleOutlined,
  AdminPanelSettings,
  People,
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ClassIcon from "../icons/ClassIcon";
import PerkIcon from "../icons/PerkIcon";
import RaceIcon from "../icons/RaceIcon";
import SkillIcon from "../icons/SkillIcon";
import SpellIcon from "../icons/SpellIcon";

export const sidebarLinks = [
  { link: "/races", label: "Races", Icon: RaceIcon },
  { link: "/classes", label: "Classes", Icon: ClassIcon },
  { link: "/skills", label: "Skills", Icon: SkillIcon },
  { link: "/spells", label: "Spells", Icon: SpellIcon },
  { link: "/perks", label: "Perks", Icon: PerkIcon },
];

export const sidebarMasterLinks = [
  { link: "/", label: "some", Icon: InboxIcon },
  { link: "/", label: "some", Icon: InboxIcon },
  { link: "/", label: "some", Icon: InboxIcon },
  { link: "/", label: "some", Icon: InboxIcon },
  { link: "/", label: "some", Icon: InboxIcon },
];

export const navbarLinks = [
  { link: "/dashboard/profile", label: "Профиль", Icon: AccountCircleOutlined },
  { link: "/dashboard/characters", label: "Персонажи", Icon: People },
];

export const navbarMasterLinks = [
  {
    link: "/dashboard/master",
    label: "Панель Мастера",
    Icon: AdminPanelSettings,
  },
];
