export default function Card({children}) {

    const cardStyle = {
        width: '200px',
        height: '200px',
        border: '4px solid green',
        borderRadius: '2px',
        padding: '4px',
        margin: '4px'
    }
    return (
        <div style={cardStyle}>
            {children}
        </div>
    )
}
