import React from 'react'

const Analytics = () => {
  return (
    <div className='body-content-sec p-4'>
      <div className="mb-4">
        <h1 className="h3 fw-bold mb-1">My Games Analytics</h1>
        <p className="text-muted">Performance insights and statistics</p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Avg. Performance</p>
                  <h3 className="mb-0 fw-bold">87.5%</h3>
                </div>
                <div className="rounded bg-primary bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up text-primary"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                </div>
              </div>
              <div className="small text-success">↑ 3.2% from last month</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Active Athletes</p>
                  <h3 className="mb-0 fw-bold">156</h3>
                </div>
                <div className="rounded bg-success bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users text-success"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
              </div>
              <div className="small text-success">↑ 12% growth</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Competitions</p>
                  <h3 className="mb-0 fw-bold">24</h3>
                </div>
                <div className="rounded bg-warning bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trophy text-warning"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                </div>
              </div>
              <div className="small text-success">↑ 5% increase</div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <p className="text-muted mb-1 small">Win Rate</p>
                  <h3 className="mb-0 fw-bold">68%</h3>
                </div>
                <div className="rounded bg-info bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column text-info"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                </div>
              </div>
              <div className="small text-success">↑ 2% improvement</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-semibold">Performance Trends</h5>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small">Basketball</span>
                  <span className="small fw-medium">92%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '92%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small">Football</span>
                  <span className="small fw-medium">85%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar bg-success" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small">Track & Field</span>
                  <span className="small fw-medium">88%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar bg-info" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="small">Swimming</span>
                  <span className="small fw-medium">78%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '78%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-semibold">Top Performers</h5>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
                <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <span className="fw-bold text-white">1</span>
                </div>
                <div className="flex-grow-1">
                  <div className="fw-medium">Sarah Johnson</div>
                  <small className="text-muted">Track & Field</small>
                </div>
                <div className="text-end">
                  <div className="fw-bold text-success">98%</div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
                <div className="rounded-circle bg-secondary d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <span className="fw-bold text-white">2</span>
                </div>
                <div className="flex-grow-1">
                  <div className="fw-medium">John Smith</div>
                  <small className="text-muted">Basketball</small>
                </div>
                <div className="text-end">
                  <div className="fw-bold text-success">95%</div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle bg-danger bg-opacity-75 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                  <span className="fw-bold text-white">3</span>
                </div>
                <div className="flex-grow-1">
                  <div className="fw-medium">Emily Wilson</div>
                  <small className="text-muted">Basketball</small>
                </div>
                <div className="text-end">
                  <div className="fw-bold text-success">93%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-semibold">Monthly Participation</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th className="border-0">Month</th>
                      <th className="border-0">Athletes</th>
                      <th className="border-0">Events</th>
                      <th className="border-0">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>March 2024</td>
                      <td>156</td>
                      <td>8</td>
                      <td><span className="badge bg-success">+12%</span></td>
                    </tr>
                    <tr>
                      <td>February 2024</td>
                      <td>139</td>
                      <td>6</td>
                      <td><span className="badge bg-success">+8%</span></td>
                    </tr>
                    <tr>
                      <td>January 2024</td>
                      <td>129</td>
                      <td>5</td>
                      <td><span className="badge bg-success">+5%</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-semibold">Sport Categories</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Basketball</span>
                  <span className="small fw-medium">45 athletes</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Football</span>
                  <span className="small fw-medium">38 athletes</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-success" style={{ width: '38%' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Track & Field</span>
                  <span className="small fw-medium">42 athletes</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-info" style={{ width: '42%' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="small">Swimming</span>
                  <span className="small fw-medium">31 athletes</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '31%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
