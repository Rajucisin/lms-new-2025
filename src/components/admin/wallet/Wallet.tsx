import React from 'react'
import { Container, Card, Button, Row, Col, Badge } from 'react-bootstrap';
const Wallet = () => {
  return (
    <div className='body-content-sec p-4' >
      <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h3 fw-bold mb-1">Wallet Management</h1>
          <button className="btn-theme btn-black">Export Report</button>
        </div>

      {/* THREE SUMMARY CARDS */}
      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h6 className="text-muted mb-1">Total Wallet Balance</h6>
              <h3 className="fw-bold">A$ 2351.00</h3>
              <span className="badge bg-success mt-2">Active</span>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h6 className="text-muted mb-1">Total Deposited</h6>
              <h3 className="fw-bold text-success">A$ 2100</h3>
              <p className="small mb-0">From all users</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h6 className="text-muted mb-1">Total Withdrawn</h6>
              <h3 className="fw-bold text-danger">A$ 650</h3>
              <p className="small mb-0">Approved withdrawals</p>
            </div>
          </div>
        </div>

      </div>

      {/* FILTERS HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Recent Wallet Transactions</h5>
        <div>
          <button className="btn btn-outline-dark me-2">Filter</button>
          <button className="btn btn-outline-dark">Download</button>
        </div>
      </div>

      {/* TRANSACTION 1 */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-semibold mb-0">Deposit Successful</p>
            <p className="text-muted small mb-0">User: Rohan | 1st Mar, 5:40 pm</p>
          </div>
          <div className="text-end">
            <p className="fw-semibold mb-0">A$ 50</p>
            <p className="small mb-0 text-success">Credited</p>
          </div>
        </div>
      </div>

      {/* TRANSACTION 2 */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-semibold mb-0">Withdrawal Request</p>
            <p className="text-muted small mb-0">User: Priya | 19th Mar, 4:10 pm</p>
          </div>
          <div className="text-end">
            <button className="btn btn-success btn-sm me-2">Approve</button>
            <button className="btn btn-danger btn-sm">Reject</button>
          </div>
        </div>
      </div>

      {/* TRANSACTION 3 */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-semibold mb-0">Victory Bonus</p>
            <p className="text-muted small mb-0">User: Neha | 15th Mar, 3:20 pm</p>
          </div>
          <div className="text-end">
            <p className="fw-semibold mb-0">A$ 500</p>
            <p className="small mb-0 text-primary">Bonus Credited</p>
          </div>
        </div>
      </div>

      {/* TRANSACTION 4 */}
      <div className="card shadow-sm border-0 mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="fw-semibold mb-0">Withdrawal Claimed</p>
            <p className="text-muted small mb-0">User: Aman | 18th Mar, 6:00 pm</p>
          </div>
          <div className="text-end">
            <p className="fw-semibold mb-0">A$ 100</p>
            <p className="small mb-0 text-danger">Debited</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Wallet
