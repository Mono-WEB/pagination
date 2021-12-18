import React from "react";
import { Button } from "antd";
import { v4 } from "uuid";

export default function Pagination({ countPage, changePage }) {
  let arr = [];

  for (let index = 1; index <= countPage; index++) {
    arr.push(index);
  }

  return (
    <ul className="pagination">
      {arr.map((num) => {
        return (
          <li key={v4()} className="pagination__item">
            <Button type="primary" onClick={() => changePage(num)}>{num}</Button>
          </li>
        );
      })}
    </ul>
  );
}
