/**
 * Compile JSX and build a standalone React website that can open with file://
 * Run: npm install && npm run build:offline
 * Uses local React UMD scripts rather than external CDN links.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.resolve(project, '..');
let source = fs.readFileSync(path.join(project, 'src', 'App.jsx'), 'utf8')
  .replace(/^import React from 'react';\s*/m, '')
  .replace(/^import '\.\/App\.css';\s*/m, '')
  .replace(/export default App;\s*$/, '');
const js = ts.transpileModule(source + '\nReactDOM.render(React.createElement(App), document.getElementById("root"));', {
  compilerOptions: { jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2018, module: ts.ModuleKind.None }
}).outputText;
const safe = (input) => input.replace(/<\/script/gi, '<\\/script');
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
fs.writeFileSync(path.join(output, 'assets', 'portfolio-react.js'), safe(js));
fs.copyFileSync(path.join(project, 'src', 'App.css'), path.join(output, 'assets', 'style.css'));
fs.copyFileSync(path.join(project, 'vendor', 'react.production.min.js'), path.join(output, 'assets', 'react.production.min.js'));
fs.copyFileSync(path.join(project, 'vendor', 'react-dom.production.min.js'), path.join(output, 'assets', 'react-dom.production.min.js'));
for (const name of ['jagadish-photo.jpg', 'Jagadish_Reddy_Resume.pdf', 'favicon.svg']) {
  fs.copyFileSync(path.join(project, 'public', 'assets', name), path.join(output, 'assets', name));
}
fs.writeFileSync(path.join(output, 'index.html'), `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#f6f9fd" />
  <meta name="description" content="Jagadish Reddy — Associate Software Engineer. Projects, skills and experience." />
  <title>Jagadish Reddy | Software Engineer</title>
  <link rel="icon" href="./assets/favicon.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="./assets/style.css" />
</head>
<body>
  <div id="root"></div>
  <noscript>Enable JavaScript to view the React website.</noscript>
  <script src="./assets/react.production.min.js"></script>
  <script src="./assets/react-dom.production.min.js"></script>
  <script src="./assets/portfolio-react.js"></script>
</body>
</html>`);
console.log('Updated ../index.html — double-click to open offline.');
