
import React from 'react';
import { Pagination } from "react-bootstrap";

export const Paginations = () => {
  return (
    <>
      <div className="pagination-bar">
        <div className="pagination-bar-inner">
          <Pagination>
          <Pagination.Item>Prev</Pagination.Item>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item active>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Item>Next</Pagination.Item>
          </Pagination>
        </div>
      </div>
    </>
  )
};