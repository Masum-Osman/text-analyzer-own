import { TextEntity } from './TextEntity'

export interface TextRepository {
  create(text: TextEntity): Promise<TextEntity>
  findById(id: string): Promise<TextEntity | null>
  findAllByUser(userId: string): Promise<TextEntity[]>
  update(id: string, content: string): Promise<TextEntity>
  delete(id: string): Promise<void>
}
