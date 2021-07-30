import { AccountCircleOutlined, AdminPanelSettings, People } from "@material-ui/icons";
import { DASHBOARD_PATHS, MAIN_PATHS, MASTER_PATHS } from "router/paths";
import CharactersIcon from "components/icons/CharactersIcon";
import DataIcon from "components/icons/DataIcon";
import RandomIcon from "components/icons/RandomIcon";
import ClassIcon from "components/icons/ClassIcon";
import PerkIcon from "components/icons/PerkIcon";
import RaceIcon from "components/icons/RaceIcon";
import SkillIcon from "components/icons/SkillIcon";
import SpellIcon from "components/icons/SpellIcon";

export const sidebarLinks = [
  { link: MAIN_PATHS.races, label: "Расы", Icon: RaceIcon },
  { link: MAIN_PATHS.classes, label: "Классы", Icon: ClassIcon },
  { link: MAIN_PATHS.skills, label: "Навыки", Icon: SkillIcon },
  { link: MAIN_PATHS.spells, label: "Заклинания", Icon: SpellIcon },
  { link: MAIN_PATHS.perks, label: "Перки", Icon: PerkIcon },
];

export const sidebarMasterLinks = [
  { link: MASTER_PATHS.datasets, label: "Управление", Icon: DataIcon },
  { link: MASTER_PATHS.characters, label: "Персонажи", Icon: CharactersIcon },
  { link: MASTER_PATHS.generators, label: "Генераторы", Icon: RandomIcon },
];

export const navbarLinks = [
  { link: DASHBOARD_PATHS.profile, label: "Профиль", Icon: AccountCircleOutlined },
  { link: DASHBOARD_PATHS.characters, label: "Персонажи", Icon: People },
];

export const navbarMasterLinks = [
  { link: MASTER_PATHS.root, label: "Панель Мастера", Icon: AdminPanelSettings },
];
