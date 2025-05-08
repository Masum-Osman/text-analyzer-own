import { TextRepository } from '../../core/interfaces/TextRepository'
import { TextEntity } from '../../core/interfaces/TextEntity'
import { TextModel } from '../models/TextModel'

export const MongoTextRepository: TextRepository = {
    async create(text: TextEntity) {
        const created = new TextModel(text)
        return await created.save()
    },

    async findById(id: string) {
        return await TextModel.findById(id).exec()
    },

    async findAllByUser(userId: string) {
        return await TextModel.find({ userId }).exec()
    },

    async update(id: string, content: string): Promise<TextEntity> {
        const updated = await TextModel.findByIdAndUpdate(id, {content}, {new: true}).exec()
        if (!updated) {
            throw new Error('Text not found')
        }
        return updated
    },

    async delete(id: string): Promise<void> {
        const deleted = await TextModel.findByIdAndDelete(id).exec()
        if (!deleted) {
            throw new Error('Text not found')
        }
        return 
      },
}
