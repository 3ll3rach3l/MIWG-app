import {useState} from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false); //sets current view of modal

    function toggle(){
        setIsShowing(!isShowing);
    }

    return{    //this return gives access to the component
        isShowing,
        toggle
    }
}

export default useModal;