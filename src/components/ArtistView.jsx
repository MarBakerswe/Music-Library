// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ArtistView() {
    const [ artistData, setArtistData ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://itunes.apple.com/lookup?id=${id}&entity=album`)
            .then(response => response.json())
            .then(data => {
                setArtistData(data.results)
            })
    }, [id])

    return (
        <div>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView
