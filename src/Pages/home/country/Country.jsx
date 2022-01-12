import React, { useEffect, useState } from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import TableCountry from '../tables/TableCountry';
import './country.css'

const Country = () => {

    const [country, setCountry] = useState([])
    const [loadMore, setLoadMore] = useState(6)
    const ShowMore = () => {
        setLoadMore(loadMore + loadMore)
    }
    const Slice = country.slice(0, loadMore)

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then((res) => res.json())
            .then((country) => setCountry(country))
    }, [])

    return (

        <div id="country">
            <div className="container">
                <div className="title">
                    <hr />
                    <h4>کشورهای صادرکننده و واردکننده</h4>
                    <hr />
                </div>
                <Tab.Container id="right-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"><span>پربازدیدترین ها</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"><span>تجزیه و تحلیل</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="country"><span>کشورهای صادرکننده</span></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="bank"><span>بانک اطلاعاتی</span></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <TableCountry Slice={Slice} />
                                        </div>
                                        <div className="col-lg-6">
                                            <TableCountry Slice={Slice} />
                                        </div>
                                    </div>
                                    <button className="btn more"
                                        onClick={() => ShowMore()}
                                    >
                                        نمایش بیشتر
                                    </button>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h2>تجزیه و تحلیل</h2>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );
}

export default Country;