import { useDispatch, useSelector } from "react-redux";
import { onCloseCategoryModal, onOpenCategoryModal } from "../store/ui/uiSlice";




export const useUiStore = () => {


    const dispatch = useDispatch();

    const {
        isCategoryModalOpen
    } = useSelector( state => state.ui );


    const openCategoriaModal = () => {
        dispatch( onOpenCategoryModal() );
    }

    const closeCategoriaModal = () => {
        dispatch( onCloseCategoryModal() );
    }


    return {
        //* Propiedades
        isCategoryModalOpen,

        //* Métodos
        openCategoriaModal,
        closeCategoriaModal
    }
  
}
