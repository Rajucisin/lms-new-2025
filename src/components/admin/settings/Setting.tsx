import React from 'react'

const Setting = () => {
  return (
    <div className='body-content-sec p-4' >
      <div className="mb-4">
        <h1 className="h3 fw-bold mb-1">Settings</h1>
        <p className="text-muted">Manage your application settings and preferences</p>
      </div>

      <div className="row g-4">
        <div className="col-md-12">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-semibold">Profile Settings</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium">First Name</label>
                    <input type="text" className="form-control" defaultValue="Admin" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Last Name</label>
                    <input type="text" className="form-control" defaultValue="User" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Email</label>
                    <input type="email" className="form-control" defaultValue="admin@sportslms.com" />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Phone</label>
                    <input type="tel" className="form-control" defaultValue="+1 234 567 8900" />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-medium">Bio</label>
                    <textarea className="form-control" rows={4} defaultValue="Sports administrator with over 10 years of experience managing athletic programs." />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Role</label>
                    <select className="form-select">
                      <option>Administrator</option>
                      <option>Manager</option>
                      <option>Coach</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Department</label>
                    <select className="form-select">
                      <option>Administration</option>
                      <option>Coaching</option>
                      <option>Training</option>
                    </select>
                  </div>
                </div>

                <hr className="my-4" />

                <div className="mb-3 d-flex flex-column gap-2">
                  <h6 className="fw-semibold mb-3">Notification Preferences</h6>
                  <div className='d-flex align-items-center gap-2'>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label> Email notifications
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label> Push notifications
                  </div>
                  <div className='d-flex align-items-center gap-2'>
                    <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label> SMS notifications
                  </div>
                </div>

                <hr className="my-4" />

                <div className="mb-3">
                  <h6 className="fw-semibold mb-3">Display Settings</h6>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Language</label>
                      <select className="form-select">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Timezone</label>
                      <select className="form-select">
                        <option>UTC-5 (EST)</option>
                        <option>UTC-8 (PST)</option>
                        <option>UTC+0 (GMT)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button type="submit" className="btn-theme btn-black">
                    {/* <Save size={18} /> */}
                    Save Changes
                  </button>
                  <button type="button" className="btn-theme btn-gray">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
