import { useState } from "react";

function Skils() {


    
    // const [storeGender, setStoreGender] = useState("Female")
    // const [storeCity, setStoreCity] = useState("Das")

    // {
    //     const [skil, setSkil] = useState([]);
    //     const handalSkils = ((event) => {
    //         if (event.target.checked) {
    //             setSkil([...skil, event.target.value]);
    //         } else {
    //             setSkil([...skil.filter((item) => item != event.target.value)])
    //         }
    //     }
    //     )
    // }
    return (
        <>


        

            {/* <div className="groupCheckBox">
                <inpurgroup onChange={(event) => setStoreGender(event.target.value)} >
                    <input type="radio" name="gender" id="male" value="Male" />
                    <label htmlFor="male">Male</label>
                    <br />
                    <br />
                    <input type="radio" name="gender" id="female" value="Female" checked={storeGender == 'Female'}/>
                    <label htmlFor="female">Female</label>
                </inpurgroup>
            </div> */}

            {/* <div className="CheckBox">
                <input type="radio" name="gender" id="male" value="Male" onChange={(event) => setStoreGender(event.target.value)} />
                <label htmlFor="male">Male</label>
                <br />
                <br />
                <input type="radio" name="gender" id="female" value="Female" checked={storeGender == 'Female'} onChange={(event) => setStoreGender(event.target.value)} />
                <label htmlFor="female">Female</label>
            <br />
            <h3>Selected Gender is "{storeGender.toStding()}"</h3>
            <br />
            </div> */}

            {/* <div className="select">
                <select defaultValue={"dastikoppa"} onChange={(event) => setStoreCity(event.target.value)}>
                    <option value="alataga" >Alataga</option>

                    <option value="dastikoppa">Dastikoppa</option>

                    <option value="kudachi">Kudachi</option>

                </select>
                    <br />
                    <br />
                    <h3>Selected City is "{storeCity.toStding()}"</h3>
            </div> */}


            {/* <div className="chechBox">
                <input onChange={handalSkils} type="checkbox" name="java" value="Java" id="java" />
                <label htmlFor="java">java</label>
                <br />
                <br />
                <input onChange={handalSkils} type="checkbox" name="php" value="php" id="php" />
                <label htmlFor="php">php</label>
                <br />
                <br />
                <input onChange={handalSkils} type="checkbox" name="JS" value="JS" id="JS" />
                <label htmlFor="JS">JS</label>
                <br />
                <br />
                <input onChange={handalSkils} type="checkbox" name="Html" value="Html" id="Html" />
                <label htmlFor="Html">Html</label>
                <br />
                <br />
                <input onChange={handalSkils} type="checkbox" name="React" value="React" id="React" />
                <label htmlFor="React">React</label>

                <h2>{skil.toStding()}</h2>
            </div> */}
        </>

    )
}

export default Skils;