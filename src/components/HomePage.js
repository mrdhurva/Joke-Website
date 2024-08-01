import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home from '../componentcss/home.css'


function HomePage() {
  return (
    <div className='jokesAndMeme mt-5' >
      <div className='container jokesAccount text-center' >
        <h3>Jokes</h3>
        <Row  >
          <Col className='col-3' >
            <Link to='randomjoke' >
              <Jokes title='Random Jokes' />
            </Link>
          </Col>
          <Col className='col-3' >
            <Link to='dadjoke' >
              <Jokes title='Dad Joke' />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='col-3' >
            <Link to='programmingjokes' >
              <Jokes title='Programming Jokes' />
            </Link>
          </Col>
          <Col className='col-3' >
            <Link to='humorjokes' >
              <Jokes title='Humor Jokes' />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className='col-3' >
            <Link to='ninjajokes' >
              <Jokes title='Ninja Jokes' />
            </Link>
          </Col>
          <Col className='col-3' >
            <Link to='hindijokes' >
              <Jokes title='Hindi Jokes' />
            </Link>
          </Col>
        </Row>
      </div>
      <div className='container memegenerator text-center' >
        <h2>Meme</h2>
        <Row>
          <Col className='col-3' >
            <Link to='memegenerator' >
              <Jokes title='Meme Generator' />
            </Link>
          </Col>
          <Col className='col-4' >
            <Link to='programmemegenerator' >
              <Jokes title='Program Meme Generator' />
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  )
}

function Jokes({ title }) {
  return (
    <>
      <h2>{title}</h2>
    </>
  )
}

export { HomePage }