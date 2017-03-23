"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_test_renderer_1 = require("react-test-renderer");
var RoverGrid_1 = require("../../../../components/roverGrid/view/roverGrid");
var rover_1 = require("../../../../components/roverGrid/model/rover");
var grid_1 = require("../../../../components/roverGrid/model/grid");
test('Link renders correctly', function () {
    var grid = new grid_1.default(5, 5);
    var rover = new rover_1.Rover(0, 0, rover_1.RoverDirection.NORTH, grid);
    var tree = react_test_renderer_1.default.create(<RoverGrid_1.default rover={rover} grid={grid}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
