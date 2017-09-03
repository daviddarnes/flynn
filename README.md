Flynn
=====

## A CSS grid

A grid that doesn't fill up your CSS with glossy buttons, overworked typography base or styles that you'll never use. I've used this on a number of projects and I think it gets the job done. Feel free to use it if you like.

Its just a grid.

[Demo page](http://daviddarnes.github.io/flynn)

## v2 Changes

- CSS Grid spec properties have been added, behind an `@supports` query
- Due to the change to the Grid spec, the `[shift-]` only works from the very left on the first item. Would recommend checking this behaviour in your supported browsers
- The main file has been switched to the `scss` file, expected the most desired file

## Usage

### npm:

1. `npm install --save https://github.com/daviddarnes/flynn.git`
2. Import the file with your normal project process

### Manual:

1. Copy the [`grid.css`](https://github.com/daviddarnes/flynn/blob/master/grid/grid.css), [`grid.scss`](https://github.com/daviddarnes/flynn/blob/master/grid/grid.scss) or [`grid.less`](https://github.com/daviddarnes/flynn/blob/master/grid/grid.less) file into your project
2. Done

### Bower:

1. `bower install --save https://github.com/daviddarnes/flynn.git`
2. Import the file with your normal project process

### Credits
Inspired by:
* [Tyler Tate's 1kb Grid](http://www.usabilitypost.com/2009/05/29/the-1kb-css-grid-part-1/)
* [Bootstrap grid structure](http://getbootstrap.com/).
