import './App.css';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask';
import { Col, Container, Row } from 'reactstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import TaskList from './Components/TaskList';


function App() {
  return (
   <Container >
    <Row className='img my-5'>
      <Col md = '3'>
      </Col>
      <Col md = '6'>
        <Navbar />
        <AddTask />
        <TaskList />
      </Col>
      <Col md = '3'>
      </Col>
    </Row>
   </Container>
  );
}

export default App;
