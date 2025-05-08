import { Schema, model, Document } from 'mongoose'

export interface TextDocument extends Document {
  content: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

const TextSchema = new Schema<TextDocument>(
  {
    content: { 
        type: String, 
        required: true 
    },
    userId: { 
        type: String, 
        required: true 
    },
  },
  { timestamps: true }
)

export const TextModel = model<TextDocument>('Text', TextSchema)
