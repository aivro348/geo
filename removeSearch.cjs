const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

// 1. Remove the search state and handleSearch
const searchStateRegex = /  const \[searchQuery.*?\}\s*\];\s*/s;
content = content.replace(searchStateRegex, '');

// 2. Remove desktop search bar
const desktopSearchRegex = /\s*\{\/\* Search Bar \*\/\}\s*<div ref=\{searchRef\} className="desktop-search".*?<\/div>\s*<\/div>\s*<\/div>/s;
content = content.replace(desktopSearchRegex, '');

// 3. Remove mobile search bar
const mobileSearchRegex = /\s*\{\/\* Mobile Search Bar \*\/\}\s*<li className="mobile-search".*?<\/li>/s;
content = content.replace(mobileSearchRegex, '');

fs.writeFileSync(appJsxPath, content);
console.log("Search functionality completely removed.");
