import { CharacterSkillBonus } from './Skills'

export type CharacterParam = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'
export type CharacterSize = 'small' | 'medium' | 'large'

export interface CharacterHitPoints {
  damageReduction: number
  damageNoLethal: number
  temporaryHp: number
  currentHp: number
  totalHp: number
  diceHp: number
}

export interface CharacterParams {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number
}

export interface SpellLevels {
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

export interface CharacterRace {
  name: string
  description: string
  preferredClass: string
  bonusParams: CharacterParams
  bonusSkills: CharacterSkillBonus[]
  size: CharacterSize
  speed: number
}

export interface SavingThrows {
  fortitude: number
  reflex: number
  will: number
}

export interface Ability {
  name: string
  description: string
}

export interface Spell {
  name: string
  description: string
}

export interface ClassLvlBonuses {
  baseAttack: number
  savingThrows: SavingThrows
  spellLevels?: SpellLevels
  abilities?: Ability[]
  spells?: Spell[]
}

export interface CharacterClass {
  id: string
  name: string
  description: string
  baseSkillPoints: number
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

export interface PlayerClass {
  classId: string
  lvl: number
}

export interface Character {
  lvl: number
  name: 'string'
  hp: CharacterHitPoints
  charParams: CharacterParams
  charRace: CharacterRace
  charClass: [PlayerClass]
}
