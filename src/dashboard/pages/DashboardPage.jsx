import { RightOutlined } from "@ant-design/icons"
import { AiOutlineProduct } from "react-icons/ai"
import { FiShoppingCart } from "react-icons/fi"
import { MdOutlineCategory } from "react-icons/md"
import { PiCashRegister } from "react-icons/pi"

import './Dashboard.css';


export const DashboardPage = () => {
  return (

    <section className="card-container">
        {/* <div className="cardCollection">
          <div className="cardCollectionimg"><FiShoppingCart /></div>
          <div className="cardCollectiontextBox">
            <div className="cardCollectiontextContent">
              <p className="cardCollectionh1">Ventas</p>
              <span className="cardCollectionspan">
                <label className="cardCollectioncheckbox-container">
                <RightOutlined 
                  className='cardCollectioncheckmark'
                />
                </label>
              </span>
            </div>
            <div></div>
            <p className="cardCollectionp">Price:</p>
          </div>
        </div>
      
        <div className="cardCollection">
          <div className="cardCollectionimg"><PiCashRegister /></div>
          <div className="cardCollectiontextBox">
            <div className="cardCollectiontextContent">
              <p className="cardCollectionh1">Reg. venta</p>
              <span className="cardCollectionspan">
                <label className="cardCollectioncheckbox-container">
                <RightOutlined 
                  className='cardCollectioncheckmark'
                />
                </label>
              </span>
            </div>
            <div></div>
            <p className="cardCollectionp">Price:</p>
          </div>
        </div>
      
        <div className="cardCollection">
          <div className="cardCollectionimg"><AiOutlineProduct /></div>
          <div className="cardCollectiontextBox">
            <div className="cardCollectiontextContent">
              <p className="cardCollectionh1">Prod. & Serv.</p>
              <span className="cardCollectionspan">
                <label className="cardCollectioncheckbox-container">
                <RightOutlined 
                  className='cardCollectioncheckmark'
                />
                </label>
              </span>
            </div>
            <div></div>
            <p className="cardCollectionp">Price:</p>
          </div>
        </div>
      
        <div className="cardCollection">
          <div className="cardCollectionimg"><MdOutlineCategory /></div>
          <div className="cardCollectiontextBox">
            <div className="cardCollectiontextContent">
              <p className="cardCollectionh1">Categorías</p>
              <span className="cardCollectionspan">
                <label className="cardCollectioncheckbox-container">
                <RightOutlined 
                  className='cardCollectioncheckmark'
                />
                </label>
              </span>
            </div>
            <div></div>
            <p className="cardCollectionp">Price:</p>
          </div>
        </div> */}

        <div className="card-info">
          <div className="icon-container-info">
            <FiShoppingCart className="icon-info" />
          </div>
          <div className="message-text-container-info">
            <p className="message-text-info">Ventas</p>
            <p className="sub-text-info">You just should know this</p>
          </div>

        </div>

        <div className="card-success">
          <div className="icon-container-success">
            <PiCashRegister className="icon-success" />
          </div>
          <div className="message-text-container-success">
            <p className="message-text-success">Registrar Venta</p>
            <p className="sub-text-success">You just should know this</p>
          </div>
          
        </div>

        <div className="card-warning">
          <div className="icon-container-warning">
            <AiOutlineProduct className="icon-warning" />
          </div>
          <div className="message-text-container-warning">
            <p className="message-text-warning">Productos y Servicios</p>
            <p className="sub-text-warning">You just should know this</p>
          </div>
          
        </div>

        <div className="card-error">
          <div className="icon-container-error">
            <MdOutlineCategory className="icon-error" />
          </div>
          <div className="message-text-container-error">
            <p className="message-text-error">Categorías</p>
            <p className="sub-text-error">You just should know this</p>
          </div>
          
        </div>

    </section>
              
  )
}
