// Consegna:
// Dati tre array contenenti:
// - una lista ordinata di 5 immagini,
//     - una lista ordinata dei relativi 5 luoghi e
//         - una lista di 5 news,
//             creare un carosello come nella foto allegata.

//MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

//MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

//MILESTONE 3
// Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
// - titolo e
//     - testo.
// Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.

//     BONUS:
// Aggiungere il ciclo infinito del carosello.Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso l’alto, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso il basso.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell’esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti.Non dedichiamo però al ripasso più di una mezz’ora, così da non perdere di vista il focus dell’esercizio.
// : party_wizard: Consigli del giorno:
// 1. costruiamo del carosello una versione statica contenente un’immagine grande con del testo ben posizionato e una miniatura.Di questa versione statica al momento opportuno commenteremo(oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js.Potremo quindi usarli come “template”.
// 2. scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto(starà a voi capire quale) rispondete a questa domanda: “Quanti cicli servono ?”


// arrays
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// contenitori per gli elementi da inserire
const imgContainer = document.getElementsByClassName('img-container');
const imgTitle = document.getElementsByClassName('img-title');
const imgText = document.getElementsByClassName('img-text');


// creazione ciclo for per far girare e inserire immagini titoli e testi
for (let i = 0; i < items.length; i++) {

    let image = `<img src="${items[i]}" alt="${items[i]}">`;
    let imageTitle = `<h1>${title[i]}</h1>`;
    let imageText = `<div>${text[i]}</div>`;

    imgContainer.innerHTML += image;
    imgTitle.innerHTML += imageTitle;
    imgText.innerHTML += imageText;
}

// nodes
const imagesDom = document.querySelectorAll('.img-container');
const titlesDom = document.querySelectorAll('.img-desc .img-title');
const textsDom = document.querySelectorAll('.img-desc .img-text');

// aggiungo le classi primo e ultimo
imagesDom[0].classList.add('first', 'active');
imagesDom[imagesDom.length - 1].classList.add('last');

titlesDom[0].classList.add('first', 'active');
titlesDom[titlesDom.length - 1].classList.add('last');

textsDom[0].classList.add('first', 'active');
textsDom[textsDom.length - 1].classList.add('last');



// costanti bottoni
const upButton = document.querySelector('.img-slider .up');
const downButton = document.querySelector('.img-slider .down');


// mega calcolone per mettere le classi al click
downButton.addEventListener('click', function () {

    const imageActive = document.querySelector('.img-container img.active');
    const titleActive = document.querySelector('.img-desc .img-title.active');
    const textActive = document.querySelector('.img-desc .img-text.active');

    let classes = imageActive.classlist;

    let last = false;

    for (let i = 0; i < classes.length; i++) {
        
        if (classes[i] == 'last') {

            last = true;
        }
    }

    // aggiunta e rimozione active
    if (last == false) {
        imageActive.classList.remove('active');
        titleActive.classList.remove('active');
        textActive.classList.remove('active');

        const imgNext = imageActive.nextElementSibling;
        const titleNext = titleActive.nextElementSibling;
        const textNext = textActive.nextElementSibling;

        imgNext.classList.add('active');
        titleNext.classList.add('active');
        textNext.classList.add('active');
    } else {
        // nextButton.classList.remove 'able';
    }
});