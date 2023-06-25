function fibs(n) {
    let res = []
    let n1 = 1
    let n2 = 1

    if (n >= 1) {res.push(1)}
    if (n >= 2) {res.push(1)}

    for (let i=3; i<=n; i++) {
        const aux = n1
        n1 += n2
        n2 = aux
        res.push(n1)
    }

    return(res)
}

console.log(fibs(process.argv[2])) //Ejecutar con node fibs.js n