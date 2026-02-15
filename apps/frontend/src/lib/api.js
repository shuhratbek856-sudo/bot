const API=import.meta.env.VITE_API_URL||"http://localhost:4000";
export const getMe=()=>fetch(`${API}/api/auth/me`,{credentials:"include"}).then(r=>r.json());
export const getProjects=()=>fetch(`${API}/api/projects`,{credentials:"include"}).then(r=>r.json());
export const sendAssistant=(prompt)=>fetch(`${API}/api/assistant/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt}),credentials:"include"}).then(r=>r.json());
