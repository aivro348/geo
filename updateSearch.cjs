const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
const appCssPath = path.join(__dirname, 'src', 'App.css');

let jsxContent = fs.readFileSync(appJsxPath, 'utf8');

// 1. Update the Search logic inside function App()
const oldSearchState = `  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = services.filter(s => 
      s.title.toLowerCase().includes(q) || 
      (serviceDetails[s.id] && serviceDetails[s.id].headline.toLowerCase().includes(q)) ||
      (serviceDetails[s.id] && serviceDetails[s.id].disciplines.some(d => d.title.toLowerCase().includes(q)))
    );
    setSearchResults(results);
  };`;

const newSearchState = `  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Global search index including pages and services
  const searchableIndex = [
    { id: 'home', path: '/', title: 'Home Page', desc: 'Geosilicon Home, Mission, Vision', content: 'welcome geosilicon survey top' },
    { id: 'about', path: '/about', title: 'About Us', desc: 'About Geosilicon', content: 'mission vision iso certified' },
    { id: 'contact', path: '/contact', title: 'Contact Us', desc: 'Get in Touch', content: 'address phone email hyderabad location' },
    { id: 'gallery', path: '/gallery', title: 'Gallery', desc: 'Project Gallery', content: 'photos images projects' },
    { id: 'clients', path: '/clients', title: 'Clients', desc: 'Our Trusted Partners', content: 'nhai l&t adani tata government' },
    ...services.map(s => ({
      id: s.id,
      path: \`/services/\${s.id}\`,
      title: s.title,
      desc: s.desc,
      content: serviceDetails[s.id] ? serviceDetails[s.id].headline + ' ' + serviceDetails[s.id].detailedIntro + ' ' + serviceDetails[s.id].disciplines.map(d => d.title + ' ' + d.desc).join(' ') : ''
    }))
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = searchableIndex.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q)
    );
    setSearchResults(results);
  };`;

jsxContent = jsxContent.replace(oldSearchState, newSearchState);

// 2. Update the Desktop Search Bar styling to hide on mobile
const oldDesktopSearchBar = `<div ref={searchRef} className="nav-search" style={{ position: 'relative', marginLeft: 'auto', marginRight: '20px', display: 'flex', alignItems: 'center' }}>`;
const newDesktopSearchBar = `<div ref={searchRef} className="desktop-search" style={{ position: 'relative', marginLeft: 'auto', marginRight: '20px', display: 'flex', alignItems: 'center' }}>`;
jsxContent = jsxContent.replace(oldDesktopSearchBar, newDesktopSearchBar);

// Update onClick navigation inside search map to use item.path
const oldSearchMap = `navigate(\`/services/\${s.id}\`);`;
const newSearchMap = `navigate(s.path);`;
jsxContent = jsxContent.replace(new RegExp(oldSearchMap.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newSearchMap);

// Replace headline in dropdown with desc
const oldSearchHeadline = `{serviceDetails[s.id]?.headline}`;
const newSearchHeadline = `{s.desc}`;
jsxContent = jsxContent.replace(new RegExp(oldSearchHeadline.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newSearchHeadline);

// 3. Add Mobile Search Bar inside the mobile menu
const mobileMenuEnd = `<li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>`;
const mobileSearchHtml = `<li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
            {/* Mobile Search Bar */}
            <li className="mobile-search" ref={mobileSearchRef} style={{ padding: '10px 20px', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', background: '#f1f5f9', borderRadius: '20px', padding: '5px 15px', border: '1px solid #e2e8f0' }}>
                <Search size={16} color="#64748b" style={{ flexShrink: 0 }} />
                <input 
                  type="text" 
                  placeholder="Search site..." 
                  value={searchQuery}
                  onChange={handleSearch}
                  onFocus={() => setIsSearchFocused(true)}
                  style={{ border: 'none', background: 'transparent', outline: 'none', padding: '5px 10px', fontSize: '0.9rem', width: '100%', color: '#334155' }}
                />
              </div>
              {isSearchFocused && searchResults.length > 0 && (
                <div style={{ position: 'absolute', top: '100%', left: '20px', right: '20px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', marginTop: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 1000, maxHeight: '250px', overflowY: 'auto' }}>
                  {searchResults.map(s => (
                    <div 
                      key={s.id} 
                      style={{ padding: '12px 15px', cursor: 'pointer', borderBottom: '1px solid #f1f5f9' }}
                      onClick={() => {
                        navigate(s.path);
                        setSearchQuery('');
                        setSearchResults([]);
                        setIsSearchFocused(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#0f172a', textAlign: 'left' }}>{s.title}</div>
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left' }}>
                        {s.desc}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>`;
jsxContent = jsxContent.replace(mobileMenuEnd, mobileSearchHtml);

fs.writeFileSync(appJsxPath, jsxContent);

// Update App.css
let cssContent = fs.readFileSync(appCssPath, 'utf8');
const cssAddition = `

/* Search Bar Mobile Visibility */
.mobile-search {
  display: none;
}

@media (max-width: 1024px) {
  .desktop-search {
    display: none !important;
  }
  .mobile-search {
    display: block !important;
  }
}
`;
if (!cssContent.includes('.desktop-search')) {
  fs.appendFileSync(appCssPath, cssAddition);
}

console.log("Search updated successfully.");
