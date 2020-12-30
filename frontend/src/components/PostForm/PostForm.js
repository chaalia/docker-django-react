import React,{Component} from 'react';
import {Button, Form} from 'react-bootstrap';


class PostForm extends Component {
    state = {
        post:'',
    }
    postChangeHnadler = (e) => {
        console.log(e.target.value)
        this.setState({post:e.target.value})
    }
    render() {
    return(
    <Form>
        <h3>Write a post</h3>
        <input type='text' className='form-control' value={this.state.post} onChange={this.postChangeHnadler}/>
        <Button variant="info" className="mt-2">Submit</Button>
    </Form>
    );}
}
export default PostForm;