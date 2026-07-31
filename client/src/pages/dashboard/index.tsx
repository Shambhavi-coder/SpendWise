import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">

      <div className="dashboard-header">
        <h1>Welcome back, {user?.firstName} 👋</h1>
        <p>Manage your expenses with ease.</p>
      </div>

      <div className="summary-card">
        <h3>Total Monthly Expense</h3>
        <h2>${totalMonthly}</h2>
      </div>

      <FinancialRecordForm />

      <div className="table-title">
        <h2>Recent Transactions</h2>
      </div>

      <FinancialRecordList />

    </div>
  );
};