import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools/weather.js';

export const conciergeAgent = new Agent({
  id: 'fethiye-concierge-agent', 
  name: 'Fethiye Concierge',
  instructions: `
    Sen Fethiye/Muğla bölgesinde uzman bir turizm rehberisin.
    1. Plan sorulduğunda önce 'getWeather' tool'unu çalıştır.
    2. Sıcaklık 30 derecenin üzerindeyse serin yerler öner.
  `,
  model: {
    id: 'groq/llama-3.3-70b-versatile',
  },
  tools: {
    getWeather: weatherTool,
  },
});