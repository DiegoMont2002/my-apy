import React from "react";

function Hotel1() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" style={{ maxWidth: "800px", margin: "20px" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://th.bing.com/th/id/R.bccdc32dc4dd5eec2652f8e23104422d?rik=JjQYS6STcsjbpA&pid=ImgRaw&r=0" className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b4/52/f6/the-lodge-at-chichen.jpg?w=500&h=500&s=1" className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.internationalsurfproperties.com/wp-content/uploads/2021/03/las_flores_el_salvador_surf_resort_for_sale_1.jpg" className="d-block w-100" alt="..." style={{ maxHeight: "500px", objectFit: "cover" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
            </ul>

        </>
    )
}

export default Hotel1;