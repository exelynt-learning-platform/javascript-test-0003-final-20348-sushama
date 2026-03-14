// pattern3.js
// JAVASCRIPT TEST 0003: Alternating 1-0 triangular pattern

const TOTAL_ROWS = 6; // Number of rows in the triangle

for (let row = 1; row <= TOTAL_ROWS; row++) {
    let line = '';
    for (let col = 1; col <= row; col++) {
        // Determine whether to print 1 or 0
        // Alternate based on row+col sum
        const value = (row + col) % 2 === 0 ? 1 : 0;
        line += value + ' ';
    }
    console.log(line.trim()); // trim to remove trailing space
}
