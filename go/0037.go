import "math/bits"

func solveSudoku(board [][]byte) {
	var rows, cols, boxes [9]int
	cells := [][2]int{}
	for r := 0; r < 9; r++ {
		for c := 0; c < 9; c++ {
			if board[r][c] == '.' {
				cells = append(cells, [2]int{r, c})
			} else {
				bit := 1 << uint(board[r][c]-'1')
				rows[r] |= bit
				cols[c] |= bit
				boxes[r/3*3+c/3] |= bit
			}
		}
	}
	var solve func(int) bool
	solve = func(pos int) bool {
		if pos == len(cells) {
			return true
		}
		best, minCount := pos, 10
		for i := pos; i < len(cells); i++ {
			r, c := cells[i][0], cells[i][1]
			count := bits.OnesCount(uint(511 & ^(rows[r] | cols[c] | boxes[r/3*3+c/3])))
			if count < minCount {
				best, minCount = i, count
			}
		}
		cells[pos], cells[best] = cells[best], cells[pos]
		r, c := cells[pos][0], cells[pos][1]
		b := r/3*3 + c/3
		available := 511 & ^(rows[r] | cols[c] | boxes[b])
		for available != 0 {
			bit := available & -available
			available -= bit
			rows[r] |= bit
			cols[c] |= bit
			boxes[b] |= bit
			board[r][c] = byte('1' + bits.TrailingZeros(uint(bit)))
			if solve(pos + 1) {
				return true
			}
			rows[r] &^= bit
			cols[c] &^= bit
			boxes[b] &^= bit
		}
		board[r][c] = '.'
		cells[pos], cells[best] = cells[best], cells[pos]
		return false
	}
	solve(0)
}
