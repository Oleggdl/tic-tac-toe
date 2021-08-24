class TicTacToe {
    constructor() {
        this.b = true //x
        this.pole =
            [[null, null, null],
            [null, null, null],
            [null, null, null]]
    }

    getCurrentPlayerSymbol() {
        if (this.b) return 'x'
        else return 'o'
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.pole[rowIndex][columnIndex]=== null) {
            if (this.b) this.pole[rowIndex][columnIndex] = 'x'
            else this.pole[rowIndex][columnIndex] = 'o'
            this.b = !this.b
        }
    }

    isFinished() {
        if (this.noMoreTurns() || this.getWinner() !== null) return true
        else return false
    }

    getWinner() {
        let kolx = 0, kolo = 0
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.pole[i][j] === 'x') kolx++
                if (this.pole[i][j] === 'o') kolo++
            }
            if (kolx === 3) return 'x'
            if (kolo === 3) return 'o'
            kolx = 0
            kolo = 0
        }
        kolx = 0
        kolo = 0
        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                if (this.pole[i][j] === 'x') kolx++
                if (this.pole[i][j] === 'o') kolo++
            }
            if (kolx === 3) return 'x'
            if (kolo === 3) return 'o'
            kolx = 0
            kolo = 0
        }
        if (this.pole[1][1] === this.pole[0][0] && this.pole[1][1] === this.pole[2][2] && this.pole[1][1] !== null) return this.pole[1][1]
        if (this.pole[1][1] === this.pole[0][2] && this.pole[1][1] === this.pole[2][0] && this.pole[1][1] !== null) return this.pole[1][1]
        return null
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (this.pole[i][j] === null) return false
        return true
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) return true
        else return false
    }

    getFieldValue(rowIndex, colIndex) {
        return this.pole[rowIndex][colIndex]
    }
}
module.exports = TicTacToe;






// class TicTacToe {
//     constructor() {
//         this.b = false //x
//         this.pole =
//             [[null, null, null],
//             [null, null, null],
//             [null, null, null]]
//     }
//     nextTurn(row, col) {
//         if (this.b) this.pole[row][col] = 'x'
//         else this.pole[row][col] = 'y'
//         this.b = !this.b
//     }
//     getCurrentPlayerSymbol() {
//         if (this.b) return 'x'
//         else return 'o'
//     }
//     isFinished() {
//         if (this.noMoreTurns() || this.getWinner() !== null) return true
//         else return false
//     }
//     getWinner() {
//         let kolx = 0, kolo = 0
//         for (let i = 0; i < 3; i++)
//             for (let j = 0; j < 3; j++) {
//                 if (this.pole[i][j] === 'x') kolx++
//                 if (this.pole[i][j] === 'o') kolo++
//             }
//         if (kolx === 3) return 'x'
//         if (kolo === 3) return 'y'
//         kolx = 0
//         koly = 0
//         for (let j = 0; j < 3; j++)
//             for (let i = 0; i < 3; i++) {
//                 if (this.pole[i][j] === 'x') kolx++
//                 if (this.pole[i][j] === 'o') kolo++
//             }
//         if (kolx === 3) return 'x'
//         if (kolo === 3) return 'y'
//         kolx = 0
//         koly = 0
//         if (this.pole[1][1] === this.pole[0][0] && this.pole[1][1] === this.pole[2][2] && this.pole[1][1] !== null) return this.pole[1][1]
//         if (this.pole[1][1] === this.pole[2][0] && this.pole[1][1] === this.pole[2][0] && this.pole[1][1] !== null) return this.pole[1][1]
//         return null
//     }
//     noMoreTurns() {
//         for (let i = 0; i < 3; i++)
//             for (let j = 0; j < 3; j++)
//                 if (this.pole[i][j] === null) return false
//         return true
//     }
//     isDraw() {
//         if (this.noMoreTurns() && this.getWinner() === null) return true
//         else return false
//     }
//     getFieldValue(row, col) {
//         return this.pole[row][col]
//     }
// }