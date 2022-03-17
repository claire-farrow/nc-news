import {useState} from "react";

export default function Collapse({children}) {
    const [isVisible, setIsVisible] = useState(false)
    
    const handleClick = () => {
        setIsVisible((currentVisibility) => {
            return !currentVisibility
        })
    }

    return (
        <>
            {isVisible && children}
            <button onClick={handleClick}>
            {isVisible ? "show less" : "show more"}
            </button>
        </>
    )
}