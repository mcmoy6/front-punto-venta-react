import { AppstoreOutlined, ContainerOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { AiFillTrademarkCircle } from "react-icons/ai";
import { FaCashRegister } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoBarChartSharp } from "react-icons/io5";
import { MdDashboard, MdOutlineCategory } from "react-icons/md";
import { PiCashRegister } from "react-icons/pi";
import { TbRulerMeasure } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
    {
      key: '/dashboard',
      icon: <MdDashboard />,
      label: 'Dashboard',
    },
    {
      key: 'sub1',
      label: 'Ventas',
      icon: <FiShoppingCart />,
      children: [
        {
          key: '/categorias',
          label: 'Categorías',
          icon: <MdOutlineCategory />,
        },
        {
          key: '/marcas',
          label: 'Marcas',
          icon: <AiFillTrademarkCircle />,
        },
        {
          key: '/unidades-medida',
          label: 'Unidades de Medida',
          icon: <TbRulerMeasure />,
        },
        {
          key: '/registrar-venta',
          label: 'Punto de Venta',
          icon: <FaCashRegister />,
        },
        {
          key: '/reporteventas',
          label: 'Reporte Ventas',
          icon: <IoBarChartSharp />,
        },
        {
          key: '/reporte-ganancias',
          label: 'Reporte de ganancias',
          icon: <FaMoneyBillTrendUp />,
        },
      ],
    },
    {
      key: '2',
      icon: <PieChartOutlined />,
      label: 'Option 2',
    },
    {
      key: '3',
      icon: <ContainerOutlined />,
      label: 'Option 3',
    },
    
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            {
              key: '11',
              label: 'Option 11',
            },
            {
              key: '12',
              label: 'Option 12',
            },
          ],
        },
      ],
    },
  ];


export const MenuLeft = () => {

    const navigate = useNavigate();

    const handleClickMenu = (e) => {
        navigate(e.key);
      }

    let location = useLocation();
    // console.log(location.pathname);

  return (
        <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={items}
            onClick={ handleClickMenu }
            style={{
            height: '100vh'
            }}
        />
  )
}
