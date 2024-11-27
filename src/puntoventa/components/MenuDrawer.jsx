import { AppstoreOutlined, ContainerOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import { FiShoppingCart } from "react-icons/fi";
import { PiCashRegister } from "react-icons/pi";
import { IoBarChartSharp } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Menu } from "antd";
import { MdDashboard } from "react-icons/md";
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
        key: '/registrar-venta',
        label: 'Punto de Venta',
        icon: <PiCashRegister />,
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


export const MenuDrawer = () => {

    const navigate = useNavigate();

    const handleClickMenu = (e) => {
        navigate(e.key);
      }

    let location = useLocation();

  return (
        <Menu
            // theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={items}
            onClick={ handleClickMenu }
            selectable
        />
  )
}
