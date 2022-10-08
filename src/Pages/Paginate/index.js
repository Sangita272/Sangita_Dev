import React, { useState } from "react";
import Jsondata from "./Mock.json";
import ReactPaginate from "react-paginate";
import "../../App.css";

const Paginate = () => {
  const [users, setUsers] = useState(Jsondata.slice(0, 250));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pageVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user" key={user.id}>
          <h2> {user.first_name} </h2>
          <h2> {user.last_name}</h2>
          <h2> {user.email}</h2>
          <h2> {user.gender}</h2>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div>
        {displayUsers}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={changePage}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default Paginate;
