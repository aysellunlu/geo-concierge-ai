import 'dotenv/config';
import { conciergeAgent } from './mastra/agents/concierge.js';

async function run() {
  console.log('🤖 Concierge uyandırılıyor...');

  try {
    const result = await conciergeAgent.generate(
      'Bugün öğleden sonra Fethiye’de ne yapabilirim? Çok enerjim yok.'
    );

    console.log('\n--- AI YANITI ---');
    console.log(result.text);
  } catch (error) {
    console.error('❌ Bir hata oluştu:', error);
  }
}

run();