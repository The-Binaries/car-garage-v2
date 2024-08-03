import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8000/admin?username=${username}&password=${password}`
      );
      if (response.data.length > 0) {
        setAuth(true);
        navigate("/admin"); // Navigate to the /admin route
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An error occurred");
    }
  };

  return (
    <div className="page-login">
      <Grid centered container>
        <Grid.Column width={9}>
          {error && (
            <Message warning icon>
              <Message.Icon name="lock" />
              <Message.Content>
                <Message.Header>Login failed!</Message.Header>
                <p>You might have misspelled your username or password!</p>
              </Message.Content>
            </Message>
          )}
          <Segment>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <label>User</label>
                <input
                  type="text"
                  name="user"
                  placeholder="User"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Field>
              <Button primary labeled icon type="submit">
                <i className="unlock alternate icon"></i>
                Login
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;
