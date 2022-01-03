import { useState } from "react";

export const useForm = (initialState = {}) => {
   const [values, setValues] = useState(initialState);

   const reset = () => {
      setValues(initialState);
   };

   const handleInpudChange = ({ target }) => {
      setValues({
         ...values,
         [target.name]: target.value,
      });
   };

   return [values, handleInpudChange, reset];
};
