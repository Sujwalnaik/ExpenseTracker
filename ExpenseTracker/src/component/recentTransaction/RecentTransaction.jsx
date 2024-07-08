import { useState } from "react";
import { PiPizzaFill } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

import ReactPaginate from "react-paginate";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import "./transaction-sty.css";
import { CiGift } from "react-icons/ci";
import { MdCardTravel } from "react-icons/md";
import {
  editandCancel,
  innerBox,
  innerLeftSideContentBox,
  itemname,
  samosaIcon,
} from "./recent-transaction-style";

const itemsPerPage = 3;

function RecentTransaction() {
  const [currentPage, setCurrentPage] = useState(0);

  const transactions = [
    {
      name: "Samosa",
      date: "March 20, 2024",
      amount: "₹150",
      icon: <PiPizzaFill />,
    },
    {
      name: "Movie",
      date: "March 21, 2024",
      amount: "₹300",
      icon: <CiGift />,
    },
    {
      name: "Auto",
      date: "March 22, 2024",
      amount: "₹50",
      icon: <MdCardTravel />,
    },
    // {
    //   name: "Sandwich",
    //   date: "March 23, 2024",
    //   amount: "$50",
    //   icon: <FaPizzaSlice />,
    // },
    // {
    //   name: "Pasta",
    //   date: "March 24, 2024",
    //   amount: "$250",
    //   icon: <FaPizzaSlice />,
    // },
  ];

  const pageCount = Math.ceil(transactions.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = transactions.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div style={{ width: "65%" }}>
      <h2
        style={{
          color: "white",
          fontSize: "28px",
          fontFamily: "Italic",
          fontWeight: 700,
        }}
      >
        Recent Transaction
      </h2>
      <div
        style={{
          width: "100%",
          height: "400px",
          background: "rgba(255, 255, 255, 1)",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.25)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {currentItems.map((transaction, index) => (
          <div key={index} style={innerBox}>
            <div style={innerLeftSideContentBox}>
              <span style={samosaIcon}>{transaction.icon}</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={itemname}>{transaction.name}</span>
                <span style={{ ...itemname, color: "rgba(155, 155, 155, 1)" }}>
                  {transaction.date}
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
                flexDirection: "row",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "rgba(244, 187, 74, 1)",
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "Open Sans",
                }}
              >
                {transaction.amount}
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    ...editandCancel,
                    background: "red",
                  }}
                >
                  <MdOutlineCancel />
                </div>
                <div style={{ ...editandCancel, background: "orange" }}>
                  <CiEdit />
                </div>
              </div>
            </div>
          </div>
        ))}
        <ReactPaginate
          previousLabel={
            <div
              style={{
                textDecoration: "none",
                background: "rgba(241, 241, 241, 1)",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <GrFormPreviousLink />
            </div>
          }
          nextLabel={
            <div
              style={{
                textDecoration: "none",
                background: "rgba(241, 241, 241, 1)",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <GrFormNextLink />
            </div>
          }
          breakLabel={""}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default RecentTransaction;
