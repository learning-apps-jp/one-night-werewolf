const fs=require('fs'),path=require('path');
const at=n=>path.join(__dirname,n);
let css=fs.readFileSync(at('style.css'),'utf8');
const image=fs.readFileSync(at('night-village.webp')).toString('base64');
css=css.replaceAll("url('night-village.png')",'var(--night-art)');
css=`:root{--night-art:url('data:image/webp;base64,${image}')}\n`+css;
const html=fs.readFileSync(at('index.html'),'utf8').replace('<link rel="stylesheet" href="style.css">',`<style>${css}</style>`).replace('<script src="game.js"></script>',`<script>${fs.readFileSync(at('game.js'),'utf8')}</script>`);
fs.writeFileSync(at('play.html'),html);console.log('Built standalone play.html');
