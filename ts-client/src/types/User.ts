export type UserRole = 'player' | 'admin' | 'master'

export interface User {
  id: string
  email: string
  role: UserRole
}
