import MyPieChart from "../pieChart/pieChart";
import RecentTransaction from "../recentTransaction/RecentTransaction";
import TopExpense from "../topExpense/TopExpense";
import {
  DialogInput,
  expenseBalanceBox,
  innerBtn,
  innerWalletBalance,
  mainTitle,
} from "./Expense-style";

import { DataContext } from "../contextapi/useContext";
import CustomDialog from "../../common/CustomDialog";
import { useEffect, useState } from "react";

function Expense() {
  const data = [
    { name: "Food", value: 100 },
    { name: "Entertainment", value: 200 },
    { name: "Travel", value: 300 },
  ];

  const [isDialog, setIsDialog] = useState(false);
  const [incomesDialog, setIncomeDialog] = useState(false);
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [amount, setAmount] = useState(() => {
    const storedAmount = localStorage.getItem("amount");
    return storedAmount ? JSON.parse(storedAmount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("amount", JSON.stringify(amount));
  }, [amount]);

  const handleOpenDialog = () => {
    setIsDialog(true);
  };

  const handleCloseDialog = () => {
    setIsDialog(false);
  };

  const handleOpenIncome = () => {
    setIncomeDialog(true);
  };

  const handleCloseIncomedialog = () => {
    setIncomeDialog(false);
  };

  const handleAddIncomeSubmit = (e) => {
    e.preventDefault();
    setAmount((prevAmount) => prevAmount + Number(incomeAmount));
    setIncomeDialog(false);
  };

  return (
    <>
      <DataContext.Provider value={data}>
        <h1 style={mainTitle}>Expense Tracker</h1>
        <div style={expenseBalanceBox}>
          <div style={innerWalletBalance}>
            <h2
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 400,
                fontSize: "30px",
              }}
            >
              Wallet Balance:{" "}
              <span style={{ color: "yellow", fontWeight: 700 }}>
                ₹{amount}
              </span>
            </h2>
            <button
              style={{ ...innerBtn, background: "rgba(181, 220, 82, 1)" }}
              onClick={handleOpenIncome}
            >
              + Add Incomes
            </button>
            <CustomDialog
              isOpen={incomesDialog}
              onClose={handleCloseIncomedialog}
              title="Add Income"
            >
              <form onSubmit={handleAddIncomeSubmit}>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    type="number"
                    placeholder="Add amount"
                    style={DialogInput}
                    onChange={(e) => setIncomeAmount(e.target.value)}
                  />

                  <button
                    type="submit"
                    style={{
                      ...DialogInput,
                      background: "rgba(244, 187, 74, 1)",
                      color: "white",
                      width: "45%",
                    }}
                  >
                    Income Balance
                  </button>
                </div>
              </form>
            </CustomDialog>
          </div>

          {/* ExpenseBox */}
          <div style={innerWalletBalance}>
            <h2
              style={{
                fontFamily: "Ubuntu",
                fontWeight: 400,
                fontSize: "30px",
              }}
            >
              Expenses:{" "}
              <span
                style={{
                  color: "rgba(244, 187, 74, 1) ",
                  fontWeight: 700,
                }}
              >
                ₹500
              </span>
            </h2>
            <button
              style={{
                ...innerBtn,
                background: "rgba(251, 105, 67, 1)",
              }}
              onClick={handleOpenDialog}
            >
              + Add Expense
            </button>

            <CustomDialog
              isOpen={isDialog}
              onClose={handleCloseDialog}
              title="Add Expenses"
            >
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input type="text" placeholder="Title" style={DialogInput} />
                  <input
                    type="number"
                    placeholder="Price"
                    style={{
                      ...DialogInput,
                    }}
                  />
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <input
                    type="text"
                    placeholder="Select Category"
                    style={DialogInput}
                  />
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    style={DialogInput}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    paddingLeft: "20px",
                  }}
                >
                  <button
                    style={{
                      ...DialogInput,
                      background: "rgba(244, 187, 74, 1)",
                      color: "white",
                      width: "45%",
                    }}
                  >
                    Add Expense
                  </button>
                </div>
              </div>
            </CustomDialog>
          </div>
          <MyPieChart />
        </div>
        <div
          style={{ display: "flex", gap: "30px", margin: "0px 20px 0px 20px" }}
        >
          <RecentTransaction />
          <TopExpense />
        </div>
      </DataContext.Provider>
    </>
  );
}

export default Expense;
