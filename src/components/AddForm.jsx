import React from 'react';
import { useStore } from '../store';

const AddForm = () => {
    const addResource = useStore((state) => state.addResource);
    const [name, setName] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [type, setType] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault()

        if (quantity < 0 ) setQuantity(0)
        if (quantity > 100) setQuantity(100)

        addResource({ name, unit, quantity, type })

        // Reset form
        setName('')
        setUnit('')
        setQuantity(0)
        setType('')
    }

    return (
        <form style={{ margin: '20px', color: 'white', backgroundColor: '#333' }} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome Risorsa"
                value={name}
                onChange={(event) => setName(event.target.value)}
                style={{ margin: '10px' }}
            />
            <input
                type="text"
                placeholder="Unità (es. %, kg)"
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
                style={{ margin: '10px' }}
            />
            <input
                type="number"
                placeholder="Quantità Iniziale"
                value={quantity}
                min='0'
                onChange={(event) => setQuantity(Number(event.target.value))}
                style={{ margin: '10px' }}
            />
            <input
                type="text"
                placeholder="Tipo"
                value={type}
                onChange={(event) => setType(event.target.value)}
                style={{ margin: '10px' }}
            />
            <br /> <button type="submit" style={{ margin: '10px' }}>Aggiungi Risorsa</button>
        </form>
    )
}

export default AddForm;