const fs = require('fs');
const filePath = 'src/App.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const standardLayout = `        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2rem' }}>{service.title}</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
            {service.desc}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)', marginTop: '30px' }}>
            <em>Detailed content for this service will be updated shortly.</em>
          </p>
        </div>`;

let startIndex = content.indexOf("{id === 'gis' ? (");
let endIndex = content.indexOf('</div>\n        )}', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + standardLayout + content.substring(endIndex + 18);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('App.jsx successfully rolled back to standard layout!');
} else {
  console.log('Could not find the target block in App.jsx');
}
