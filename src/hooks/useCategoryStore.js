import { useDispatch, useSelector } from "react-redux";
import { onAddNewCategory, onClearSetActiveData, onDeleteCategory, onSetActiveData, onUpdateCategory } from "../store/categorias/categoriaSlice";




export const useCategoryStore = () => {

    const dispatch = useDispatch();

    const { data, activeData, toggleCleared } = useSelector( state => state.categoria );

    const setActiveData = ( categoryDataRow ) => {
      dispatch( onSetActiveData( categoryDataRow ) );
    }

    const clearSetActiveData = () => {
      dispatch( onClearSetActiveData() );
    }

    const startSavingCategory = async( category ) => {
      // TODO: Llegar al Backend...
      
      // Si todo va bien..
      if( category._id ) {
        // Se esta realizando una actualización
        dispatch( onUpdateCategory( {...category} ) );
      } else {
        // Se crea una nueva categoría..
        dispatch( onAddNewCategory( { ...category, _id: new Date().getTime() } ));
      }

    }
    
    const deleteCategory = () => {
      dispatch( onDeleteCategory() );
    }

  return {
        // Propiedades
        data,
        activeData,
        toggleCleared,

        //Métodos
        clearSetActiveData,
        setActiveData,
        startSavingCategory,
        deleteCategory,

  }
}
