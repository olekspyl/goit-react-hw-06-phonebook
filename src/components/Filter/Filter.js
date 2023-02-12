import React from "react";
import {useDispatch, useSelector} from "react-redux"; 
import { getFilter } from "redux/selector";
import { changeFilter } from 'redux/slices';


const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  
  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={
          e => dispatch(changeFilter(e.target.value))
        }
      />
    </label>
  )
};

export default Filter;

 