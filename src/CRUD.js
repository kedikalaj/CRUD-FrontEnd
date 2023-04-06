import React,{useState,useEffect, Fragment}  from "react";
import 'bulma/css/bulma.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";

const CRUD =() =>{

    const tempor =[
        {
            id : 1,
            name : "Kedi",
            age : 19,
            isActive : 1
        },{
            id : 2,
            name : "joKedi",
            age : 19,
            isActive : 0
        }

    ];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName]=useState('');
    const [age, setAge]=useState('');
    const [active, setActive]=useState(0);

    const [editID, setEditID]=useState('');
    const [editName, setEditName]=useState('');
    const [editAge, setEditAge]=useState('');
    const [editActive, setEditActive]=useState(0);







    const [data, setData] = useState([]);


    useState(()=>{
        setData(tempor);
    },[])

    const handleActive=(e)=>{
       if(e.target.checked) {setActive(1);}
       else{setActive(0);}
    }
    const handleEditActive=(e)=>{
        if(e.target.checked) {setEditActive(1);}
        else{setEditActive(0);}
    }
    const handleEdit=(ID)=>{
        handleShow();
    }

    const handleDelete=(ID)=>{
        if(window.confirm("Are you sure that you want to delete this row?")===true){
            alert(ID);
        }
    }

    return(
        <div>
            <div>
                <Container>
                    <br></br>
                    <Row>
                        <Col>
                        <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </Col>
                        <Col>
                        <input type="text" className="form-control" placeholder="Enter Age"value={age} onChange={(e)=>setAge(e.target.value)}/>
                        </Col>
                        <Col>
                        <input type="checkbox" checked={active === 1 ? true:false} onChange={(e)=>handleActive(e)} value={active} />
                        <label>IsActive</label>
                        </Col>
                        <Col>
                        <button className="btn btn-primary">Submit</button>
                        </Col>
                    </Row><br></br>
                </Container>
            </div>
            <div className="table is-bordered table is-striped table is-hoverable is-fullwidth" >
            <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Username</th>
          <th>Age</th>
          <th>IsActive</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
       {
        data && data.length > 0 ?
        data.map((items, index)=>{
            return(
             <tr key={index}>
                <td>{index+1}</td>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.age}</td>
                <td>{items.isActive}</td>
                <td colSpan={2}>
                    <button className="button is-warning" onClick={()=>handleEdit(items.id)}>Edit</button> 
                    <button className="button is-danger" onClick={()=>handleDelete(items.id)}>Delete</button>
                </td>
              </tr>
            )
        }):
        "Loading..."
         }
      </tbody>
     </div>
     <div>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit a row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Row>
                        <Col>
                        <input type="text" className="form-control" placeholder="Enter Name" value={editName} onChange={(e)=>setEditName(e.target.value)}/>
                        </Col>
                        <Col>
                        <input type="text" className="form-control" placeholder="Enter Age"value={editAge} onChange={(e)=>setEditAge(e.target.value)}/>
                        </Col>
                        <Col>
                        <input type="checkbox"checked={editActive === 1 ? true:false} value={editActive} onChange={(e)=>handleEditActive(e)}/>
                        <label>IsActive</label>
                        </Col>
                        <Col>
                        <button className="btn btn-primary">Submit</button>
                        </Col>
                    </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close 
           </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
    </div>
    )
}
export default CRUD;