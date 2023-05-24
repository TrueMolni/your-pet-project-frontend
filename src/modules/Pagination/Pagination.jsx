import React from 'react';

// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.css';

let pageCount = 3;
// handlePageClick;

const Pagination = () => {
  return (
    <div className={styles.wrap}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel="→"
        onPageChange={e => console.log('event >>>>', e)}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="←"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
