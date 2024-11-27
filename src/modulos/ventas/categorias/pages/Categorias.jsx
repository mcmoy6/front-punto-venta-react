import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { CategoriaModal } from "../components/CategoriaModal";
import 'react-data-table-component-extensions/dist/index.css';
import { CategoriaAddBtn } from "../components/CategoriaAddBtn";
import { useCategoryStore } from "../../../../hooks/useCategoryStore";
import { useUiStore } from "../../../../hooks/useUiStore";
import { useMemo } from "react";
import { CategoriaButtonsContainer } from "../components/CategoriaButtonsContainer";


export const Categorias = () => {

  const { openCategoriaModal } = useUiStore();

  const columns = [
    {
      name: 'Categoría',
      selector: row => row.categoria,
      sortable: true,
    },
  ];

 const { data, setActiveData, clearSetActiveData, toggleCleared } = useCategoryStore();

 const handleRowSelected = ( { allSelected, selectedCount, selectedRows } ) => {
  // console.log(selectedCount, allSelected, selectedRows);

  const [dataRow] = selectedRows;

  if (dataRow) {

    setActiveData( dataRow );
  } else {
    clearSetActiveData();
  }
  
 }

 const onRowClicked = (e) => {
    console.log(e);
    
 }

 const onRowDoubleClicked = (event) => {
  // console.log(event);
  openCategoriaModal();

  setActiveData(event);
  
 }

 const contextActions = useMemo(() => {
  
  return (
        <CategoriaButtonsContainer />
        )
}, [data]);


  return (
    <>

        <DataTable 
          title="Categorías" 
          columns={columns}
			    data={data}
          contextActions={ contextActions }
          highlightOnHover
          selectableRows 
          selectableRowsSingle
          selectableRowsHighlight	
          clearSelectedRows={ toggleCleared }
          onRowClicked={ onRowClicked }
          onRowDoubleClicked={ onRowDoubleClicked }
          onSelectedRowsChange={ handleRowSelected }
          pagination
        />

        <CategoriaModal />
        <CategoriaAddBtn />
    </>
  )
}
