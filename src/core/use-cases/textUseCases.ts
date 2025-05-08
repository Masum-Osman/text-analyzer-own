import { TextEntity } from "../interfaces/TextEntity";
import { TextRepository } from "../interfaces/TextRepository";
import { analyzeText } from "./analyzeText";

export function makeTextUseCases(repository: TextRepository){
    return {
        async createText(content: string, userId: string) {
            const text: TextEntity = { content, userId }
            return await repository.create(text)
        },

        async getTextAnalysis(id: string) {
            const text = await repository.findById(id)
            if (!text) throw new Error("Text not found")
            return analyzeText(text.content)
        },

        async getAllTextsByUser(userId: string) {
            return await repository.findAllByUser(userId)
        },

        async updateText(id: string, content: string) {
            const text = await repository.findById(id)
            if (!text) throw new Error("Text not found")
            return await repository.update(id, content)
        },

        async deleteText(id: string) {
            const text = await repository.findById(id)
            if (!text) throw new Error("Text not found")
            return await repository.delete(id)
        },

        async getTextById(id: string) {
            const text = await repository.findById(id)
            if (!text) throw new Error("Text not found")
            return text
        }
    }
}