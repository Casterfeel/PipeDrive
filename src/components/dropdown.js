import { useState } from "react"

export default function Dropdown() {

    const [isOpen, setIsopen] = useState(false);

    const toggleDropDown = () => {
        setIsopen(!isOpen);
    }
    
    return (
        <div>
            <button 
            className="dots_btn"
            onClick={toggleDropDown}
            >...
            </button>

            {isOpen && (
                <ul className="dropdown_item">
                    <li>Duplicate</li>
                    <li>Merge</li>
                    <li>Export as XLS</li>
                    <li>Convert to a lead</li>
                    <li>Delete</li>
                    <li>NEW Create a job</li>
                </ul>
            )}
        </div>
    )
};
