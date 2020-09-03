import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import resources from '../util/mental-resources.json';
import '../css/resources.css';
import Collapsible from 'react-collapsible';
import Header from './Header';

class MentalResources extends Component {
    render() {
        return (
            <div>
                <Header 
                    images={["mhw1.png", "mhw2.png", "mhw3.png"]}
                    pagename="Mental Health Resources" 
                    subtitle="The place to find all the resources you need!"/>
                <ResourceSection 
                    name="COVID-19 Resources" 
                    resources={resources.covid_resources}/>
                <ResourceSection name="Campus Resources" resources={resources.campus_resources}/>
                <ResourceSection name="Community Resources" resources={resources.community_resources}/>
            </div>
        );
    }

}

/**
 * @param {name} props 
 * @param {list} props
 */
function ResourceSection(props) {
    const resources = props.resources.map(r => {
        return <Resource 
            key={r.name}
            name={r.name}
            number={r.number}
            address={r.address}
            website={r.website}
            description={r.des}/>        
    })
    const id = props.name.split(' ').join('');

    return(
        <div className="resource">
            <Container>
                <Collapsible 
                    trigger={props.name + ' ▼'} 
                    triggerClassName="resource-title" 
                    triggerOpenedClassName="resource-title" 
                    triggerWhenOpen={props.name + ' ▲'}>

                    <div className="resource-body" id={id}>
                        <ul className="resource-list">
                            {resources}
                        </ul>
                    </div>
                </Collapsible>
            </Container>
        </div>
    )
}

/**
 * @param {name} props 
 * @param {number} props
 * @param {address} props
 * @param {website} props
 * @param {description} props
 */
function Resource(props){
    return(
        <li className="resource-item">
            <Row>
                <Col sm={4}>
                    <h5>{props.name}</h5>
                </Col>
                <Col sm={3}>
                    <p>{props.number}</p>
                </Col>
                <Col sm={4}>
                    <p>{props.address}</p>
                </Col>
                <Col sm={1}>
                    <p>
                        <a href={props.website}> website </a>
                    </p>
                </Col>
            </Row>
            <Row> 
                <Col>
                    <p> {props.description} </p>
                </Col>    
            </Row>
        </li>
    )
}

export default MentalResources