import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()

  return (
    <>
      <Row className='d-flex justify-content-center align-items-center mt-5 mb-5' >
        <Col lg={1}></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae qui similique porro mollitia officia eum id quos! Commodi perspiciatis nobis, tenetur ad repudiandae atque soluta enim laborum facere minus! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, dolores iste, nostrum ab nobis facere at hic aperiam ipsa cupiditate quae natus repellat molestias eius ipsam alias! Asperiores, quas odit!</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3>Features</h3>
        <div className='d-flex justify-content-center align-items-center'>
          <Card className='p-4 m-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{width:'100%',height:'280px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Managing Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{width:'100%',height:'280px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Categorized video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '22rem' }}>
            <Card.Img variant="top" style={{width:'100%',height:'280px'}} src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

        </div>

         <Row className='border border-dark  mt-5 mb-5 w-100'  >
            <Col lg={6} >
            <h3 className='text-warning m-5'> Simple fast and PowerFul</h3>
            <h6 style={{textAlign:'justify'}} className=' ms-5 mt-4 '> <span style={{fontSize:'23px'}}>Play Everything </span> : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nam repellendus modi corrupti aperiam autem ab delectus? Atque repellendus fugiat, quasi tempora, consequatur est, amet dignissimos dicta laboriosam aliquam placeat.</h6>
            
            <h6 style={{textAlign:'justify'}} className=' ms-5 mt-4 '> <span style={{fontSize:'23px'}}>Play Everything </span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nam repellendus modi corrupti aperiam autem ab delectus? Atque repellendus fugiat, quasi tempora, consequatur est, amet dignissimos dicta laboriosam aliquam placeat.</h6>

            <h6 style={{textAlign:'justify'}} className=' ms-5 mt-4 '> <span style={{fontSize:'23px'}}>Play Everything </span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nam repellendus modi corrupti aperiam autem ab delectus? Atque repellendus fugiat, quasi tempora, consequatur est, amet dignissimos dicta laboriosam aliquam placeat.</h6>

           </Col>
            <Col lg={6}>
            <iframe className='m-5 pe-5 ' width="580" height="400" src="https://www.youtube.com/embed/jqCh3fSNog4" title="Maryan - Innum Konjam Naeram Tamil Lyric | A.R. Rahman | Dhanush" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowfullscreen></iframe>
            </Col>
          </Row>
         
      </div>
    </>
  )
}

export default LandingPage