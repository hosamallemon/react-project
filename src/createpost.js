import React from 'react';
import{Button,Table,Form,Card} from 'react-bootstrap'


class CreatePost extends React.Component {

    render(){

        return(
            <Form>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Caption"/>
                </div>
                <div className="form-group mt-4 mb-3">
                    <label for="formGroupExampleInput2">{this.props.post.id}What are you Thinking !</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <Button>Create</Button>
            </Form>
        )}}
        export default CreatePost;