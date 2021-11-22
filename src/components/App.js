import React, { Fragment, useState } from "react";
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { parseBinaryTree } from "../utils/binTreeParser";
import { INVALID_FORMAT } from "../utils/constants";
import FileInput from "./FileReader";

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
        <h1>Array to Binary Tree</h1>
        <FileInput />
    </Fragment>
  );
}

export default App;
