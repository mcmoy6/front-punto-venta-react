import Modal from 'react-modal';
import { Card, Button, Layout, Form, Input } from 'antd';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import { useEffect, useState } from 'react';

import './styles-categoria.css';
import { useMemo } from 'react';
import { useUiStore } from '../../../../hooks/useUiStore';
import { useCategoryStore } from '../../../../hooks/useCategoryStore';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

const initRow = {
    _id: '',
    categoria: ''
}

export const CategoriaModal = () => {


    const { isCategoryModalOpen, closeCategoriaModal } = useUiStore();

    const { activeData, startSavingCategory, clearSetActiveData } = useCategoryStore();

    const [formSubmitted, setFormSubmitted] = useState(false);

    const [validFormCategory, setvalidFormCategory] = useState(true)

    const [formValues, setFormValues] = useState({
        categoria: ''
    });

    useEffect(() => {
        
        
      if ( activeData !== null) {
        setFormValues( {...activeData} );
        // console.log(activeData);
      } else {
        setFormValues({ ...initRow });
      }
    
      
    }, [ activeData, isCategoryModalOpen ])
    

    const categoryClass = useMemo(() => {
        if ( !formSubmitted ) return '';

        return ( formValues.categoria.length > 0 ) ? true : false
        
    }, [ formValues.categoria, formSubmitted ]);


    const categoryBorderErrorClass = useMemo(() => {
        if ( !formSubmitted ) return '';
        
        return ( formValues.categoria.length > 0 ) ? 'input-border' : 'border-error-valid'
        
    }, [ formValues.categoria, formSubmitted ]);
    

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const onCloseModal = () => {
        closeCategoriaModal();
        setvalidFormCategory(true);
        // clearSetActiveData();
        setFormValues({ ...initRow });
    }

    
    const onSubmit = async(event) => {
        
        event.preventDefault();
        setFormSubmitted(true);

        if ( formValues.categoria.length <=0 ) {
            setvalidFormCategory(false);
            return;
        };

        // console.log( formValues );

        await startSavingCategory( formValues );
        setvalidFormCategory(true);

        onCloseModal();
        

    }

  return (
    <Modal
        isOpen={ isCategoryModalOpen }
        onRequestClose={ onCloseModal }
        // style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >

        <div className="modal">
            <article className="modal-container">
            <header className="modal-container-header">
                <span className="modal-container-title">
                {/* <svg aria-hidden="true" height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" fill="currentColor" />
                </svg> */}
                Nueva Categoría
                </span>
                <button className='icon-button' onClick={ onCloseModal }>
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"></path>
                    </svg> 

                </button>
            </header>
            <section className="modal-container-body rtf">
                <form className="container" onSubmit={ onSubmit }>
                    <div className="form">
                        <input 
                            autoFocus
                            type="text" 
                            className="input" 
                            name='categoria'
                            placeholder="Ingrese una nueva categoría" 
                            onChange={ onInputChanged }
                            value={ formValues.categoria }
                        />

                        <span className="input-border" />
                        <span className="labelp">Categoría</span>
                        <span className="label-error-valid" hidden={validFormCategory}>Debe ingresar una categoría.</span>

                    </div>
                </form> 
            </section>
            <footer className="modal-container-footer">
                <button onClick={ onSubmit }>
                    <span>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={20} height={20} strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z" strokeLinejoin="round" strokeLinecap="round" data-path="box" />
                        <path d="M7 3L7 8L15 8" strokeLinejoin="round" strokeLinecap="round" data-path="line-top" />
                        <path d="M17 20L17 13L7 13L7 20" strokeLinejoin="round" strokeLinecap="round" data-path="line-bottom" />
                    </svg>
                     Guardar
                    </span>
                </button>
                {/* <button className="button is-ghost">Decline</button>
                <button className="button is-primary">Accept</button> */}
            </footer>
            </article>
        </div>

        {/* <div className='categorias-modal'>
            <article className='modal-container'>
                <header className='modal-container-header'>
                    <span className='modal-container-title'>
                        <svg aria-hidden="true" height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" fill="currentColor"></path>
                        </svg>
				            Nueva Categoría

                    </span>
                    <button className='icon-button' onClick={ onCloseModal }>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="currentColor"></path>
                        </svg> 

                    </button>

                </header>

                <form className="container" onSubmit={ onSubmit }>

                    
                    <section className='modal-container-body rtf'>
                       
                        <div className="form">
                            <input 
                                type="text" 
                                className="input" 
                                name='categoria'
                                placeholder="Ingrese una nueva categoría" 
                                onChange={ onInputChanged }
                                value={ formValues.categoria }
                            />

                            <span className="input-border" />
                            <label className="labelp">Categoría</label>
                            <label className="label-error-valid" hidden={validFormCategory}>Debe ingresar una categoría.</label>

                        </div>
                                
                    </section>

                    <footer className='modal-container-footer'>

                    <button>
                        <span>
                        <svg height={24} width={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor" />
                        </svg>
                        Guardar
                        </span>
                    </button>
                    
                    </footer>

                </form> 
            </article>

        </div> */}

    </Modal>
  )
}
