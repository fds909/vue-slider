/*
    Vue Slider
    Partendo da un array di immagini, realizziamo uno slider con Vue.js come da mockup
    Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile
    passando alla successiva oppure alla precedente.
*/

var app = new Vue (
    {
        el: '#root',
        data : {
            images: ['../img/landscape1.jpg', '../img/landscape2.jpg',
                    '../img/landscape3.jpg', '../img/landscape4.jpg'],
            currentImage: 0
        },
        methods: {
            nextImage: function() {
                // se si trova in ultima posizione
                if (this.currentImage == this.images.length - 1) {
                    // riparte dalla prima immagine
                    this.currentImage = 0;
                } else {
                    this.currentImage++;
                }
            },
            previousImage: function() {
                // se si trova in prima posizione
                if (this.currentImage == 0) {
                    // torna all'ultima immagine
                    this.currentImage = this.images.length - 1;
                } else {
                    this.currentImage--;
                }
            }
        }
    }
)