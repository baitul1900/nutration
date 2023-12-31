import axios from "axios";
import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";

const Gallery = () => {
  const photos = [
    { src: "/1.jpg", width: 1500, height: 600 },
    { src: "/02.jpg", width: 600, height: 600 },
  ];

  const photosTwo = [
    { src: "/03.jpg", width: 1000, height: 900 },
    { src: "/04.jpg", width: 800, height: 900 },
    { src: "/05.jpg", width: 1800, height: 900 },
  ];

  const photosThree = [
    { src: "/06.jpg", width: 1600, height: 600 },
  ];

  const photosFour = [
    { src: "/07.jpg", width: 800, height: 600 },
    { src: "/08.jpg", width: 600, height: 600 },
  ];

  const photosFive = [
    { src: "/09.jpg", width: 600, height: 600 },
    { src: "/10.jpg", width: 800, height: 600 },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/data.json')
      .then(response => {
        const json = response.data.speech;
        const lines = json.split('\n');
        const newData = lines.map(line => ({ description: line }));
        setData(newData);
      });
  }, []);

  return (
    <div className="container about-container img-fluid">
      <h3 className="text-center mt-5">Photo Gallery</h3>
      <div className="album">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
      <div className="album mt-4">
        <PhotoAlbum layout="rows" photos={photosTwo} />
      </div>
      <div className="album mt-4">
        <PhotoAlbum layout="rows" photos={photosThree} />
      </div>
      <div className="album mt-4">
        <PhotoAlbum layout="rows" photos={photosFour} />
      </div>
      <div className="album mt-4 pb-5">
        <PhotoAlbum layout="rows" photos={photosFive} />
      </div>

      <div className="container">
        {data.map((speech) => (
          <div key={speech.description}>
            <p>{speech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
