
import { Form, Input } from 'antd';
import './RegistrarVentaStyles.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { MdBarcodeReader, MdOutlinePayments } from 'react-icons/md';
import { BsCashCoin, BsPersonCheck } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { TbShoppingCartCancel } from 'react-icons/tb';
import { IoIosSettings } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';


export const RegistrarVentaPage = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  }

  return (
    <div className="contenedor">

      <div className="contenedor-conciertos">

        <div className="card1">
            <Form
              name="cliente"
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
                name="buscarcliente"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your Username!',
                //   },
                // ]}
              >
                <Input 
                  prefix={<BsPersonCheck />}
                  placeholder="Cliente" 
                  size='large'
                />
              </Form.Item>
              
            </Form>

            <Form
              name="articulo"
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
                name="buscararticulo"
                // rules={[
                //   {
                //     required: true,
                //     message: 'Please input your Username!',
                //   },
                // ]}
              >
                <Input 
                  prefix={<CiSearch />}
                  placeholder="Buscar artículo" 
                  size='large'
                />
              </Form.Item>
              
            </Form>
        </div>

        <div className="card2">
          <div className="textos">
            {/* <h3>FalconMasters’ Concert</h3>
            <p>12 de Noviembre 2021</p> */}
          </div>
        </div>

        {/* <div className="card3">
          <div className="textos">
            <h3>FalconMasters’ Concert</h3>
            <p>12 de Noviembre 2021</p>
            hola
          </div>
        </div> */}
        
      </div>

      <div className="banner">
        
          <div className='botonera'>
        
            <button className="diva" role="button"><IoSettings /> Opciones</button>
          
            <button className="divb" role="button"><TbShoppingCartCancel /> Cancelar</button>

            <button className="divc" role="button"><BsCashCoin /> Cobrar</button>

            <div className='intermedio'> Intermedio </div>

            <div className='total'>

              <div className="title">
                  <p className="title-text">
                      Artículos: 
                  </p>
                  <p className="percent">
                      20
                  </p>
              </div>
              <div className="data">
                  <p>
                      $ 1,500
                  </p>
              </div>
            </div>

          </div>

      </div>

    </div>
  )
}
