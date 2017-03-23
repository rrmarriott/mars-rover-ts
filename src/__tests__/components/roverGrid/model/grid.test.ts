import Grid from "../../../../components/roverGrid/model/grid";

test('grid is created', () => {
    let grid = new Grid(1, 2);

    expect(grid.height).toBe(1);
    expect(grid.width).toBe(2);
})