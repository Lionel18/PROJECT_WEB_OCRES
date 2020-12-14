import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const AdminNews = (props) => {

    const [nom, setNom] = useState(null)
    const [photo, setPhoto] = useState(null)
    const [actualite, setActualite] = useState(null)

    const createNews = () => {
        axios.post('http://localhost:3100/news', { nom, photo, actualite }).then(res => {
            alert(res.data)
        })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: "500px", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "10px", borderRadius: "7px" }}>
                <h2>Ajouter une news</h2>
                <Form >
                    <Form.Group >
                        <Form.Label>Titre</Form.Label>
                        <Form.Control value={nom} type="text" placeholder="Titre de l'actualité" onChange={e => setNom(e.target.value)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>L'url de la photo</Form.Label>
                        <Form.Control value={photo} type="text" placeholder="URL de la photo" onChange={e => setPhoto(e.target.value)} />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={actualite} type="text" placeholder="Description" onChange={e => setActualite(e.target.value)} />
                    </Form.Group>


                    <Button variant="primary" type="button" onClick={createNews}>
                        Créer
                </Button>
                </Form>
            </div>
        </div>

    )
}


export default AdminNews