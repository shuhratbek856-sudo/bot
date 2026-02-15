import { useState } from "react";
import { sendAssistant } from "../../lib/api";

export function AssistantPanel(){
  const [prompt,setPrompt]=useState("");
  const [out,setOut]=useState("");
  return <div className="panel"><h2>Assistant</h2><textarea value={prompt} onChange={e=>setPrompt(e.target.value)}/><button onClick={async()=>{const r=await sendAssistant(prompt);setOut(r.output||r.error);}}>Run</button><pre>{out}</pre></div>;
}
