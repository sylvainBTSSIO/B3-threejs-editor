import React, {useContext, useEffect, useRef, useState} from 'react';
import {Store, updateColor, updateGadget} from "../../store";

const Gadget = props => {

    const {dispatch, state} = useContext(Store)
    const [gadget, setGadget] = useState(null)

    useEffect(() => {
        if (gadget) {
            dispatch(updateGadget(gadget))
        }
    }, [gadget])

    return (
        <div className="Gadget">
            {/*<button onClick={() => dispatch(updateColor(Math.random() * 0XFFFFFF ))}>Color</button>*/}

            <form>
                <div className="radio">
                    <label>
                        <input type="radio" name={"gadget"} value="sphere" onChange={e => { setGadget(e.currentTarget.value)}}/>
                        1 sphere
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name={"gadget"} value="cube" onChange={e => { setGadget(e.currentTarget.value)}}/>
                        1 cube
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" name={"gadget"} value="spheres" onChange={e => { setGadget(e.currentTarget.value)}} />
                        2 spheres
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Gadget;
