import photos from './gallery-items.json'

const cards = photos.map((photo) => 
    (
    <div className="card col-4" key={photo.id}>
        <a href="asdas">
            <img
                className="card-img-top"
                src={photo.original}
                data-source={photo.original}
                alt={photo.description}
            />
        </a>
        <p className='card-title card'>
            {photo.description}
        </p>
    </div>
));

console.log(cards);

export const Cards = () => {
    // { original, preview, description } = photos;
    return (
        <div id="main_id" className="row container mx-auto my-5">
        {photos.map((photo) => 
    (
    <div className="card col-4" key={photo.id}>
        <a href="asdas">
            <img
                className="card-img-top"
                src={photo.original}
                data-source={photo.original}
                alt={photo.description}
            />
        </a>
        <p className='card-title card'>
            {photo.description}
        </p>
    </div>
        ))
            }
    </div>
    );
};