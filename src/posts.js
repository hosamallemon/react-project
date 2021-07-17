import React from 'react';
import{Button,Table,Form,Card} from 'react-bootstrap'



export default function Post({post}) {
        

        return(
            <Card style={{ width: '40rem' }}>
                                                
                <Card.Body>
                    <Card.Title>{post.discription}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div class="d-flex justify-content-around">
                    <Button variant="primary">Like</Button>
                    <Button variant="primary">Share</Button>
                    </div>
                </Card.Body>
            </Card>
        );




}
