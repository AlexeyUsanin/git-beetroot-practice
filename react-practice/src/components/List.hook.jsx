import React, { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import Card from "./Card";

const List = ({value}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading({loading: true})

      fetch(`https://api.pexels.com/v1/search?query=${value}&per_page=12`, {
        method: 'GET',
        headers: {
          'Authorization': '563492ad6f9170000100000160238dad309c4839acdead7607ed24d3',
        },
      })
        .then(response => response.json())
        .then(data => {
          setData(data)
          setLoading(false)
        });
  }, [value])

  // console.log('loading', loading);
  console.log('data', data);

  return (
    // <Button disabled={loading} onClick={() => setLoading(prev => {
    //   return !prev;
    //   })}>Set Loading</Button>
    loading ? (
      <div className="spinner">
        <Spinner animation="border" />
      </div>
    ) : (
      <div className="list">{
        data.photos && data.photos.map(({ id, url, photographer, src, alt }) => (
          <Card
            key={id}
            url={url}
            photographer={photographer}
            src={src}
            alt={alt}
            id={id}
          />
        ))}
      </div>
    )
  )
}

export default List;
