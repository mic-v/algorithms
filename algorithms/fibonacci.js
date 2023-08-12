function fibsRec(n) {
    return (n == 0) ? [0] :
            (n == 1) ? [0,1] :
            [...fibsRec(n-1), fibsRec(n-1)[n-1] + fibsRec(n-1)[n-2]];
}