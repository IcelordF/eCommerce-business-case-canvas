# eCommerce Business Case Canvas

Un canvas su una pagina per descrivere un negozio online, derivato dal Business Model Canvas di Osterwalder, con un conto a spanne della redditività. Bozza 0.3 del 5/10/2026.

Il canvas è `index.html`: si apre nel browser, non serve build. `node verifica.mjs` prova i conti con le cifre dell'esempio.

## L'idea

L'unità di misura è l'ordine: da dove arriva, come parte, se torna indietro, quanto lascia in tasca.

## Perché il Business Model Canvas non basta

Il BMC funziona per qualsiasi azienda, e proprio per questo su un eCommerce dice poco. Metà dei blocchi si riempie con risposte che valgono per tutti: canali "sito e social", relazione "newsletter", risorse chiave "piattaforma e magazzino".

E tre cose che in un negozio online decidono tutto non hanno un posto.

- Il conto del singolo ordine. Il BMC ragiona su ricavi e costi dell'azienda. Un negozio che cresce di fatturato e perde soldi su ogni ordine, dopo spedizione, pagamento, marketing e resi, sul BMC sembra sano.
- Quello che succede dopo il clic su "Acquista". Evasione, consegna, tracking, resi, assistenza: lì la promessa viene mantenuta o tradita, e lì si decide se il cliente torna. Nel BMC è sparso tra Canali e Relazioni con i clienti.
- Il tempo. Il primo ordine spesso rende poco o niente, il margine arriva con il secondo e il terzo. Il BMC è una fotografia.

## Cosa esiste già

"Ecommerce business model canvas" come espressione esiste: [Sales Layer](https://blog.saleslayer.com/ecommerce-business-model-canvas), [BDC](https://www.bdc.ca/en/articles-tools/blog/short-guide-using-business-model-canvas-start-e-commerce-website), [Shopify](https://www.shopify.com/blog/business-model-canvas), [ecommerce-nation](https://www.ecommerce-nation.com/business-model-canvas-examples-step-guide/). In tutti i casi è il BMC con i suoi nove blocchi, riempito con esempi di negozi online. Nessuno cambia la struttura e nessuno fa i conti. Ricerca veloce del 30/9/2026, da approfondire prima di usare il nome in pubblico.

## Com'è fatto

Si lavora in due passi, e la pagina li tiene separati.

Passo 1, la strategia: i nove blocchi con le loro domande, senza numeri. Passo 2, i conti: gli stessi nove blocchi mostrano i loro numeri, e sotto tre scontrini li mettono insieme.

Stessa geometria del BMC: a destra il cliente, a sinistra come lavori, al centro la proposta, sotto i soldi.

Le tre righe centrali seguono il tempo: prima dell'ordine, l'ordine, dopo l'ordine. Così a destra si legge il percorso del cliente (ti trova, compra, torna) e a sinistra quello dell'ordine (la merce c'è, parte e arriva, a volte torna indietro).

Ogni blocco ha le sue domande e i suoi numeri. Le domande sono in prima persona ("Perché compreranno da me?", "Dove vendo?"): chi compila il canvas le fa a sé stesso. Sotto, al posto di Struttura dei costi e Flussi di ricavi, tre conti che raccolgono tutti i numeri dei blocchi: l'ordine, il mese, il cliente in un anno. Nessun numero resta fuori dai conti.

| Blocco | Posizione | Dal BMC | Numeri |
|---|---|---|---|
| Proposta | centro, tutta l'altezza | Proposta di valore | prezzo pieno, sconti medi, costo della merce |
| Clienti | destra, tutta l'altezza | Segmenti di clientela | ordini al mese, ordini per cliente in un anno |
| Acquisizione | prima dell'ordine, lato cliente | Canali, fase di conoscenza | marketing al mese, costo di un cliente nuovo |
| Conversione | l'ordine, lato cliente | Canali, fase di acquisto | quota di ordini che paga la spedizione e quanto, commissioni di pagamento, commissioni di marketplace e affiliati |
| Dopo l'acquisto | dopo l'ordine, lato cliente | Relazioni con i clienti e Canali, post-vendita | richieste di assistenza ogni 100 ordini, costo di una richiesta |
| Magazzino | prima dell'ordine, lato operazioni | Risorse chiave | spazi al mese, merce invenduta o svalutata al mese |
| Consegna | l'ordine, lato operazioni | Attività chiave e Canali, fase di consegna | costo di una spedizione al corriere, evasione e imballo, pacchi persi o rientrati e il loro costo |
| Resi | dopo l'ordine, lato operazioni | nuovo | quota di rimborsi, quota di cambi, costo di un rientro |
| Partner e strumenti | sinistra, tutta l'altezza | Partner chiave e Risorse chiave | persone, software, agenzie, altri costi fissi, al mese |
| Conto dell'ordine | fondo | Flussi di ricavi e Struttura dei costi, per un ordine | calcolato |
| Conto del mese | fondo | Struttura dei costi | calcolato |
| Il cliente nel tempo | fondo | nuovo | calcolato |

## I conti

Tutto senza IVA. Le percentuali dell'ordine sono su quanto paga il cliente (prezzo pieno meno sconti).

```
pagato = prezzo pieno − sconti

margine sul prodotto = prezzo pieno − sconti − costo della merce
                     − quota rimborsi × (pagato − costo della merce)

margine dopo i costi dell'ordine = margine sul prodotto
  + quota di ordini che pagano la spedizione × quanto la pagano
  − costo della spedizione al corriere
  − evasione e imballo
  − commissioni di pagamento × pagato
  − commissioni di marketplace e affiliati × pagato
  − quota di pacchi persi o rientrati × loro costo
  − richieste ogni 100 ordini / 100 × costo di una richiesta
  − quota rimborsi × costo di un rientro
  − quota cambi × (costo di un rientro + spedizione + evasione)

resta in tasca per ordine = margine dopo i costi dell'ordine − marketing al mese / ordini al mese

risultato del mese = ordini × margine dopo i costi dell'ordine − marketing − costi fissi
pareggio = (marketing + costi fissi) / margine dopo i costi dell'ordine
cliente in un anno = ordini per cliente × margine dopo i costi dell'ordine, confrontato col costo di un cliente nuovo
```

Il rimborso toglie il margine dell'ordine ma la merce torna; il cambio tiene il margine ma costa un rientro e una spedizione in più. I costi fissi sono voce per voce ed entrano nel risultato del mese.

## Punti ciechi che restano

Il conto è a cazzotto. Questi li so e li ho lasciati fuori di proposito:

- commissioni di pagamento e marketplace calcolate sul valore senza IVA e senza spedizione, e pagate anche sugli ordini rimborsati;
- un reso è sempre l'ordine intero;
- nel pareggio il marketing resta fermo mentre crescono gli ordini, nella realtà più ordini chiedono più marketing;
- il marketing per ordine è una media: non separa clienti nuovi e riacquisti;
- il costo della spedizione è una media tra paesi e pesi;
- il capitale fermo in scorte non ha un costo, c'è solo la merce che perde valore;
- persone e assistenza: se chi risponde ai clienti è già tra le persone al mese, il costo di una richiesta va a zero, altrimenti si conta due volte;
- niente tasse, ammortamenti, finanziamenti.

## L'esempio

L'esempio nel canvas è inventato: un piccolo calzaturificio marchigiano che vende online in Italia e in Germania. Le cifre sono verosimili per un marchio piccolo di scarpe, non vengono da un negozio vero. Con quelle cifre ogni ordine lascia 16,07 € dopo il marketing, ma il mese chiude a −3.267 €: per andare in pari servono 586 ordini invece di 500.

## Licenza e crediti

Il canvas è un adattamento del Business Model Canvas, ideato da [Strategyzer AG](https://www.strategyzer.com) e distribuito con licenza Creative Commons Attribuzione - Condividi allo stesso modo 3.0 Unported. Quella licenza chiede due cose a chi ne fa una variante: citare l'originale e distribuire la variante con la stessa licenza o con una sua versione successiva. Questo progetto usa la versione successiva: [Creative Commons Attribuzione - Condividi allo stesso modo 4.0 Internazionale](https://creativecommons.org/licenses/by-sa/4.0/deed.it) (CC BY-SA 4.0), testo completo in `LICENSE`. Il Lean Canvas di Ash Maurya è nato allo stesso modo, come adattamento del Business Model Canvas.

In pratica puoi usarlo, cambiarlo e ridistribuirlo, anche per lavoro, a due condizioni: citi "eCommerce Business Case Canvas di Roberto Fumarola, adattato dal Business Model Canvas di Strategyzer AG" e distribuisci le tue varianti con la stessa licenza.

La nota in fondo a `index.html` è l'attribuzione: va lasciata in ogni versione, anche stampata o messa in una slide.

Altro da citare, per obbligo: niente.

- I font (Big Shoulders Display, Public Sans, IBM Plex Mono) sono caricati da Google Fonts e hanno licenza SIL Open Font License 1.1. Non chiede citazioni finché non ridistribuiamo i file dei font.
- I conti (margine su tre livelli, pareggio, margine di un cliente contro il suo costo) sono pratica comune di chi fa eCommerce, non il framework di qualcuno.
- I marchi nell'esempio (Shopify, Klarna, PayPal, Meta, Instagram, Google) sono citati come esempi. In una versione pubblica conviene valutare se renderli generici.

Due attenzioni sul nome: "Business Model Canvas" si usa solo per dire da dove deriva, non dentro il nome del nostro, e niente logo di Strategyzer.

## Il nome

eCommerce Business Case Canvas, deciso il 5/10/2026. Doveva avere dentro "eCommerce" e far capire che lo strumento è due cose: un'analisi ad alto livello e poi una economica di massima. "Business case" è il termine che esiste già per questo: meno di un business plan, un ragionamento con i conti a spanne.

Scartati: eCommerce Strategy & Economics Canvas (l'altro finalista), i nomi senza "eCommerce" (Order-to-Profit Canvas, Quadra, Lo Scontrino, Canvas a conti fatti) e "eCommerce Strategic Canvas", che dice solo il primo passo e ricorda lo Strategy Canvas di Blue Ocean Strategy. La cartella e il repository restano `ecommerce-canvas`.

## Domande aperte

- I resi meritano un blocco a sé o stanno dentro Dopo l'acquisto? Per la moda sì, per il food forse no.
- Marketplace: canale di acquisizione, canale di vendita, o un canvas a parte? Chi vende l'80% su Amazon ha un altro negozio.
- Le righe "prima, durante, dopo" reggono anche per un abbonamento, dove l'ordine si ripete da solo?
- B2B e ingrosso: fuori, per ora.
- Come chiamare il secondo passo: per ora "Conti". L'alternativa era "tattica", che però di solito vuol dire le azioni, non i numeri. Potrebbe diventare un terzo passo: cosa cambi dopo aver visto i conti.
