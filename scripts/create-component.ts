#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

// Get component name from command line arguments
const componentName: string | undefined = process.argv[2];

if (!componentName) {
  console.log('❌ Please provide a component name');
  console.log('Usage: npm run new-component <component-name>');
  console.log('Example: npm run new-component 01-cta-button');
  process.exit(1);
}

// Paths
const templatePath: string = path.join(
  __dirname,
  '..',
  'template',
  'component-starter',
);
const componentsPath: string = path.join(__dirname, '..', 'components');
const newComponentPath: string = path.join(componentsPath, componentName);

// Check if template exists
if (!fs.existsSync(templatePath)) {
  console.log('❌ Template not found at:', templatePath);
  console.log('Please make sure template/component-starter/ exists');
  process.exit(1);
}

// Check if component already exists
if (fs.existsSync(newComponentPath)) {
  console.log('❌ Component already exists:', componentName);
  process.exit(1);
}

// Create components directory if it doesn't exist
if (!fs.existsSync(componentsPath)) {
  fs.mkdirSync(componentsPath, { recursive: true });
}

// Copy template to new component
function copyDirectory(src: string, dest: string): void {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files: string[] = fs.readdirSync(src);

  files.forEach((file: string) => {
    const srcFile: string = path.join(src, file);
    const destFile: string = path.join(dest, file);

    if (fs.statSync(srcFile).isDirectory()) {
      copyDirectory(srcFile, destFile);
    } else {
      let content: string = fs.readFileSync(srcFile, 'utf8');

      // Replace placeholders in HTML
      if (file === 'index.html') {
        content = content.replace(
          /Component Practice/g,
          componentName as string,
        );
        content = content.replace(
          /<!-- Your component goes here -->/g,
          `<!-- ${componentName} component -->`,
        );
      }

      // Replace placeholders in TypeScript
      if (file === 'script.ts') {
        content = content.replace(
          /Component loaded successfully!/g,
          `${componentName} loaded successfully!`,
        );
      }

      fs.writeFileSync(destFile, content);
    }
  });
}

try {
  copyDirectory(templatePath, newComponentPath);

  console.log('✅ Component created successfully!');
  console.log('📁 Location:', newComponentPath);
  console.log('🚀 To start practicing:');
  console.log(`   1. cd components/${componentName}`);
  console.log('   2. Open index.html in your browser');
  console.log('   3. Start coding!');
  console.log('');
  console.log(
    '💡 Quick tip: Use "npm run compile" to watch TypeScript compilation',
  );
} catch (error: any) {
  console.log('❌ Error creating component:', error.message);
  process.exit(1);
}
