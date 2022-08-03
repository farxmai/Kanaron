import {
  Attributes,
  Feat,
  SavingThrows,
  Spell,
  SpellPerLevel,
} from './Character'
import { SkillBonus } from './Skills'

export type ID = string | number

export type ItemType =
  | 'other'
  | 'armor'
  | 'weapon'
  | 'jewelry'
  | 'consumable'
  | 'ammo'
  | 'material'
  | 'magic_item'

export type ArmorType =
  | 'other'
  | 'light_armor'
  | 'medium_armor'
  | 'heavy_armor'
  | 'helmet'
  | 'hat'
  | 'clothes'
  | 'coat'
  | 'belt'
  | 'gloves'
  | 'bracers'
  | 'boots'
  | 'shield'

export type ConsumableType =
  | 'other'
  | 'food'
  | 'drink'
  | 'mixture'
  | 'ingredient'

export type MagicItemType =
  | 'other'
  | 'potion'
  | 'poison'
  | 'oil'
  | 'scroll'
  | 'wand'
  | 'staff'
  | 'rod'
  | 'tool'
  | 'artifact'

export type JewelryType =
  | 'ring'
  | 'amulet'
  | 'earring'
  | 'diadem'
  | 'bracelet'
  | 'other'

export type MaterialType =
  | 'other'
  | 'metal'
  | 'cloth'
  | 'leather'
  | 'fur'
  | 'wood'
  | 'mineral'
  | 'organic'
  | 'gem'

export type RarityType =
  | 'common'
  | 'uncommon'
  | 'rare'
  | 'vary rare'
  | 'legendary'

export type WeightType =
  | 'very_light'
  | 'light'
  | 'average'
  | 'heavy'
  | 'very_heavy'

export type WeaponType = 'improvised' | 'simple' | 'martial' | 'exotic'

export type DamagesType =
  | 'stressful'
  | 'slashing'
  | 'bludgeoning'
  | 'piercing'
  | 'fire'
  | 'cold'
  | 'acid'
  | 'electrical'
  | 'poison'
  | 'positive'
  | 'negative'
  | 'force'
  | 'sonic'
  | 'good'
  | 'evil'
  | 'lawful'
  | 'chaotic'
  | 'psychic'

export type AttacksType =
  | 'melee'
  | 'ranged'
  | 'throw'
  | 'grapple'
  | 'aid'
  | 'bull_rush'
  | 'charge'
  | 'disarm'
  | 'feint'
  | 'mounted'
  | 'overrun'
  | 'sunder'
  | 'tripping'
  | 'touch'

export type AmmoType =
  | 'small_bolt'
  | 'standard_bolt'
  | 'great_bolt'
  | 'arrow'
  | 'bullet'

export type AuraPowerType =
  | 'very_light'
  | 'light'
  | 'average'
  | 'strong'
  | 'very_strong'

export type AuraType =
  | 'Good'
  | 'Evil'
  | 'Lawful'
  | 'Chaotic'
  | 'Metamagic'
  | 'Abjuration'
  | 'Conjuration'
  | 'Divination'
  | 'Enchantment'
  | 'Evocation'
  | 'Illusion'
  | 'Necromancy'
  | 'Transmutation'
  | 'Different'
  | 'Unidentified'

export interface ItemBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // other
  base_weight: number
  base_price: number
  craft_recipe: CraftType | null
}

export interface Damage {
  id: ID
  damage_dice_count: number // default 1
  damage_dice: number // default 6
  damage_bonus: number // default 0
  damage_type: DamagesType[]
}

export interface Attack {
  id: ID
  is_bonus: boolean // default false
  attack_type: AttacksType
  attack_range: number // default 5
  attack_bonus: number // default 0
  crit_mod: number // default 2
  crit_range: number // default 20
  ammo_type: AmmoType | null
  attacks_before_reloading: number | null
  reloading_time: string | null
  damage: Damage
}

export interface Resist {
  id: ID
  damage_type: DamagesType
  resist: number
}

export interface ArmorClass {
  id: ID
  armor: number | null
  deflect: number | null
  natural: number | null
}

export interface Charges {
  id: ID
  base_charges: number | null
  base_charges_per_day: number | null
  restore_charges_per_day: number | null
}

export interface WeaponBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // weapon
  base_weight: number
  base_price: number
  base_attack: Attack[]
  second_attack: Attack | null
  is_light: boolean
  is_two_handed: boolean
  is_ranged: boolean
  is_throwing: boolean
  is_double: boolean
  class_speciality: [] // classes { id, name }
  race_speciality: [] // races { id, name }
  craft_recipe: CraftType | null
}

export interface AmmoBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // ammo
  base_weight: number
  base_price: number
  subtype: AmmoType
  stack_size: number
  craft_recipe: CraftType | null
}

export interface ConsumableBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // consumable
  base_weight: number
  base_price: number
  subtype: ConsumableType
  craft_recipe: CraftType | null
}

export interface MagicItemBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // magic_item
  subtype: MagicItemType
  base_weight: number
  base_price: number
  base_charges: Charges | null
  skills: SkillBonus[] | null
  feats: Feat[] | null
  spells: Spell[] | null
  bonus_spells_per_lvl: SpellPerLevel | null
  craft_recipe: CraftType | null
  aura_power: AuraPowerType
  aura_type: AuraType
}

export interface ArmorBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // armor
  base_weight: number
  base_price: number
  subtype: ArmorType
  bonus_armor: ArmorClass | null
  max_dex_bonus: number | null
  check_penalty: number | null
  max_speed: number | null
  spell_failure_chance: number | null
  craft_recipe: CraftType | null
}

export interface JewelryBase {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // jewelry
  base_weight: number
  base_price: number
  subtype: ArmorType
  craft_recipe: CraftType | null
}

export interface Material {
  id: ID
  title: string
  source: string
  description: string
  type: ItemType // material
  base_weight: number
  base_price: number
  subtype: MaterialType
  properties: string
  special_effect: string
  armor_bonus: string
  weapon_bonus: string
  rarity: RarityType
  weight_mod: WeightType
  price_mod: number
  hardness_mod: number
  difficulty_mod: number
  magic_difficulty_mod: number
}

export interface CraftType {
  id: ID
  base_dc: number
  base_time: number
  base_skill: ID
  base_feat: ID
  creator_lvl: number
  unique_components: string
  metal: number
  cloth: number
  leather: number
  fur: number
  wood: number
  mineral: number
  gem: number
  organic: number
}

export interface EnchantmentType {
  id: ID
  type: string
  title: string | null
  source: string | null
  description: string | null
  base_price: number | null
  base_weight: number | null
  total_bonus: number | null
  base_bonus: number | null
  base_bonus_required: number | null
  base_charges: Charges | null
  bonus_feats: Feat[] | null
  bonus_attack: Attack[] | null
  bonus_damage: Damage[] | null
  bonus_resist: Resist[] | null
  bonus_skills: SkillBonus[] | null
  bonus_spells: Spell[] | null
  bonus_spells_per_lvl: SpellPerLevel | null
  bonus_attributes: Attributes | null
  bonus_saving_throws: SavingThrows | null
  bonus_armor: ArmorClass | null
  craft_recipe: CraftType | null
  aura_power: AuraPowerType | null
  aura_type: AuraType | null
}

export interface ImprovementType {
  id: ID
  type: string
  title: string | null
  source: string | null
  description: string
  base_price: number
  base_weight: number
  is_light: boolean
  is_two_handed: boolean
  is_ranged: boolean
  is_throwing: boolean
  is_double: boolean
  bonus_armor: ArmorClass | null
  bonus_feats: Feat[] | null
  bonus_attack: Attack[] | null
  bonus_damage: Damage[] | null
  bonus_resist: Resist[] | null
  craft_recipe: CraftType | null
}

export interface Item {
  id: ID
  title: string | null
  source: string | null
  description: string | null
  rarity: RarityType
  type: ItemType
  itemProps:
    | ItemBase
    | ArmorBase
    | WeaponBase
    | JewelryBase
    | AmmoBase
    | ConsumableBase
    | MagicItemBase
    | Material
  isMasterCrafted: boolean | null
  material: Material[] | null
  enchantment: EnchantmentType[] | null
  improvement: ImprovementType[] | null
}

export interface InventoryItem {
  id: ID
  character: ID // id
  item: Item
  isEquipped: boolean
  isUsable: boolean
  charges: number | null
  count: number
}
