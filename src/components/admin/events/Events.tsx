import React from 'react'

const Events = () => {
  return (
    <div className='body-content-sec p-4' >
      <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 fw-bold mb-1">Events</h1>
          <p className="text-muted mb-0">Manage sports events and schedules</p>
        </div>
        <button className="btn-theme btn-black">
          Create Event
        </button>
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search events..."
                />
              </div>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>All Types</option>
                <option>Competition</option>
                <option>Training</option>
                <option>Tournament</option>
              </select>
            </div>
            <div className="col-md-3">
              <select className="form-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Upcoming</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="rounded bg-success bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-success"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                </div>
                <span className="badge bg-success">Active</span>
              </div>
              <h5 className="fw-bold mb-2">Spring Championship 2024</h5>
              <p className="text-muted small mb-3">Annual spring competition featuring multiple sports disciplines</p>
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <Calendar size={16} /> */}
                  <span>March 15-20, 2024</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <MapPin size={16} /> */}
                  <span>Central Stadium, Main Arena</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold">45</span>
                  <span className="text-muted small"> participants</span>
                </div>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-primary">View</button>
                  <button className="btn btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="rounded bg-warning bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-warning"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                </div>
                <span className="badge bg-warning">Upcoming</span>
              </div>
              <h5 className="fw-bold mb-2">Training Camp 2024</h5>
              <p className="text-muted small mb-3">Intensive training program for advanced athletes</p>
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <Calendar size={16} /> */}
                  <span>March 20-25, 2024</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <MapPin size={16} /> */}
                  <span>Sports Complex, Training Facility</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold">32</span>
                  <span className="text-muted small"> participants</span>
                </div>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-primary">View</button>
                  <button className="btn btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="rounded bg-warning bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-warning"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                </div>
                <span className="badge bg-warning">Upcoming</span>
              </div>
              <h5 className="fw-bold mb-2">Regional Tournament</h5>
              <p className="text-muted small mb-3">Regional level competition with multiple categories</p>
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <Calendar size={16} /> */}
                  <span>March 25-28, 2024</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <MapPin size={16} /> */}
                  <span>Arena Center, Downtown</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold">58</span>
                  <span className="text-muted small"> participants</span>
                </div>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-primary">View</button>
                  <button className="btn btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="rounded bg-secondary bg-opacity-10 p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar text-secondary"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                </div>
                <span className="badge bg-secondary">Completed</span>
              </div>
              <h5 className="fw-bold mb-2">Winter Finals 2024</h5>
              <p className="text-muted small mb-3">Final competition of the winter season</p>
              <div className="d-flex flex-column gap-2 mb-3">
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <Calendar size={16} /> */}
                  <span>February 28, 2024</span>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted small">
                  {/* <MapPin size={16} /> */}
                  <span>Main Stadium</span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold">67</span>
                  <span className="text-muted small"> participants</span>
                </div>
                <div className="btn-group btn-group-sm">
                  <button className="btn btn-outline-primary">View</button>
                  <button className="btn btn-outline-secondary">Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Events
