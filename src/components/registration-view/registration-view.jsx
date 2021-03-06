import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './registration-view.scss';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://movie-api11.herokuapp.com/users', {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    })
      .then(response => {
        const data = response.data;
        console.log(data);
        window.open('/', '_self');
      })
      .catch(e => {
        console.log('error registering the user')
      });
  }

  return (
    <Container className="form_container">
      <Row>
        <Col xs={12} sm={12} className="form_col">
          <Form>
            <Form.Group className="register_form">
              <Form.Label className="form-item">
                Email: <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-item">
                Username: <input type="text" className="input_box" value={username} onChange={e => setUsername(e.target.value)} />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-item">
                Password: <input type="password" className="input_box" value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-item">
                Re-enter Password: <input type="password" className="input_box" value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-item">
                Birthday: <input type="date" className="input_box" value={birthday} onChange={e => setBirthday(e.target.value)} />
              </Form.Label>
            </Form.Group>
            <Button variant="outline-dark" className="button" type="button" onClick={handleSubmit}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container >
  );
}

RegistrationView.proptypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.any.isRequired,
  birthday: PropTypes.any.isRequired,
  onLoggedIn: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}