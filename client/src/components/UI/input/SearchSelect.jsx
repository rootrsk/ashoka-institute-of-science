import './Input.scss'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function SearchSelect({defaultValue,options,isMulti,label,name,required,isLoading,onChange}) {
  return (
    <div className='input_wrapper'>
      <label htmlFor={name}>{label} {required &&  <span style={{color:'red'}}>*</span>}</label>
        <Select
          closeMenuOnSelect={isMulti?false:true}
          components={animatedComponents}
          defaultValue={defaultValue}
          isMulti={isMulti}
          options={options}
          className="search-select"
          isLoading={isLoading}
          onChange={onChange && onChange}
      />
    </div>
  )
}

export default SearchSelect