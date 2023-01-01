import {useState ,useRef}  from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
   Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap";

const Forms = () => {
  
      let formRef = useRef()
        
      let   [storeName, setStoreName] =useState("");
      let   [storePhoneNumber, setStorePhoneNumber] =useState("");
      let   [storeNTN, setStoreNTN] =useState("");
      let   [storeEmail, setStoreEmail] =useState("");
      let   [ownerCNIC, setOwnerCNIC] =useState("");
      let   [storeAddress, setStoreAddress] =useState("");
      let   [storeLogo, setStoreLogo] = useState("");
        
      let handleFileChange = (event) => {
        setStoreLogo(event.target.files[0])
    }   

    const handleReset = () => {
      formRef.current.reset();
    }

    let navigate=useNavigate()

    // Modal open state
    const [modal, setModal] = React.useState(false);
    
    // Toggle for Modal
    const toggle = () =>{
      setModal(!modal);
    }  
            
    const toggle1 = () =>{
      setModal(!modal);
      navigate("/")
    } 

    async function createStore(e){
      e.preventDefault(); 
      let form = new FormData();        
      form.append("storeName",storeName)
      form.append("storePhoneNo",storePhoneNumber)
      form.append("storeNTN",storeNTN)
      form.append("storeEmail",storeEmail)
      form.append("storeAddress",storeAddress)
      form.append("storeOwnerCnic",ownerCNIC)
      form.append('storeLogo',storeLogo) 
    

      try{
        let resp = await axios.post('/store/createstore?token='+localStorage.getItem("someToken"), form);
          setStoreName("")
          setStorePhoneNumber("")
          setStoreNTN("")
          setStoreEmail("")
          setStoreAddress("")
          setOwnerCNIC("")
          handleReset();          
          console.log(resp.data)
          toast.success("Store Created Succesfully ")
          toggle()
        }
      catch(e){
      toast.error("Something Went Wrong")
      console.log(e);
      }

      }
  return (
    <>
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-shop"> </i>
             Create Store
          </CardTitle>
          <CardBody>
            <Form  onSubmit={e =>{createStore(e)}}  innerRef={formRef}>
            <FormGroup>
                <Label for="storeName">Store Name</Label>
                <Input
                  id="storeName"
                  name="storeName"
                  placeholder="Enter Store Name"
                  type="text"
                  value={storeName}
                  onChange={(evt) =>setStoreName(evt.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="storePhoneNumber"> Store Phone Number</Label>
                <Input
                  id="storePhoneNumber"
                  name="storePhoneNumber"
                  placeholder="Enter Store Phone Number"
                  type="number"
                  value={storePhoneNumber}
                  onChange={(evt) =>setStorePhoneNumber(evt.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="storeNTN">Store NTN </Label>
                <Input
                  id="storeNTN"
                  name="storeNTN"
                  placeholder="Enter Store NTN"
                  type="number"
                  value={storeNTN}
                  onChange={(evt) =>setStoreNTN(evt.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="storeEmail">Store Email</Label>
                <Input
                  id="storeEmail"
                  name="storeEmail"
                  placeholder="with a placeholder"
                  type="storeEmail"
                  value={storeEmail}
                  onChange={(evt) =>setStoreEmail(evt.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="ownerCNIC">Owner CNIC</Label>
                <Input
                  id="ownerCNIC"
                  name="ownerCNIC"
                  placeholder="Enter Owner CNIC"
                  type="number"
                  value={ownerCNIC}
                  onChange={(evt) =>setOwnerCNIC(evt.target.value)}
                  required
                />
              </FormGroup>
             
              <FormGroup>
                <Label for="storeAddress">Store Address</Label>
                <Input 
                id="storeAddress" 
                name="text" 
                type="textarea"
                value={storeAddress}
                onChange={(evt) =>setStoreAddress(evt.target.value)}
                required
                 />
              </FormGroup>

              <FormGroup>
                <Label for="storeLogo">Store Logo</Label>
                <Input onChange={handleFileChange} required id="storeLogo" name="file" type="file" />
                <FormText>
                    Attach Logo of your Store
                </FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
     
    <div style={{
            display: 'block', width: 700, padding: 30
        }}>
            {/* <h4>ReactJS Reactstrap Modal Component</h4>
            <Button color="danger"
                onClick={toggle}>Click me to open Modal</Button> */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader
                    toggle={toggle1}> Request Pending </ModalHeader>
                <ModalBody>
                      Store Request is Sent Wait For Approval  
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle1}>Okay</Button>
                </ModalFooter>
            </Modal>
     </div>
        </>
    
  );
};

export default Forms;
