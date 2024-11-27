import React, { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  } from '@ant-design/icons';

import { Button, Layout, theme, Drawer, Flex } from 'antd';
const { Header, Sider, Content } = Layout;
import { MdMenu } from 'react-icons/md';


import './NavBarmenu.css';
import useScreenSize from '../../hooks/useScreenSize';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { DashboardPage } from '../../dashboard/pages/DashboardPage';
import { ReporteVentasPage } from '../../modulos/ventas/reporte-ventas/pages/ReporteVentasPage';
import { MenuDrawer } from './MenuDrawer';
import { MenuLeft } from './MenuLeft';

import 'animate.css';
import { RegistrarVentaPage } from '../../modulos/ventas/registrar-venta/pages/RegistrarVentaPage';
import { ReporteGanancias } from '../../modulos/ventas/reporte-ganancias/pages/ReporteGanancias';
import { Categorias } from '../../modulos/ventas/categorias/pages/Categorias';
import { Marcas } from '../../modulos/ventas/marcas/pages/Marcas';
import { UnidadesMedida } from '../../modulos/ventas/unidades-medida/pages/UnidadesMedida';

const siderStyle = {
  overflow: 'auto',
  // height: '100vh',
  // height: 'auto', // Para que se muestren todas las opciones del submenu con el scroll
  position: 'fixed',
  insetInlineStart: 0,
  top: '4rem',
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};

const siderStyle2 = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};


export const NavBarmenu = () => {
  
  const [collapsed, setCollapsed] = useState(true);

  const { width } = useScreenSize();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

 
  const styleContent = {
    padding: 24,
    // margin: '24px 16px',
    minHeight: 280,
    alignItems: 'start',
    background: colorBgContainer,
    // borderRadius: borderRadiusLG,
    marginLeft: collapsed ? 80 : 230,
    // marginLeft: 245,
  }

  const styleContent2 = {
    padding: 24,
    // margin: '24px 16px',
    minHeight: 280,
    alignItems: 'start',
    background: colorBgContainer,
    // borderRadius: borderRadiusLG,
    marginLeft: 0,
  }
 

  return (

      <Layout>
        <button className="btn btn-primary fab" onClick={showDrawer}>
          <MdMenu />
        </button>

        <Drawer 
          // title="User" 
          onClose={onClose} 
          open={open}
        >
          <Sider
            width={'100%'}
            style={siderStyle2}
            trigger={null} 
            // collapsible 
            // collapsed={collapsed}
            >
              <MenuDrawer />

          </Sider>
        </Drawer>

        <div
          className='sider'
        >
          <Sider
            width={230}
            style={{
              ...siderStyle,
              height: collapsed ? '100vh' : 'auto',
              // height: 'auto',
              backgroundColor: colorBgContainer
            }}
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            >
              <MenuLeft />
          </Sider>
        </div>

        <Layout>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: 0,
              background: colorBgContainer,
              boxShadow: '0 0.4px 1px 0 rgba(0, 0, 0, 0.1)'
            }}
          >
            <Flex gap="middle" align="start" vertical>

              <Flex justify="flex-end">
                <div
                  style={{
                    width: collapsed ? 80 : 230,
                    // width: 230,
                    height: '4rem',
                    backgroundColor: colorBgContainer,
                    display: width < 750 && 'none'
                    // marginTop: '6px'
                  }}
                />

                <div className='BtnMenuCollapsed'>
                  <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                      border: '#ffffff',
                    }}
                  />
                </div>
              </Flex>

            </Flex>

            <div
              className='header'    
            >
              <div className='logo-user'>J Moisés</div>
            </div>
              
          </Header>
            <Content
              style={ width < 750 ? styleContent2 : styleContent }
            >

                <Routes>
                  <Route path="dashboard" element={ <DashboardPage /> } />
                  <Route path="reporteventas" element={ <ReporteVentasPage /> } />
                  <Route path="registrar-venta" element={ <RegistrarVentaPage /> } />
                  <Route path="reporte-ganancias" element={ <ReporteGanancias /> } />
                  <Route path='categorias' element={ <Categorias />}/>
                  <Route path='marcas' element={ <Marcas />}/>
                  <Route path='unidades-medida' element={ <UnidadesMedida />}/>

                  <Route path="/*" element={ <Navigate to="/dashboard" />} />
              </Routes>

            </Content>
        </Layout>
      </Layout>
    
  );
}