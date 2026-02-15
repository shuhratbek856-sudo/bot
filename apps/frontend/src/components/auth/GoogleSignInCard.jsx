import { API_URL } from "../shared/constants.js";
export function GoogleSignInCard(){return <div className="card"><h2>Sign in to CodeStudio</h2><a className="btn" href={`${API_URL}/api/auth/google/start`}>Continue with Google</a></div>;}
