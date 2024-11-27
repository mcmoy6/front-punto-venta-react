import { createSlice } from '@reduxjs/toolkit';

const tempData =  {
  _id: new Date().getTime(),
    categoria: "FERRETERÍA"
  };

export const categorySlice = createSlice({
   name: 'category',
   initialState: {
      data: [
        tempData
      ],
      activeData: null,
      toggleCleared: false,
   },

   reducers: {

       onSetActiveData: (state, { payload } ) => {
           state.activeData = payload;
       },

       onClearSetActiveData: ( state ) => {
          state.activeData = null;
       },
       
       onAddNewCategory: ( state, { payload }) => {
          state.data.push( payload );
          state.activeData = null;
       },

       onUpdateCategory: ( state, { payload }) => {
        state.data = state.data.map( category => {
          if ( category._id === payload._id ) {
              state.activeData = null;
              state.toggleCleared = !state.toggleCleared;
              return payload;
          }
          return category;
        });
       },

       onDeleteCategory: ( state ) => {

        if ( state.activeData ) {
          
          state.data = state.data.filter( category => category._id != state.activeData._id );
          state.activeData = null;
          state.toggleCleared = !state.toggleCleared;
          
        }
       },

     }

});


// Action creators are generated for each case reducer function
export const { onSetActiveData, onAddNewCategory, onUpdateCategory, onDeleteCategory, onClearSetActiveData } = categorySlice.actions;