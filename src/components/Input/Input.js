import './Input.css'
import { FaSearch } from 'react-icons/fa';

export default function Input({ inputValue, onChange, onSelect }) {
    return (
        <div className="search-area row">
            <span className='col-lg-10 col-sm-10 text-field__input' >
                <FaSearch color='white' size={'25'} />
                <input value={inputValue} onChange={onChange} type="text" placeholder='Search Movie' />
                <select onChange={onSelect} id="lang">
                    <option value="en">English</option>
                    <option value="ru">Russian</option>
                </select>
            </span>
        </div>
    )
}