import { faPen, faTrashCan,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import VideoCard from '../components/VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategory } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'react-bootstrap';


function Category({videoDragAndRemoveStatus,setVideoDragAndRemoveStatus}) {

  //state to store the category name
  const [categoryName,setCategoryName] =useState("")
  const[allCategory,setAllCategory] = useState([])
  const [addCategoryStatus,setAddCategoryStatus] =useState(false)
  const [deleteCategoryStatus,setDeleteCategoryStatus] = useState(false)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  //function to add category
  const handleCategoryAdd = async()=>{

      if(categoryName){
        let reqBody = {
          category:categoryName,
          allVideos:[]
        }
  
      const response = await addCategoryApi(reqBody)
      console.log(response);

      if(response.status>=200 && response.status<300){
        setAddCategoryStatus(true)
        toast.success('Category added Successfull')
        handleClose()
      }
      else{
        toast.error('Something went wrong...')
      }
      }
      else{
        toast.info('Please enter the Category Name')
      }
  }

  //function to get category
  const getAllCategory = async()=>{
    const response = await getCategoryApi()
   /*  console.log(response.data); */
    setAllCategory(response.data)
  }

 //function to delete category
 const handleDeleteCategory = async(id)=>{
  await deleteCategoryApi(id)
  setDeleteCategoryStatus(true)
 }

  console.log(allCategory);

  //function to prevent the data lose on drag
  const dragOver = (e)=>{
    e.preventDefault()
  }


  //function for drop
  const videoDrop = async(e, categoryId)=>{
    console.log(`Category Id is ${categoryId}`);

    //get videoid send from the videocard component 
   const videoid =  e.dataTransfer.getData("VideoId")
    console.log(`video Id is ${videoid}`);

    //api call to get the details of a particular video
      const {data} = await getAVideoApi(videoid)
      console.log(data);

      //selected category
      const selectedCategory = allCategory.find((item)=>item.id==categoryId)
      console.log(selectedCategory);

      if(selectedCategory.find(item=>item.id ==videoid)){
        toast.error('Video Already exist in the same category')
      }else{
        selectedCategory.allVideos.push(data)
      }

      selectedCategory.allVideos.push(data)

      //function to update category
     await updateCategory(categoryId,selectedCategory)

     getAllCategory()
     

  }
  //function to remove cards from category
  const dragStart = (e, categoryId,videoid)=>{
    console.log(`category id is ${categoryId}`);
    console.log((`videoid is ${videoid}`));
  
    let dataShared = {
      categoryId,videoid
    }
    e.dataTransfer.setData("datashared",JSON.stringify(dataShared))
  }
 


  useEffect(()=>{
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)

  },[addCategoryStatus,deleteCategoryStatus,videoDragAndRemoveStatus])

  return (
   <>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
        <button onClick={handleShow} className='btn btn-warning w-100  '>Add new Category</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPen}  className='text-warning me-3'/> Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <p>Category Name</p>
        <Form className='border rounded p-3 border-secondary '>
          <Form.Group className='mb-3' >
          <Form.Control type="text" placeholder="Enter the Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
        </Form.Group>
        </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      {allCategory?.length>0?
        allCategory?.map((item)=>(<div className='border border-secondary w-100 p-3 rounded mt-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
        <div className='d-flex justify-content-center align-items-center'>
          <p>{item.category}</p>
          <button onClick={()=>handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'> <FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
       <Row> 
        {item.allVideos.length>0?
        item.allVideos.map((Card)=>(<Col sm={12} draggable onDragStart={(e)=>dragStart(e,item.id, Card.id)}>
          <VideoCard displayVideo={Card} isPresent = {true}/>  
        </Col>))
          :null
        }
      </Row>

      </div>))
        :<p className='text-danger mt-5'>No Category Added Yet</p>
      }
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

   </>
  )
}

export default Category