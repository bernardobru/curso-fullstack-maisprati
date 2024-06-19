function fibonacci() {
    let n2 = 1;
    let n3 = 1;
    let i = 0;
    while(i < 7) {
        let n1 = n2;
        console.log(n1)
        n2 = n3;
        n3 += n1;
        i++;
    }
}
fibonacci();