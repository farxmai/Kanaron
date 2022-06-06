import { CharacterParam } from './Character'

export interface Skill {
  id: string
  name: string
  description: string
  baseParam: CharacterParam
  untrained: boolean
}

export interface CharacterSkill {
  skillId: string
  tempMod: number
  miscMod: number
  itemMod: number
  rank: number
  note?: string
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
