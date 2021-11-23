# Technical application for Microsoft

## Problem 1

The Problem 1 of the tech test is implemented in `src/utils/binaryTreeUtils.js`

In this file there are 2 methods: `arrayToBinaryTree` and `jsonToBinaryTree`

### arrayToBinaryTree
Converst the array that is read from the file input to a Binary Tree to be displayed in the TextArea below it

![array to binary tree]('./images/array_to_bintree.jpeg')

### jsonToBinaryTree
Converst the textarea's json input to a Binary Tree to update the Output section

![json to binary tree]('./images/json_to_bintree.jpeg')
## Problem 2

### Style

For the Web Application style, the chosen library was [tailwindcss](https://tailwindcss.com/docs) 
because of it's variaty of customization options and great performance optimization

### File Input
To keep the implementation as simple as possible, the file input allows only `.txt` files because it's content can easily be read as a string

### JSON text input
Instead of the textarea html element, the chosen component as the [JSON Input](https://www.npmjs.com/package/react-json-editor-ajrm) because it's easy to use and has been maintained recently. It also displays json errors by itselft.

## Running the project

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\


