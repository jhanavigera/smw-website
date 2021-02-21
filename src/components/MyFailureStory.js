import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Col, Container, Row} from 'react-bootstrap';
import Header from './Header';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import storyData from '../myfailure-posts/data.json';
import leslie from '../img/advisors/Leslie_Grife.jpg';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      card: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 30,
        marginRight: 0,
        height: 425,
        minWidth: 350,
      },
      media: {
        width: 200,
        height: 200,
        padding: 20,
      },
      
    }));

export default class MyFailureStory extends Component {
    render(){
        return (
            <div>
                <Header 
                    images={["failure1.png", "failure2.png", "failure3.png"]}
                    pagename="My Failure Story" 
                    subtitle="Failures are finger posts on the road to achievement. - C.S. Lewis"/>               
              <StoryCard></StoryCard>
            </div>
        )
    }
    
}


function StoryCard() {
      const classes = useStyles();
        return(
          <Row style={{maxWidth: '100%'}}>
              {storyData.map(story => {
                return (
                  <Col md={4}>
                    <Card className={classes.card}>
                      <Button className='card-hover' href={`/myfailure-posts/${story.image}`}>
                        <CardContent>
                          <h2>Prof. {story.professor}</h2>
                          <img className={classes.media} alt={story.professor} src={require(`../img/myfailure/${story.image}.png`)}/>
                          <h6><i>{story.description}</i></h6>
                          <Button href={`/myfailure-posts/${story.image}`}>Continue Reading</Button>
                        </CardContent>
                      </Button>
                    </Card>
                  </Col>
                )
              })}
          </Row>        
        )
      }
        
        
    

