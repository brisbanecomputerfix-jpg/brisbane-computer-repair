const fs = require('fs');
const path = require('path');

const files = ['index.html', 'services.html', 'privacy-policy.html', 'terms.html', 'disclaimer.html'];

for (const file of files) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find the footer using regex
  const footerRegex = /<!-- \d*\.?\s*Footer -->\s*<footer[\s\S]*?<\/footer>/i;
  // If it doesn't have the comment, just look for footer tag
  const fallbackRegex = /<footer[\s\S]*?<\/footer>/i;
  
  const replacement = `<!-- React Footer Mount Point -->
  <div id="react-footer-root"></div>
  <script type="module" src="/src/js/react-mount.tsx"></script>`;

  if (footerRegex.test(content)) {
    content = content.replace(footerRegex, replacement);
  } else if (fallbackRegex.test(content)) {
    content = content.replace(fallbackRegex, replacement);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
