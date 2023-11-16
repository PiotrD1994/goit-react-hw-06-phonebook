import React from "react";
import PropTypes from 'prop-types'
import css from './Filter.module.css'
import{useDispatch} from 'react-redux'
import { setFilter } from "components/redux/store";


const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(setFilter(event.target.value))
        onChange(event.target.value)
    }
    return(
        <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    )
}


Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter