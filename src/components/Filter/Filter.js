import PropTypes from 'prop-types';

const Filter = ({ filterChanges }) =>
{
    return(
        <label>
            Find contact by name<input type="text" onChange={ filterChanges } />
        </label>

    )
}

Filter.propTypes={
    filterChanges: PropTypes.func.isRequired
}

export default Filter