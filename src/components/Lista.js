function Lista({itens}) {
    return(
        <>
            <h3>Lista de coisas: </h3>
            {itens.length > 0 ? (
            itens.map((item,index) => (//ideal é ser algo unico, vindo do banco por exemplo
                <p key={index}> {item} </p>
            ))) : (
                <p>Não há itens na lista</p>
            )}
        </>
    )
}

export default Lista