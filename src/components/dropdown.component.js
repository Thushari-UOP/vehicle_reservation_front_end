import React from 'react'
 
export const DropdownComponent = props => (
    <div className="form-group col-md-6">
        <label>{props.labelName} :</label>
        <select className="form-control" name="{props.labelName}" onChange={props.onChange}>
            <option defaultValue>Select {props.labelName}</option>
            {
                props.options.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))
            }
        </select>
    </div>
);