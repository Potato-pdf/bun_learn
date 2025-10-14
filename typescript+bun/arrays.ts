type CellValue = "x" | "o" | null;
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const board: GameBoard = [
    [null, "x", "o"],
    ["o", "x", null],
    [null, null, "x"]
];

