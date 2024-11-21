// 1. Grundläggande: Summera två tal
// Skriv en arrow function som tar två parametrar och returnerar summan av dem.
const add = (a, b) => a + b;
console.log(add(5, 3)); // Förväntat resultat: 8b

// 2. Filter: Filtrera ut jämna tal
// Använd en arrow function för att filtrera en array så att endast jämna tal återstår.
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Förväntat resultat: [2, 4, 6]

// 3. Map: Fyrdubbla värden i en array
// Använd en arrow function för att multiplicera varje tal i arrayen med 4.
const quadrupled = numbers.map((num) => num * 4);
console.log(quadrupled); // Förväntat resultat: [4, 8, 12, 16, 20, 24]

// 4. Modifiera objekt i en array
// Använd en arrow function för att lägga till en nyckel "active" med värdet true i varje objekt.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const updatedUsers = users.map((user) => ({ ...user, active: true }));
console.log(updatedUsers);
// Förväntat resultat: [{ name: "Alice", age: 25, active: true }, { name: "Bob", age: 30, active: true }]

// 5. Filter: Hitta personer över 18 år
// Använd en arrow function för att filtrera en array av objekt och returnera endast personer äldre än 18.
const filteredUsers = users.filter((user) => user.age > 18);
console.log(filteredUsers);
// Förväntat resultat: Samma array eftersom båda är över 18.

// 6. Map: Ändra namn till versaler
// Använd en arrow function för att ändra namnet på alla personer till versaler.
const capitalizedNames = users.map((user) => ({ ...user, name: user.name.toUpperCase() }));
console.log(capitalizedNames);
// Förväntat resultat: [{ name: "ALICE", age: 25 }, { name: "BOB", age: 30 }]

// 7. ForEach: Logga varje namn
// Använd en arrow function för att iterera över en array av objekt och logga namnen.
users.forEach((user) => console.log(user.name));
// Förväntat resultat: "Alice", "Bob"

// 8. Kombinera Map och Filter
// Hämta namnen på alla personer som är äldre än 18 och konvertera dem till gemener.
const namesOfAdults = users.filter((user) => user.age > 18).map((user) => user.name.toLowerCase());
console.log(namesOfAdults);
// Förväntat resultat: ["alice", "bob"]

// 9. Filter: Hitta specifika värden
// Använd en arrow function för att hitta alla tal som är större än 3.
const greaterThanThree = numbers.filter((num) => num > 3);
console.log(greaterThanThree); // Förväntat resultat: [4, 5, 6]

// 10. Map: Skapa en array med längder av strängar
// Använd en arrow function för att skapa en array med längden på varje sträng.
const words = ["apple", "banana", "cherry"];
const lengths = words.map((word) => word.length);
console.log(lengths); // Förväntat resultat: [5, 6, 6]
