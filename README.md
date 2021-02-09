# etch-a-sketch

The idea of this project is taken from The Odin Project.

[LIVE DEMO](https://holynekk.github.io/etch-a-sketch/)

## Functionalities
- Moving the cursor on the grid will start to fill all small grid squares.
- There are four color options for this: random, cold, warm, darken. Random mode just fill cell wtith any color. Cold and warm color ranges are rgb(0,0,128)-rgb(128,256,256) and rgb(128,0,0)-rgb(256,128,256). Darken means incrementally Darken. Basically, it will darken each cell so that cells have darker gray ever passes on it and get eventually zero.
- Input is taken with slider input tool.
- There is also  clear button to clear all grid.

## Personal Thoughts

This was the first time of I'm using Dom manipulation, so it took much more time then it should to complete the JS side of the project. Still has some downsides and quirky stuff. Some of them are listed below and if I manage to fix them there will be an edit part at the bottom of this page.
1. If you change the color mode after you draw something on grid, grid is removed and created again. Namely, changing color is not I  expected. There not much freedom to use colors.
2. Still has some design bugs. Because some features are added later, some stuff does not look like they are in a group, but they should be.
3.  The dark mode of the age is not what I expected. The grid remains with the same color before we select dark mode.