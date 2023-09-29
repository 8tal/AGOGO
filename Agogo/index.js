// //20 SEC
// // masuqer le chrono
// const MOchone = document.querySelector('.All');
// MOchone.style.display = 'none';
// // chargment de la page
// document.addEventListener('DOMContentLoaded', function () {
//     const button20Sec = document.querySelector('button:nth-child(1)');
//     const lesSecondes = document.getElementById('secondes');
//     let Interval;
//     button20Sec.addEventListener('click', function () {
//         let vingthsecondes = 20;
//         lesSecondes.innerText = vingthsecondes.toString().padStart(2, '0');
//         MOchone.style.display = 'block';
//         Interval = setInterval(function () {
//             vingthsecondes--;
//             if (vingthsecondes >= 0) {
//                 lesSecondes.innerText = vingthsecondes.toString().padStart(2, '0');

//             } else {
//                 clearInterval(Interval);
//                 MOchone.style.display = 'none';
//             }
//         }, 1000);
//  });
// })

// //Cappucino5
// document.addEventListener('DOMContentLoaded', function (){
//     const buttonCappucino5 = document.querySelector('button:nth-child(2)');

//     const lesMinutes = document.getElementById('minutes');
//   const lesSecondes = document.getElementById('secondes');
//   const MOnchrono = document.querySelector('.All');
//     let Interval;
//     buttonCappucino5.addEventListener('click', function () {
//         let cinqMinutes = 5;
//         let secondes = 0;
//         lesMinutes.innerText = cinqMinutes.toString().padStart(2, '0');
//         lesSecondes.innerText = secondes.toString().padStart(2, '0')
//         MOnchrono.style.display = 'block';
//         Interval = setInterval(function () {
//             if (cinqMinutes === 0 && secondes === 0) {
//                 clearInterval(Interval)
//                 MOnchrono.style.display = 'none';

//             } else {
//                 if( secondes === 0 ) {
//                     cinqMinutes--;
//                     secondes = 59;
//                 } else {
//                     secondes--;
//                 }
//                 lesMinutes.innerText = cinqMinutes.toString().padStart(2, '0');
//                 lesSecondes.innerText = secondes.toString().padStart(2, '0');
// }
// },1000)
// })

// })
// //  ThE 15
// document.addEventListener('DOMContentLoaded', function (){
//     const ThE15 = document.querySelector('button:nth-child(3)');

//     const lesMinutes = document.getElementById('minutes');
//   const lesSecondes = document.getElementById('secondes');
//   const MOnchrono = document.querySelector('.All');
//     let Interval;
//     ThE15.addEventListener('click', function () {
//         let quinzesMinutes = 15;
//         let secondes = 0;
//         lesMinutes.innerText = quinzesMinutes.toString().padStart(2, '0');
//         lesSecondes.innerText = secondes.toString().padStart(2, '0')
//         MOnchrono.style.display = 'block';
//         Interval = setInterval(function () {
//             if (quinzesMinutes === 0 && secondes === 0) {
//                 clearInterval(Interval)
//                 MOnchrono.style.display = 'none';

//             } else {
//                 if( secondes === 0 ) {
//                     quinzesMinutes--;
//                     secondes = 59;
//                 } else {
//                     secondes--;
//                 }
//                 lesMinutes.innerText = quinzesMinutes.toString().padStart(2, '0');
//                 lesSecondes.innerText = secondes.toString().padStart(2, '0');
// }
// },1000)
// })

// })
// // PETIT DEJEUNER20
// document.addEventListener('DOMContentLoaded', function (){
//     const DEJEUNER20 = document.querySelector('button:nth-child(4)');

//     const lesMinutes = document.getElementById('minutes');
//   const lesSecondes = document.getElementById('secondes');
//   const MOnchrono = document.querySelector('.All');
//     let Interval;
//     DEJEUNER20.addEventListener('click', function () {
//         let vingthMinutes = 20;
//         let secondes = 0;
//         lesMinutes.innerText = vingthMinutes.toString().padStart(2, '0');
//         lesSecondes.innerText = secondes.toString().padStart(2, '0')
//         MOnchrono.style.display = 'block';
//         Interval = setInterval(function () {
//             if (vingthMinutes === 0 && secondes === 0) {
//                 clearInterval(Interval)
//                 MOnchrono.style.display = 'none';

//             } else {
//                 if( secondes === 0 ) {
//                     vingthMinutes--;
//                     secondes = 59;
//                 } else {
//                     secondes--;
//                 }
//                 lesMinutes.innerText = vingthMinutes.toString().padStart(2, '0');
//                 lesSecondes.innerText = secondes.toString().padStart(2, '0');
// }
// },1000)
// })

// })
// // DEjeuner30
// document.addEventListener('DOMContentLoaded', function (){
//     const DEjeuner30 = document.querySelector('button:nth-child(5)');

//     const lesMinutes = document.getElementById('minutes');
//   const lesSecondes = document.getElementById('secondes');
//   const MOnchrono = document.querySelector('.All');
//     let Interval;
//     DEjeuner30.addEventListener('click', function () {
//         let trenteMinutes = 30;
//         let secondes = 0;
//         lesMinutes.innerText = trenteMinutes.toString().padStart(2, '0');
//         lesSecondes.innerText = secondes.toString().padStart(2, '0')
//         MOnchrono.style.display = 'block';
//         Interval = setInterval(function () {
//             if (trenteMinutes === 0 && secondes === 0) {
//                 clearInterval(Interval)
//                 MOnchrono.style.display = 'none';

//             } else {
//                 if( secondes === 0 ) {
//                     trenteMinutes--;
//                     secondes = 59;
//                 } else {
//                     secondes--;
//                 }
//                 lesMinutes.innerText = trenteMinutes.toString().padStart(2, '0');
//                 lesSecondes.innerText = secondes.toString().padStart(2, '0');
// }
// },1000)
// })

// })
// // input
// document.addEventListener('DOMContentLoaded', function () {
//     const input = document.getElementById('time');
//     const chronoDiv = document.querySelector('.All');
//     const minutesDisplay = document.getElementById('minutes');
//     const secondsDisplay = document.getElementById('secondes');

//     input.addEventListener('input', function () {
//         const minutes = parseInt(this.value);
//         if (!isNaN(minutes) && minutes >= 0) {
//             chronoDiv.style.display = 'block';
//             startCountdown(minutes);
//         } else {
//             chronoDiv.style.display = 'none';
//         }
//     });
// n
//     function startCountdow(minutes) {
//         let seconds = minutes * 60;

//         function updateDisplay() {
//             const minutesLeft = Math.floor(seconds / 60);
//             const secondsLeft = seconds % 60;

//             minutesDisplay.textContent = minutesLeft.toString().padStart(2, '0');
//             secondsDisplay.textContent = secondsLeft.toString().padStart(2, '0');
//         }

//         const countdownInterval = setInterval(function () {
//             if (seconds > 0) {
//                 seconds--;
//                 updateDisplay();
//             } else {
//                 clearInterval(countdownInterval);
//                 chronoDiv.style.display = 'none';
//             }
//         }, 1000);
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const chronoDiv = document.querySelector('.All');
    const minutesDisplay = document.getElementById('minutes');
    const secondsDisplay = document.getElementById('secondes');
    let Interval;
chronoDiv.style.display = 'none';
    // Fonction pour démarrer le compte à rebours
    function décompteur(minutes) {
        let seconds = minutes * 60;

        function MiseAjour() {
            const minutesLeft = Math.floor(seconds / 60);
            const secondsLeft = seconds % 60;

            minutesDisplay.textContent = minutesLeft.toString().padStart(2, '0');
            secondsDisplay.textContent = secondsLeft.toString().padStart(2, '0');
        }

        Interval = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                MiseAjour();
            } else {
                clearInterval(Interval);
                chronoDiv.style.display = 'none';
            }
        }, 1000);
    }

    // Bouton 20 SECS
    const button20Sec = document.querySelector('button:nth-child(1)');
    button20Sec.addEventListener('click', function () {
        let vingthsecondes = 20;
        secondsDisplay.innerText = vingthsecondes.toString().padStart(2, '0');
        chronoDiv.style.display = 'block';
        clearInterval(Interval); // Arrêter un éventuel chronomètre en cour
        décompteur(vingthsecondes);
// console.log(décompteur);
        // Appeler la fonction avec 0 minutes (soit 20 secondes)
    });

    // Bouton Cappucino 5
    const buttonCappucino5 = document.querySelector('button:nth-child(2)');
    buttonCappucino5.addEventListener('click', function () {
        let cinqMinutes = 5;
        minutesDisplay.innerText = cinqMinutes.toString().padStart(2, '0');
        secondsDisplay.innerText = "00";
        chronoDiv.style.display = 'block';
        clearInterval(Interval);
        décompteur(cinqMinutes);
    });

    // Bouton THE 15
    const ThE15 = document.querySelector('button:nth-child(3)');
    ThE15.addEventListener('click', function () {
        let quinzesMinutes = 15;
        minutesDisplay.innerText = quinzesMinutes.toString().padStart(2, '0');
        secondsDisplay.innerText = "00";
        chronoDiv.style.display = 'block';
        clearInterval(Interval);
        décompteur(quinzesMinutes);
    });

    // Bouton PETIT DEJEUNER 20
    const DEJEUNER20 = document.querySelector('button:nth-child(4)');
    DEJEUNER20.addEventListener('click', function () {
        let vingthMinutes = 20;
        minutesDisplay.innerText = vingthMinutes.toString().padStart(2, '0');
        secondsDisplay.innerText = "00";
        chronoDiv.style.display = 'block';
        clearInterval(Interval);
        décompteur(vingthMinutes);
    });

    // Bouton DEjeuner 30
    const DEjeuner30 = document.querySelector('button:nth-child(5)');
    DEjeuner30.addEventListener('click', function () {
        let trenteMinutes = 30;
        minutesDisplay.innerText = trenteMinutes.toString().padStart(2, '0');
        secondsDisplay.innerText = "00";
        chronoDiv.style.display = 'block';
        clearInterval(Interval);
        décompteur(trenteMinutes);
    });

    // Gestion de l'input
    const input = document.getElementById('time');
    input.addEventListener('input', function () {
        const minutes = parseInt(this.value);
        if (!isNaN(minutes) && minutes >= 0) {
            chronoDiv.style.display = 'block';
            clearInterval(Interval);
            décompteur(minutes);
        } else {
            chronoDiv.style.display = 'none';
        }
    });
});

