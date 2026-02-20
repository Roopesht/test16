export default function MapFunc () {
    const names = ['Siva', 'Rama', 'Krishna'];
    return (
        <>
        {names.map((name, idx) => (
            <div>
                - {idx}.{name}
            </div>
        ))}
    

        </>
    )
}