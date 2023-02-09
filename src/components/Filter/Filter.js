import React from "react";
import {useDispatch, useSelector} from "react-redux"; 
import { getFilter } from "redux/selector";
import { changeFilter } from 'redux/slices';


const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  
 const formFilterChange = e => 
    dispatch(changeFilter(e.target.value));

  return (
    <label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={formFilterChange}
      />
    </label>
  )
};

export default Filter;

 