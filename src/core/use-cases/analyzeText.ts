import { TextAnalysisResult } from '../interfaces/TextAnalysisResult'

export function analyzeText(content: string): TextAnalysisResult {
    const normalized = content.replace(/[^\w\s]|_/g, '').toLowerCase()
    
    const paragraphs = content.trim().split(/\n+/).filter(Boolean)
    const sentences = content.match(/[^\.!\?]+[\.!\?]+/g) || []
    const words = normalized.trim().split(/\s+/).filter(Boolean)
    const characters = normalized.replace(/\s/g, '')

    let longestWords = [...new Set(words)].sort((a, b) => b.length - a.length)
    longestWords = longestWords.slice(0, 5)

    return {
        wordCount: words.length,
        characterCount: characters.length,
        sentenceCount: sentences.length,
        paragraphCount: paragraphs.length,
        longestWords,
    }
}