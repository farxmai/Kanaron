import { Attribute } from './Character'

export interface Skill {
  id: string
  title: string
  description: string
  baseAttribute: Attribute
  trained: boolean
  armorCheck: boolean
  reference: string
}

export interface CharacterSkill {
  skillId: string
  tempMod: number
  miscMod: number
  itemMod: number
  rank: number
  note?: string
}

export interface SkillBonus {
  skillId: string
  tempMod: number
  miscMod: number
  itemMod: number
}

export interface CharacterSkillBonus {
  skillId: string
  tempMod?: number
  miscMod?: number
  itemMod?: number
}

export interface CharacterClassSkill {
  skillId: string
  isForClass: boolean
}
