import { renderProjects } from './app.js';
import { data } from './data.js';

const container = document.getElementById("projects");

renderProjects(container, data);