const fibsRec = n => (
    n <= 0 ? "Introduce un número válido."
    : n == 1 ? [1] 
    : n == 2 ? [1, 1]
    : [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
)

console.log(fibsRec(process.argv[2])) //Ejecutar con node fibs.js n