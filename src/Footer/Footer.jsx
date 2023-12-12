import './Footer.css'
import { FaWhatsapp, FaInstagram, FaFacebook, FaDog } from "react-icons/fa";

export const Footer = () => {
    return <>
        <footer className=" text-bg-warning mt-5 " >
            <div className='container py-5 text-center'>

                <div className='text-silver'> Copyright 2023, Todos nuestros derechos reservados | <FaDog /> Dogi.com</div>
                <hr className='my-2 text-silver' />
                <div className='text-silver'>
                    <h5 className="card-title ">Aviso legal Politica de privacidad Quienes Somos Contacto Politica de cookies Declaracion de privacidad</h5>
                    <p className="card-text"></p>
                </div>
                <div >
                    <ul className='d-flex justify-content-center gap-3 list-unstyled mt-3'>
                        <li><FaWhatsapp className='icons icons--g' /></li>
                        <li><FaInstagram className='icons icons--r' /></li>
                        <li><FaFacebook className='icons icons--b' /></li>

                    </ul>
                </div>
            </div>
        </footer>
    </>
}