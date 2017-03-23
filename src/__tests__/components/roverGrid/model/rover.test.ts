import {Rover, RoverDirection, Command} from "../../../../components/roverGrid/model/rover";
import Grid from "../../../../components/roverGrid/model/grid";

const MOVEMENT_COMMANDS = [
    Command.MOVE_FORWARD,
    Command.MOVE_FORWARD,
    Command.MOVE_FORWARD,
    Command.MOVE_BACKWARD];

const TURNING_COMMANDS = [
    Command.TURN_RIGHT,
    Command.TURN_RIGHT,
    Command.TURN_RIGHT,
    Command.TURN_LEFT];

const grid = new Grid(5, 5);

test('movement is correct when facing north', () => {
    let rover = new Rover(0, 0, RoverDirection.NORTH, grid);

    let actual = rover.move(MOVEMENT_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(2);
    expect(actual.direction).toBe(RoverDirection.NORTH);
});

test('movement is correct when facing south', () => {
    let rover = new Rover(0, 2, RoverDirection.SOUTH, grid);

    let actual = rover.move(MOVEMENT_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.SOUTH);
});

test('movement is correct when facing east', () => {
    let rover = new Rover(0, 0, RoverDirection.EAST, grid);

    let actual = rover.move(MOVEMENT_COMMANDS);

    expect(actual.xPos).toBe(2);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.EAST);
});

test('movement is correct when facing east', () => {
    let rover = new Rover(2, 0, RoverDirection.WEST, grid);

    let actual = rover.move(MOVEMENT_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.WEST);
});

test('turning is correct when facing north', () => {
    let rover = new Rover(0, 0, RoverDirection.NORTH, grid);

    let actual = rover.move(TURNING_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.SOUTH);
});

test('turning is correct when facing south', () => {
    let rover = new Rover(0, 0, RoverDirection.SOUTH, grid);

    let actual = rover.move(TURNING_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.NORTH);
});

test('turning is correct when facing east', () => {
    let rover = new Rover(0, 0, RoverDirection.EAST, grid);

    let actual = rover.move(TURNING_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.WEST);
});

test('turning is correct when facing west', () => {
    let rover = new Rover(0, 0, RoverDirection.WEST, grid);

    let actual = rover.move(TURNING_COMMANDS);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.EAST);
});

test('wrapping works on y axis', () => {
    let rover = new Rover(0, grid.height - 1, RoverDirection.NORTH, grid);

    let actual = rover.move([Command.MOVE_FORWARD]);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.NORTH);
});

test('wrapping works on x axis', () => {
    let rover = new Rover(grid.width - 1, 0, RoverDirection.EAST, grid);

    let actual = rover.move([Command.MOVE_FORWARD]);

    expect(actual.xPos).toBe(0);
    expect(actual.yPos).toBe(0);
    expect(actual.direction).toBe(RoverDirection.EAST);
});