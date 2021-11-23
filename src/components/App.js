import React from 'react'
import { BinaryTreeOutput } from './BinaryTreeOutput';
import { FileContent } from './FileContent';
import FileInput from "./FileReader";

const App = () => (
  <div>
    <h1>Process the input into a tree</h1>
    <FileInput />
    <FileContent />
    <BinaryTreeOutput />
  </div>
);

export default App;
