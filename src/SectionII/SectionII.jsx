import { Card } from '../GroupCard/Card'

export const SectionII = () => {
    return <div id='SectionII' className="container ">
        <div className=' my-5 row justify-content-around'>
            <div className='col-12 col-md-6 content d-flex flex-column justify-content-between'>

                <h1 className='title1'>Welcome To Our <span className='title2' >Dogi Pet</span></h1>
                <div>
                    <p >There are many variations of passage of Lorem Ipsum available, but there majority have suffered alteration in some form, by injected humour, or then There are many variations of passage of Lorem Ipsum available, but there majority have suffered alteration in some form, by injected humour, or then There are many variations of passage of Lorem Ipsum available, but there majority have suffered alteration in some form, by injected humour, or then</p>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                            <label className="form-check-label" htmlFor="firstCheckbox">Contrary To Popular Belief, Lorem Ipsum</label>
                        </li>
                        <li className='list-group-item'>
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                            <label className="form-check-label" htmlFor="firstCheckbox">Dog training, Lorem Ipsum</label>
                        </li>
                        <li className='list-group-item'>
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                            <label className="form-check-label" htmlFor="firstCheckbox">Aggressive dog behavior, Lorem Ipsum</label>
                        </li>
                        <li className='list-group-item'>
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                            <label className="form-check-label" htmlFor="firstCheckbox">The Standard CHunk Of Lorem Ipsum Used Since The</label>
                        </li>
                        <li className='list-group-item'>
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                            <label className="form-check-label" htmlFor="firstCheckbox">It is a Long Estabilished Fact That A Reader</label>
                        </li>
                    </ul>
                </div>
                <button className='btn btn-warning my-3'>Discover More</button>


            </div>
            <div className="col-12 col-md-6 row">
                <Card imagen={'https://img.freepik.com/free-photo/young-brown-french-bulldog-playing-isolated-white-studio-wall_155003-31898.jpg?size=626&ext=jpg&ga=GA1.1.1220080735.1701721645&semt=ais'}
                    text={"Full Diagnostics"}
                    parrafo={'Look Like readable English Many Desktop'} />
                <Card imagen={'https://img.freepik.com/psd-gratis/lindo-perro-retrato-aislado_23-2150194027.jpg?size=626&ext=jpg&ga=GA1.1.473172475.1702318212&semt=ais'}
                    text={"Dog Training"}
                    parrafo={'A dog trainer is a professional who is dedicated to training '} />
                <Card imagen={'https://img.freepik.com/foto-gratis/perro-compania-raza-king-charles-spaniel-tranquilamente-sentado-aislado-sobre-fondo-blanco-estudio_155003-45726.jpg?size=626&ext=jpg&ga=GA1.1.473172475.1702318212&semt=ais'}
                    text={"Awarded Service"}
                    parrafo={'dog that is individually trained to do a job'} />
                <Card imagen={'https://img.freepik.com/psd-gratis/escena-perro-marron-blanco_23-2150179303.jpg?size=626&ext=jpg&ga=GA1.1.473172475.1702318212&semt=ais'}
                    text={"Pet Sitting"}
                    parrafo={'adequate food, housing, shelter, health care and'} />
            </div>
        </div>
    </div >
}