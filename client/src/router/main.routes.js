import { MAIN_PATHS } from "./paths";
import Classes from "pages/classes/Classes";
import Class from "pages/classes/Classes";
import HomePage from "pages/home/home";
import Race from "pages/races/Race";
import Races from "pages/races/Races";
import Skills from "pages/skills/Skills";
import Skill from "pages/skills/Skill";
import Items from "pages/items/Items";
import Item from "pages/items/Item";
import Spells from "pages/spells/Spells";
import Spell from "pages/spells/Spell";
import Perks from "pages/perks/Perks";
import Perk from "pages/perks/Perk";
import Login from "pages/login/Login";

import ItemTypes from "pages/itemTypes/ItemTypes";
import ItemType from "pages/itemTypes/ItemType";
import Materials from "pages/itemMaterials/ItemMaterials";
import Material from "pages/itemMaterials/ItemMaterial";
import Qualities from "pages/itemQualities/ItemQualities";
import Quality from "pages/itemQualities/ItemQuality";

export const mainRoutes = [
  { path: MAIN_PATHS.root, component: HomePage },
  { path: MAIN_PATHS.races, component: Races },
  { path: MAIN_PATHS.race, component: Race },
  { path: MAIN_PATHS.classes, component: Classes },
  { path: MAIN_PATHS.class, component: Class },
  { path: MAIN_PATHS.skills, component: Skills },
  { path: MAIN_PATHS.skill, component: Skill },
  { path: MAIN_PATHS.spells, component: Spells },
  { path: MAIN_PATHS.spell, component: Spell },
  { path: MAIN_PATHS.perks, component: Perks },
  { path: MAIN_PATHS.perk, component: Perk },
  { path: MAIN_PATHS.items, component: Items },
  { path: MAIN_PATHS.item, component: Item },
  { path: MAIN_PATHS.itemsTypes, component: ItemTypes },
  { path: MAIN_PATHS.itemsType, component: ItemType },
  { path: MAIN_PATHS.itemsMaterials, component: Materials },
  { path: MAIN_PATHS.itemsMaterial, component: Material },
  { path: MAIN_PATHS.itemsQualities, component: Qualities },
  { path: MAIN_PATHS.itemsQuality, component: Quality },
];

export const unAuthRoutes = [{ path: MAIN_PATHS.login, component: Login }];
