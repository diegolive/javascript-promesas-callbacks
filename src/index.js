import { buscarHeroe } from './js/callbacks'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron2';

buscarHeroe( heroeId1, (err,heroe1) => {
    if (err) { return console.error(err); }

    buscarHeroe( heroeId2, (err,heroe2) => {
        if (err) { return console.error(err); }
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
        // Y si tengo qu enviar más héroes tengo que anidar mucho más eso es el "Callback Hell"
    });


});

console.log('Fin del programa.');