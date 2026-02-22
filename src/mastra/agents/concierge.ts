import { Agent } from '@mastra/core';
import { weatherTool } from '../tools/weather';

export const conciergeAgent = new Agent({
  name: 'Fethiye Concierge',
  instructions: `
    Sen Fethiye/Muğla bölgesinde uzman bir turizm rehberisin.
    
    KURALLARIN:
    1. Kullanıcı plan sorduğunda önce 'get-weather' tool'unu çalıştır.
    2. Eğer sıcaklık 30 derecenin üzerindeyse, dış mekan aktiviteleri (yürüyüş vb.) yerine serin yerler (Saklıkent Kanyonu, klimalı müzeler, beach clublar) öner.
    3. Cevapların kısa, öz ve ikna edici olsun.
  `,
  model: {
    provider: 'GROQ',
    name: 'llama-3.3-70b-versatile',
  },
  tools: {
    getWeather: weatherTool,
  },
});