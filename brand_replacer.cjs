const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Amber -> Brown/Cream mapped elements
            content = content.replace(/bg-amber-600/g, 'bg-brand-brown');
            content = content.replace(/bg-amber-500/g, 'bg-brand-brown');
            content = content.replace(/bg-amber-100/g, 'bg-brand-cream');
            content = content.replace(/bg-amber-50/g, 'bg-brand-cream');
            content = content.replace(/text-amber-900/g, 'text-brand-brown');
            content = content.replace(/text-amber-600/g, 'text-brand-brown');
            content = content.replace(/text-amber-400/g, 'text-brand-blue');
            content = content.replace(/border-amber-200/g, 'border-brand-brown/20');
            content = content.replace(/hover:bg-amber-50/g, 'hover:bg-brand-cream');
            content = content.replace(/hover:text-amber-600/g, 'hover:text-brand-brown');

            // Remaining Red/Blue/Gray colors
            content = content.replace(/text-red-500/g, 'text-brand-red');
            content = content.replace(/hover:text-red-600/g, 'hover:text-brand-red');
            content = content.replace(/text-blue-900/g, 'text-brand-black');
            content = content.replace(/text-blue-400/g, 'text-brand-blue');

            // For text-gray-200 and text-gray-300 that are usually in dark backgrounds
            content = content.replace(/text-gray-200/g, 'text-brand-cream/90');
            content = content.replace(/text-gray-300/g, 'text-brand-cream/80');

            if (originalContent !== content) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated: ' + fullPath);
            }
        }
    });
}

processDirectory(dir);
console.log('Done replacement script 2.');
