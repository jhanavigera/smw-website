import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import resources from '../util/mental-resources.json';
import '../css/resources.css';

class MentalResources extends Component {
    render() {
        return (
            <div>
                <h2>Mental Health Resources</h2>
                <p> The place to find all the resources you need!</p>
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
    function showResources(name) {
        const elem = document.getElementById(name);
        if(elem.classList.contains("full-height"))
            elem.classList.remove("full-height")
        else elem.classList.add("full-height")
    }

    return(
        <div className="resource">
            <button className="resource-title" onClick={() => showResources(id)}>
                <Row>
                    <Col sm={11}>
                        <h4>{props.name}</h4>
                    </Col>
                    <Col sm={1}>
                        <span>icon</span>
                    </Col>
                </Row>
            </button>
            <div className="resource-body" id={id}>
                <ul className="resource-list">
                    {resources}
                </ul>
            </div>
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