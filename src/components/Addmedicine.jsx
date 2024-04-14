import React from 'react'
import Medicinenavbar from './Medicinenavbar'

const Addmedicine = () => {
  return (
    <div>
        <Medicinenavbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">medicine</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control">manufacture date</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control">expiry date</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control">company</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="row g-3 col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-danger">submit</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Addmedicine