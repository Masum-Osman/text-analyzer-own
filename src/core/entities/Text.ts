export class Text {
    private content: string
  
    constructor(content: string) {
      this.content = content.trim()
    }
  
    getContent(): string {
      return this.content
    }
  
    getWordCount(): number {
      return this.content
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(Boolean).length
    }
  
    getCharacterCount(): number {
      return this.content.replace(/\s/g, '').length
    }
  
    getSentenceCount(): number {
      return (this.content.match(/[.!?]+/g) || []).length
    }
  
    getParagraphCount(): number {
      return this.content.split(/\n+/).filter(Boolean).length
    }
  
    getLongestWords(): string[] {
      const words = this.content
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/)
        .filter(Boolean)
  
      const maxLen = Math.max(...words.map(w => w.length))
      return [...new Set(words.filter(w => w.length === maxLen))]
    }
  }
  