// Prova i conti di index.html con le cifre dell'esempio: node verifica.mjs
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
const calcola = new Function(html.split('// calcola:inizio')[1].split('// calcola:fine')[0] + 'return calcola;')();
const v = Object.fromEntries([...html.matchAll(/<input id="(\w+)"[^>]*value="([\d.]+)"/g)].map(([, id, x]) => [id, Number(x)]));
assert.equal(Object.keys(v).length, 26, 'mi aspetto 26 numeri nei blocchi');

const r = calcola(v);
const cent = x => Math.round(x * 100) / 100;
assert.equal(cent(r.cm1), 56.32, 'margine sul prodotto');
assert.equal(cent(r.cm2), 38.07, "margine dopo i costi dell'ordine");
assert.equal(cent(r.cm3), 16.07, 'resta in tasca per ordine');
assert.equal(cent(r.mese), -3267, 'risultato del mese');
assert.equal(r.pareggio, 586, 'ordini per andare in pari');
assert.equal(cent(r.anno), 57.1, 'margine di un cliente in un anno');

// Il conto del mese deve tornare sommando le sue righe.
const mese = Object.entries(r.righe).filter(([id]) => id.startsWith('m-')).reduce((a, [, x]) => a + x, 0);
assert.equal(cent(mese), cent(r.mese), 'le righe del mese non tornano col risultato');

// Con la spedizione tutta a carico del negozio e nessun incasso, il margine scende esattamente di quanto incassavi.
const senza = calcola({ ...v, quotasped: 0 });
assert.equal(cent(r.cm2 - senza.cm2), cent(v.quotasped / 100 * v.spedcliente));

console.log('Conti a posto:', { ordine: cent(r.cm3), mese: cent(r.mese), pareggio: r.pareggio });
