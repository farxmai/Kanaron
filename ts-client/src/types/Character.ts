import { CharacterSkillBonus } from './Skills'

export type Attribute = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'
export type CharacterSize = 'small' | 'medium' | 'large'
export type SavingThrow = 'fortitude' | 'reflex' | 'will'

export interface Attributes {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export interface SpellPerLevel {
  0: number
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  7: number
  8: number
  9: number
}

export interface SavingThrows {
  fortitude: number
  reflex: number
  will: number
}

export interface Feat {
  name: string
  description: string
  type: string
  multiple: boolean
  stackable: boolean
  choiceTarget: string
  prerequisite: string
  withFeat: string
  withoutFeat: string
  reference: string
}

export interface Skill {
  name: string
  description: string
  baseAttribute: Attribute
}

export interface Spell {
  name: string
  description: string
  shortDescription: string
  school: string
  subSchool: string | null
  descriptor: string | null
  castingTime: string
  spellRange: string
  target: string
  duration: string
  savingThrow: SavingThrow
  spellResistance: string
  materialComponents: string
  focusComponent: string
  reference: string
  components: {
    XP: boolean
    S: boolean
    V: boolean
    M: boolean
    R: boolean
    F: boolean
  }
}

export interface ClassLvlBonuses {
  classId: string
  classLvl: number // uniq
  baseAttack: number
  savingThrows: SavingThrows
  spellPerLvl?: SpellPerLevel
  feats_: Feat[]
}

export interface CharacterClass {
  id: string
  name: string
  description: string
  baseSkillPoints: number
  baseAttribute: Attribute
  diceHp: number
  lvlBonuses: {
    1: ClassLvlBonuses
    2: ClassLvlBonuses
    3: ClassLvlBonuses
    4: ClassLvlBonuses
    5: ClassLvlBonuses
    6: ClassLvlBonuses
    7: ClassLvlBonuses
    8: ClassLvlBonuses
    9: ClassLvlBonuses
    10: ClassLvlBonuses
    11: ClassLvlBonuses
    12: ClassLvlBonuses
    13: ClassLvlBonuses
    14: ClassLvlBonuses
    15: ClassLvlBonuses
    16: ClassLvlBonuses
    17: ClassLvlBonuses
    18: ClassLvlBonuses
    19: ClassLvlBonuses
    20: ClassLvlBonuses
  }
}

export interface CharacterRace {
  id: string
  name: string
  description: string
  preferredClass: string
  attributes: Attributes
  savingThrows: SavingThrows
  bonusSkills: CharacterSkillBonus[]
  size: CharacterSize
  speed: number
}

export interface DirectCharacterClass {
  characterId: string
  classId: string
  lvl: number
}

export interface Character {
  userId: string
  id: string
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
  name: string
  age: number
  gender: string
  height: number
  weight: number
  eyes: string
  hair: string
  damageReduction: number
  damageNoLethal: number
  temporaryHp: number
  currentHp: number
  totalHp: number
  charRace: CharacterRace
  charClass: DirectCharacterClass[]
}
