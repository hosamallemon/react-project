import React from 'react';
import fire from "./config/fire";
import{Button,Table,Form,Card} from 'react-bootstrap'
import {Posts} from './mock-data'
import Post from './posts'
import CreatePost from './createpost'
import ReactDeleteRow from 'react-delete-row'


class  Home extends React.Component{


    logout=()=>{
        fire.auth().signOut();
    }


    render(){
        const {friends} = this.props;
        
        
        
        const thefriends = friends.map( (friends,i) =>{
            return(
                <ReactDeleteRow key={i} data={friends} onDelete={item=>{return window.confirm('are you sure ?')}}>


                
                            
                            <td>{friends.id}</td>
                            <td>{friends.name}</td>
                            <td>{friends.email}</td>
                            
                            
                </ReactDeleteRow>
                    
                
                
            );
            
                                    })  
            return(
                <div className="container mt-5">
                    <div className="row mb-5">
                        <div className=" d-flex justify-content-end">
                            <Button onClick={this.logout}>Logout</Button>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-8 ">
                        <div className="mb-4">
                        <h1>Create Post</h1>
                        </div>
                            <CreatePost key={Posts.id} post={Posts}/>

                                
                            <hr/>
                            <h1>Post section</h1>
                            {Posts.map(p=>(
                        <div className="col-12 mt-5 d-flex justify-content-center">
                            
                                <Post key={p.id} post={p}/> 
                            
                            
                        </div>))}
                        </div>

                        <div className="col">

                            <div className=" mb-4 ">
                                <h1>List of your friends</h1>
                            </div>
                        
                        
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>delete</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    {thefriends}
                                    </tbody>

                            </Table>
                        </div>
                    
                    </div>                      
                </div>
                                    )
                                    
    }

}

export default Home;