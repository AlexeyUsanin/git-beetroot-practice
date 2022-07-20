import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Photo = () => {
  const [data, setData] = useState({});
  const { photoId } = useParams()

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/photos/${photoId}`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [photoId])

  console.log('data', data)
  return (
    <Container>
      <h1>Photo detail page</h1>

      {data && (
        <>
          <h3>{data.alt}</h3>
          <Image src={data.src?.original} />
          <h4>{data.photographer}</h4>
        </>
      )}
    </Container>
  )
}

export default Photo;