# Geo-Aware AI Concierge

An agentic AI assistant built with **Mastra** and **Groq** that provides context-aware local recommendations based on real-time data like weather conditions. Specifically designed for tourism hubs like Fethiye/Muğla.

## The Vision
Most local guides provide static lists. This project introduces an **Agentic Workflow** that:
1. **Understands Context:** Checks real-time weather before suggesting activities.
2. **Strategic Reasoning:** If it's too hot (30°C+), it avoids outdoor treks and suggests indoor or water-based alternatives.
3. **Hyper-Local:** Focused on providing high-quality, reasoned advice for the Turkish Riviera.

## Tech Stack
- **Framework:** [Mastra](https://mastra.ai/) (Agentic AI Framework)
- **LLM:** Llama 3.3 70B via **Groq** (Ultra-fast inference)
- **Runtime:** Node.js with TypeScript & `tsx`
- **Schema Validation:** Zod

## Architecture
The project follows a modular "Clean Architecture" approach:
- `/src/mastra/agents`: Defined persona and strategic instructions.
- `/src/mastra/tools`: External integrations (Weather API, Places lookup).
- `/src/index.ts`: The entry point for the agentic loop.

## Installation & Setup

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/yourusername/geo-concierge-ai.git](https://github.com/yourusername/geo-concierge-ai.git)
   cd geo-concierge-ai