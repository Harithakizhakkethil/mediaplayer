import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {deleteWatchHistoryapi, getAllVideoHistory} from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function WatchHistory() {

  const [HistoryVideos,setHistoryVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  //function to get all videos in history
  const getHistory = async()=>{
   const response = await getAllVideoHistory()
   /* console.log(response); */
   setHistoryVideos(response.data)

  }
 /*  console.log(HistoryVideos);
 */
  //function to delete video from history
  const handleDelete = async(id)=>{
  const response = await deleteWatchHistoryapi(id)
 /*  console.log(response); */
 if(response.status>=200 && response.status<300){
  setDeleteVideoStatus(true)
 }
 else{
  toast.error('something went wrong')
 }
    
  }

  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])

  return (
   <>
      <div className=' d-flex justify-content-between align-items-center mx-5 p-5 '>
        <h3>Watch History</h3>
       <h6> <Link style={{textDecoration:'none',color:'white'}} to={'/home'}> <FontAwesomeIcon className='me-3' icon={faArrowLeft} beat />Back to Home</Link></h6>
      </div>

     <div  className=' d-flex justify-content-between align-items-center mx-5 p-4 ' >
        {HistoryVideos?.length>0?
          <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time Stamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {HistoryVideos.map((item,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{item.caption}</td>
              <td><a href={item.url} target='_blank'>{item.url}</a></td>
              <td>{item.timestamp}</td>
              <td>
                <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>:
        <p className='text-danger fs-4'>No Watch History</p>
        }
     </div>
     <ToastContainer position='top-center' theme='colored' autoClose={2000} />
   </>
  )
}

export default WatchHistory