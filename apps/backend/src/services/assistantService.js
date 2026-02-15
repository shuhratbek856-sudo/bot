export async function runAssistantChat(prompt) {
  const cleanPrompt = String(prompt || '').trim();
  if (!cleanPrompt) {
    return 'Assistant placeholder response: enter a prompt to generate output.';
  }

  return `Assistant response: ${cleanPrompt}`;
}
