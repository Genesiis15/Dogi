import './Comment.css'
import ReactStars from 'react-stars'

export const Comment = ({ img, title, profesion, texto }) => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return <>
        <div id='Comment' className='cajaComent p-3  col-12 col-md-6 d-flex flex-column my-3 justify-content-between'>
            <div className='cajaComment col-12 col-md-6 content d-flex justify-content-around  '>

                <img className='imgAvatar' src={img} />
                <div className='cajaTitle'>
                    <h2> {title}</h2>
                    <h5> {profesion} </h5>
                </div>
            </div>
            <blockquote className='contentP'>{texto}</blockquote>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={'#ffd700'} />
        </div>


    </>
}