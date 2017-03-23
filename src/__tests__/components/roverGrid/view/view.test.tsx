import * as renderer from 'react-test-renderer';
import * as React from 'react';
import RoverGrid from "../../../../components/roverGrid/view/roverGrid";
import {Rover, RoverDirection} from "../../../../components/roverGrid/model/rover";
import Grid from "../../../../components/roverGrid/model/grid";
import RoverGridCell from "../../../../components/roverGrid/view/roverGridCell";

test('Rover Grid renders correctly', () => {
    let grid = new Grid(5, 5);
    let rover = new Rover(0, 0, RoverDirection.NORTH, grid);

    const tree = renderer.create(
        <RoverGrid rover={rover} grid={grid} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Rover Grid Cell renders correctly', () => {
    let xPos = 0;
    let yPos = 0;
    let x = 5;
    let y = 5;

    const tree = renderer.create(
        <RoverGridCell xPos={xPos} yPos={yPos} x={x} y={y} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});