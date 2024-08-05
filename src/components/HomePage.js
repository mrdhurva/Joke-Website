import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home from '../componentcss/home.css'


function HomePage() {
  return (
    <div className='jokesAndMeme mt-5' >
      <div className='container jokesAccount' >
        <h3 className='text-center fw-bolder text-decoration-underline' >Jokes</h3>
        <Row>
          <Col className='col-3' >
          <div className='card ' >
              <div className='card-body' >
                <Link to='randomjoke' >
                  <Jokes title='Random Jokes' />
                </Link>
              </div>
            </div>
          </Col>
          <Col className='col-3' >
          <div className='card' >
              <div className='card-body' >
                <Link to='dadjoke' >
                  <Jokes title='Dad Jokes' />
                </Link>
              </div>
            </div>
          </Col>
          <Col className='col-3' >
          <div className='card' >
              <div className='card-body' >
                <Link to='programmingjoke' >
                  <Jokes title='Programming Jokes' />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='col-3' >
          <div className='card' >
              <div className='card-body' >
                <Link to='humorjoke' >
                  <Jokes title='Humor Jokes' />
                </Link>
              </div>
            </div>
          </Col>
          <Col className='col-3' >
          <div className='card' >
              <div className='card-body' >
                <Link to='ninjajoke' >
                  <Jokes title='Ninja Jokes' />
                </Link>
              </div>
            </div>
          </Col>
          <Col className='col-3' >
          <div className='card' >
              <div className='card-body' >
                <Link to='hindijoke' >
                  <Jokes title='Hindi Jokes' />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className='container meme' >
        <h3 className='text-center fw-bolder text-decoration-underline' >Meme</h3>
        <Row>
          <Col className='col-3' >
            <div className='card' >
              <div className='card-body' >
                <Link to='memegenerator' >
                  <Jokes title='Meme Generator' />
                </Link>
              </div>
            </div>

          </Col>
          <Col className='col-4' >
            <div className='card' >
              <div className='card-body' >
                <Link to='programmingmemegenerator' >
                  <Jokes title='Programming Meme Generator' />
                </Link>
              </div>
            </div>

          </Col>
        </Row>
        <Row>
          <Col className='col-3' >
            <div className='card' >
              <div className='card-body' >
                <Link to='humormemegenerator' >
                  <Jokes title='Humor Meme Generator' />
                </Link>
              </div>
            </div>

          </Col>
          {/* <Col className='col-4' >
            <div className='card' >
              <div className='card-body' >
                <Link to='programmingmemegenerator' >
                  <Jokes title='Programming Meme Generator' />
                </Link>
              </div>
            </div>

          </Col> */}
        </Row>
      </div>
    </div>
  )
}

function Jokes({ title }) {
  return (
    <>
      <h5>{title}</h5>
    </>
  )
}

export { HomePage }