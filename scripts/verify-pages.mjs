import {readFile,access,readdir} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {papers} from '../src/data.js';
import {details,slugs} from '../src/details.js';
import {applications} from '../src/applications.js';
import {connections} from '../src/connections.js';
if(new Set(slugs).size!==papers.length||details.length!==papers.length||applications.length!==papers.length)throw Error('Inconsistent paper collection');
for(const [i,slug] of slugs.entries()){
 if(!connections[slug]||!details[i].title||!applications[i].roles.length)throw Error(`Incomplete lesson ${slug}`);
 for(const earlier of connections[slug].related){const j=slugs.indexOf(earlier);if(j<0||Number(papers[j][4])>=Number(papers[i][4]))throw Error(`Invalid earlier-paper connection ${slug}`);}
}
const root=resolve('dist');
const publicRoot=new URL('https://lazybuilder.github.io/AI-Building-Blocks-KB/');
for(const file of ['index.html',...slugs.map(slug=>`papers/${slug}/index.html`)]){
 const absolute=resolve(root,file),html=await readFile(absolute,'utf8');
 for(const [,url] of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(url.startsWith('/')||/^https?:/.test(url))throw Error(`Nonrelative runtime asset in ${file}: ${url}`);
  const publicPage=new URL(file,publicRoot);
  const publicAsset=new URL(url,publicPage);
  if(!publicAsset.href.startsWith(publicRoot.href))throw Error(`Asset escapes GitHub repository path: ${publicAsset}`);
  const target=resolve(dirname(absolute),url);if(!target.startsWith(root+'/'))throw Error('Asset escapes static output');
  await access(target);
 }
 if(!html.includes('Building Blocks'))throw Error(`Missing page title in ${file}`);
}
for(const name of ['study-companions.webp','robot-notes.webp'])await access(resolve(root,'images',name));
await access(resolve(root,'.nojekyll'));
for(const filename of await readdir('src')){
 if(!filename.endsWith('.js'))continue;
 const source=await readFile(resolve('src',filename),'utf8');
 for(const forbidden of ['<form','<input','<textarea','document.cookie','localStorage','sessionStorage','sendBeacon','XMLHttpRequest','fetch('])if(source.includes(forbidden))throw Error(`Visitor-data or network API found: ${filename}/${forbidden}`);
}
console.log(`Verified ${slugs.length+1} static pages, repository-subpath assets, lesson data, images and privacy constraints.`);
