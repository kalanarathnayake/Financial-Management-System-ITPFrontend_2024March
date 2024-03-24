import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/navbar/footer.component"
import AddPackage from './components/package/add-package.component';
import AddBudget from './components/budget/add-budget.component';
import PackageList from './components/package/package-list.component';
import BudgetList from './components/budget/budget-list.component';
import ViewPackage from './components/package/package-view.component';

import EditPackage from './components/package/package-edit.component';
import EditBudget from './components/budget/budget-edit.component';
import ExpensesList from './components/Expenses/expenses-list.component';
import AddExpense from './components/Expenses/add-expenses.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/nav" element={<Navbar />} />

          <Route exact path="/addPackage" element={<AddPackage />} />
          <Route exact path="/addBudget" element={<AddBudget />} />
          <Route exact path="/addExpenses" element={<AddExpense />} />

          <Route exact path="/package" element={<PackageList />} />

          {/* view page */}
          <Route exact path="/budget" element={<BudgetList />} />
          <Route exact path="/expenses" element={<ExpensesList />} />

          <Route exact path="/viewPackage" element={<ViewPackage />} />

          <Route exact path="/editPackage" element={<EditPackage />} />
          <Route exact path="/editBudget" element={<EditBudget />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;