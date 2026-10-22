import {mkdir,writeFile} from 'node:fs/promises';
import {slugs,details} from '../src/details.js';
for(const [i,slug] of slugs.entries()){
 await mkdir(`papers/${slug}`,{recursive:true});
 await writeFile(`papers/${slug}/index.html`,`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${details[i].question}"><title>${details[i].title} — Building Blocks</title></head><body data-paper="${i}"><div id="app"></div><script type="module" src="../../src/main.js"></script></body></html>`);
}
