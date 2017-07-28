// script.js



/*
Zadeklaruj zmienne 
a
h 
oraz 
triangleArea. 

Nadaj im wartość początkową dla a oraz h (jakieś liczby).
Przypisz do triangleArea działanie a*h/2.
Na koniec wypisz console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
Do pobrania danych możesz także skorzystać z funkcji prompt.
Wyślij zmiany na nowe repozytorium na GitHubie. Pamiętaj o udostępnieniu go mentorowi na GitHubie. Link do projektu wstaw poniżej.

*/

var a 				= prompt("Podaj szerokość podstawy trójkąta", 5);
var h 				= prompt("Podaj wysokość trójkąta", 5);
	triangleArea 	= a * h / 2;



document.getElementById("pole").innerHTML =
	"Pole trójkąta o podstawie a równej " + a + " i wysokości h równej " + h + " jest równe: " + triangleArea;

console.log('Pole trójkąta o podstawie a równej ' + a + ' i wysokości h równej ' + h + ' jest równe: ' + triangleArea);