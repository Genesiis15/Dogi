import './SectionI.css'
import perrito from '../assets/perrito-removebg-preview.png'
import Swal from 'sweetalert2'
import nuevosperritos from '../assets/nuevosperritos-removebg-preview.png'

export const SectionI = () => {

    const btnContact = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Green Alert!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return <>

        <section className=' mt-5  bg-section'>
            {/* <h2 className='text-bottom'>La suerte que tengo</h2> */}
            <div className='container '>
                <div className='row justify-content-around  paddingResponsive' >
                    <div className='col-md-4 col-12'>
                        <h1 className='title1'>Will <span className='title2'>Dog Ever</span> Rule The World?</h1>
                        <p>The Standard chunk of lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from</p>
                        <div className='boton'>
                            <button onClick={btnContact} className='btn btn-outline-warning'>Contact Ve</button>
                            <smile className='contact'>+58 424 178 1737</smile>
                        </div>
                    </div>
                    <div className='col-md-6 col-12'>
                        <img className='img' src={perrito} />

                    </div>

                </div>
            </div>
            <img className='rounded img2 position-bottom' src={nuevosperritos} />

        </section>
    </>
}