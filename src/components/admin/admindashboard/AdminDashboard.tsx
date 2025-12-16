import React from 'react'

const AdminDashboard = () => {
  return (
    <div className='body-content-sec p-4' >
      <div className="mb-4">
        <h1 className="h3 fw-bold mb-1">Dashboard</h1>
        <p className="text-muted">Welcome back! Here's what's happening with your sports program.</p>
      </div>

      <div className="row g-4 mb-4">

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Total Athletes</p>
                  <h3 className="mb-0 fw-bold">156</h3>
                </div>
                <div className="rounded bg-primary bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <div className="small text-success">↑ 12% from last month</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Active Events</p>
                  <h3 className="mb-0 fw-bold">8</h3>
                </div>
                <div className="rounded bg-primary bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar text-primary">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
              </div>
              <div className="small text-success">↑ 3 new this week</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Competitions</p>
                  <h3 className="mb-0 fw-bold">24</h3>
                </div>
                <div className="rounded bg-primary bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trophy text-primary">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
              </div>
              <div className="small text-success">↑ 5% from last month</div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Performance</p>
                  <h3 className="mb-0 fw-bold">94%</h3>
                </div>
                <div className="rounded bg-primary bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up text-primary">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
              </div>
              <div className="small text-success">↑ 2% improvement</div>
            </div>
          </div>
        </div>

      </div>


      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0 fw-semibold">Recent Events</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th className="border-0">Event Name</th>
                  <th className="border-0">Date</th>
                  <th className="border-0">Location</th>
                  <th className="border-0">Participants</th>
                  <th className="border-0">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium">Spring Championship</td>
                  <td>Mar 15, 2024</td>
                  <td>Central Stadium</td>
                  <td>45</td>
                  <td><span className="badge bg-success">Active</span></td>
                </tr>
                <tr>
                  <td className="fw-medium">Training Camp</td>
                  <td>Mar 20, 2024</td>
                  <td>Sports Complex</td>
                  <td>32</td>
                  <td><span className="badge bg-warning">Upcoming</span></td>
                </tr>
                <tr>
                  <td className="fw-medium">Regional Tournament</td>
                  <td>Mar 25, 2024</td>
                  <td>Arena Center</td>
                  <td>58</td>
                  <td><span className="badge bg-warning">Upcoming</span></td>
                </tr>
                <tr>
                  <td className="fw-medium">Winter Finals</td>
                  <td>Feb 28, 2024</td>
                  <td>Main Stadium</td>
                  <td>67</td>
                  <td><span className="badge bg-secondary">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
