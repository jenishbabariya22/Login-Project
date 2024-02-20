import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../../Header'
import Leftsidebar from '../../Leftsidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const [record, setrecord] = useState([])
  const [mstatus, setMarket] = useState(["latest", "upcomming", "best"])
  const [status, setStatus] = useState(["active", "inactive"])
  const [changeMarket, setChangeMarket] = useState("");


  const rec = async () => {
    try {
      let recc = await axios.get("http://localhost:8000/product")
      setrecord(recc.data)
      console.log(recc);
    } catch (error) {
      console.log(error);
      return false
    }
  }

  const changemarketstatus = async (id, value) => {
    try {
      let record = await axios.patch(`http://localhost:8000/product/${id}`, {
        market: value
      })
      toast.success("Market status successfully add");
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(() => {
    rec()
  }, [])

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-lg-4 m-4">
          <Leftsidebar />
        </div>
        <div className="col-lg-12">
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            {
              record.map((val) => {
                return (
                  <div className="card" style={{ width: '18rem', margin: "5px", padding: "20px" }}>
                    <img src={val.image} style={{ height: "150px", objectFit: "contain" }} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.product}</h5>
                      <h5 className="card-title">{val.title}</h5>
                      <select onChange={(e) => changemarketstatus(val.id, e.target.value)} className='form-control'>
                        <option>---select market status</option>
                        {
                          mstatus.map((val) => {
                            return (
                              val.market == val ? (
                                <option selected>{val}</option>
                              ) : (
                                <option>{val}</option>
                              )
                            )
                          })
                        }
                      </select>

                      <select className='form-control'>
                        <option>---select status</option>
                        {
                          status.map((val) => {
                            return (
                              val.status == val ? (
                                <option value={val} selected>{val}</option>
                              ) : (
                                <option value={val}>{val}</option>
                              )
                            )
                          })
                        }

                      </select>
                      <p className="card-text">{val.discription}</p>
                      <a href="#" className="btn btn-primary">Purchase</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div >
  )
}

export default Product