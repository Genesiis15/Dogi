import './Card.css'

export const Card = ({ imagen, text, parrafo }) => {
    return (
        <div className='col mb-4'>
            <div className='border p-3 '>
                <img width={200} height={150} src={imagen} />
                <h3 className='title2'>{text}</h3>
                <p>{parrafo}</p>
            </div>
        </div>

    )

}

