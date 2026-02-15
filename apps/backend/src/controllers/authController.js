import { buildGoogleAuthUrl, exchangeCodeMock } from '../services/googleAuthService.js';

export function startGoogleAuth(_req, res) {
  res.redirect(buildGoogleAuthUrl());
}

export async function googleCallback(req, res) {
  const code = String(req.query.code || '');
  const profile = await exchangeCodeMock(code);
  req.session.user = profile;
  res.redirect(process.env.FRONTEND_URL + '/dashboard');
}

export function getSessionUser(req, res) {
  res.json({ user: req.session.user || null });
}

export function logout(req, res) {
  req.session.destroy(() => res.json({ success: true }));
}
