import React, { Fragment, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import formatter from 'json-format'
import { parseBinaryTree } from "../utils/binTreeParser";
import { INVALID_FORMAT } from "../utils/constants";

const initialValues = Yup.object({
  treeArray: Yup.array(INVALID_FORMAT).notRequired()
});

const App = () => {
  const [binTree, setBinTree] = useState()

  const handleBinTree = ({treeArray}, actions) => {
    try {
      if (treeArray) {
        console.log(parseBinaryTree(JSON.parse(treeArray)))
        setBinTree(parseBinaryTree(JSON.parse(treeArray)))
      } else {
        setBinTree()
      }
    } catch (error) {
      actions.setErrors({treeArray: INVALID_FORMAT})
      setBinTree()
    }
    actions.setSubmitting(false);
  }

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    onSubmit: handleBinTree,
  });

  console.log(errors)

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="App">
        <h1>Array to Binary Tree</h1>
        <input id="treeArray" name="treeArray" placeholder="Tree Array" onChange={handleChange} value={values.treeArray}/>
        {errors?.treeArray && <span>{errors?.treeArray}</span>}
        <button type="submit">Parse</button>
      </form>
      {binTree && <textarea disabled rows="10" cols="100" 
        value={formatter(binTree, {
            type: 'tab',
            size: 1,
          })
        } 
      />}
    </Fragment>
  );
}

export default App;
