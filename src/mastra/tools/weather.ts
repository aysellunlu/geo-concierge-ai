import { createTool } from '@mastra/core';
import { z } from 'zod';

export const weatherTool = createTool({
  id: 'get-weather',
  description: 'Belirtilen konumun hava durumunu getirir.',
  inputSchema: z.object({
    location: z.string().describe('Hava durumu sorgulanacak şehir/ilçe'),
  }),
  execute: async ({ input }) => {
    // Şimdilik mock veri (Gerçekçi olması için 34 derece veriyoruz)
    console.log(`--- Tool Çalıştı: ${input.location} için hava bakılıyor...`);
    return {
      temp: 34,
      condition: 'Güneşli ve Çok Sıcak',
      location: input.location,
    };
  },
});