import OpenAI from 'openai';
import { Open_Ai_Key } from './constant';

const openai = new OpenAI({
  apiKey: Open_Ai_Key,dangerouslyAllowBrowser: true // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
