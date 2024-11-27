import './LoginPage.css';
import { Card, Flex, Button, Layout, Checkbox, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

const { Content } = Layout;

const boxStyle = {
    width: '80%',
    height: 220,
    borderRadius: 6,
    border: '1px solid #40a9ff',
  };

export const LoginPage = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }
  
  return (
          
   
        <>
          <div
              style={{
                  minHeight: '100%',
                  padding: 54,
                  display: 'flex',
                  justifyContent: 'center',
                  // border: '1px solid #40a9ff',
                  // borderRadius: '4px',
              }}
          >

                <Card
                    title="Ingresar"
                    style={{
                      width: 400,
                    }}
                  >
                      <Form
                        name="login"
                        initialValues={{
                          remember: true,
                        }}
                        // style={{
                        //   maxWidth: 360,
                        //   width: '75%'
                        // }}
                        onFinish={onFinish}
                      >
                        <Form.Item
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Username!',
                            },
                          ]}
                        >
                          <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Password!',
                            },
                          ]}
                        >
                          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>
                        {/* <Form.Item>
                          <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="">Forgot password</a>
                          </Flex>
                        </Form.Item> */}

                        <Form.Item>
                          <Button block type="primary" htmlType="submit">
                            Login
                          </Button>
                         
                        </Form.Item>
                      </Form>
              </Card>

              <Card
                    title="Registrar Usuario"
                    style={{
                      width: 400,
                    }}
                  >
                      <Form
                        name="register"
                        initialValues={{
                          remember: true,
                        }}
                        // style={{
                        //   maxWidth: 360,
                        //   width: '75%'
                        // }}
                        onFinish={onFinish}
                      >
                        <Form.Item
                          name="nombre"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Username!',
                            },
                          ]}
                        >
                          <Input prefix={<UserOutlined />} placeholder="Nombre" />
                        </Form.Item>
                        <Form.Item
                          name="correo"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Email!',
                            },
                            {
                              type: 'email',
                              message: 'The input is not valid E-mail!'
                            }
                          ]}
                        >
                          <Input prefix={<MailOutlined />} placeholder="Correo" />
                        </Form.Item>

                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your Password!',
                            },
                          ]}
                        >
                          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>

                        <Form.Item
                          name="passwordConf"
                          rules={[
                            {
                              required: true,
                              message: 'Please confirm password',
                            },
                          ]}
                        >
                          <Input prefix={<LockOutlined />} type="password" placeholder="Confirmar Password" />
                        </Form.Item>
                        {/* <Form.Item>
                          <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a href="">Forgot password</a>
                          </Flex>
                        </Form.Item> */}

                        <Form.Item>
                          <Button block type="primary" htmlType="submit">
                            Registrar
                          </Button>
                         
                        </Form.Item>
                      </Form>
              </Card>
                
          </div>
        </>
        
    
  )
}
