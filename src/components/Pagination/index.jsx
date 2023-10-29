import { Container } from "./styles";

import { useState } from "react";

import { Button } from "../Button";

export function Pagination({totalPosts, postsPerPage, setCurrentPage, currentPage}) {
  const [pageNumberLimit, setPageNumberLimit] = useState(6);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(6);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  let pages = [];

  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i)
  }

  function handlePrev() {
    setCurrentPage(currentPage - 1)

    if((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  function handleNext() {
    setCurrentPage(currentPage + 1)

    if(currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  let pageDecrementBtn = null;
  let pageIncrementBtn = null;

  if(pages.length > minPageNumberLimit) {
    pageDecrementBtn = <li onClick={handlePrev}>&hellip;</li>
  }

  if(pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNext}>&hellip;</li>
  }


  return (
    <Container>
      {
        currentPage > 1 &&
        <Button title="Previous" onClick={() => handlePrev()}/>
      }
      {currentPage > 1 && pageDecrementBtn}
      {
        pages &&
        pages.map((page, index) => {
          if(page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
            return <Button
                    key={String(index)}
                    title={page}
                    onClick={() => setCurrentPage(page)}
                    className={page == currentPage ? "active" : ""}
                   />
          } else {
            return null
          }
        })
      }
      {currentPage < pages.length && pageIncrementBtn}
      {
        currentPage < pages.length &&
        <Button title="Next" onClick={() => handleNext()}/>
      }
    </Container>
  );
};