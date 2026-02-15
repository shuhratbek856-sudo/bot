import { runAssistantChat } from '../services/assistantService.js';

export async function assistantChat(req, res) {
  try {
    const { prompt } = req.body;
    const result = await runAssistantChat(prompt || '');
    res.json({ output: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
