export function buildGoogleAuthUrl() {
  const params = new URLSearchParams({
    client_id: process.env.GOOGLE_CLIENT_ID || '',
    redirect_uri: process.env.GOOGLE_REDIRECT_URI || '',
    response_type: 'code',
    scope: 'openid email profile',
    access_type: 'offline',
    prompt: 'consent'
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

export async function exchangeCodeMock(code) {
  return {
    id: code ? 'google-user' : 'guest',
    name: 'CodeStudio User',
    email: 'user@example.com',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=CS'
  };
}
