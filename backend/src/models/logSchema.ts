import mongoose from "mongoose";


interface ILog {
  sessionId: string,
  message: string,
  createdAt: Date,
  updatedAt: Date,
}

const logSchema = new mongoose.Schema<ILog>({
  sessionId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, { timestamps: true })


const Log = mongoose.model<ILog>('Log', logSchema)

export default Log
