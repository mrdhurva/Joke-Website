import React from 'react'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import navigation from '../componentcss/navigation.css'

function Navigation() {
  return (
   <div className='container-fluid navigation'>
    <Row>
        <Col className='col-2 logo'>
            <Link to='/' title='Bro&Dad Jokes' >
                <p className='h3' >BD Jokes</p>
            </Link>
        </Col>
        <Col className='col-1 login float-end' >
            <Link to='/login' >
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </Col>
    </Row>
   </div>
  )
}

export default Navigation