import { db } from '../db/memoryDb.js';

export function listProjects(_req, res) {
  res.json({ projects: db.projects });
}

export function createProject(req, res) {
  const project = { id: crypto.randomUUID(), name: req.body.name || 'Untitled', updatedAt: new Date().toISOString() };
  db.projects.unshift(project);
  res.status(201).json({ project });
}
