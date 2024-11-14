import React from "react";
import classes from "./Pagination.module.scss";
const Pagination = ({page, prev, next }) => {
  return (
    <div className={classes.pagination}>
            <button onClick={prev}>Prev</button>
            <div className={classes.pageCount}>{page}</div>
            <button onClick={next}>Next</button>
        </div>
  );
};

export default Pagination;