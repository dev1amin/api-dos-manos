export function Card({mano}) {
    return(
        <>
        <li>
          <img src={mano.img} alt="Imagem de {mano.nome}" />
          <div className="info">
            <p><span>Nome:</span> {mano.nome}</p>
            <p><span>Apelido:</span> {mano.apelido}</p>
            <p><span>Cor:</span> {mano.cor}</p>
            <p><span>Sexo:</span> {mano.sexo}</p>
            <p><span>Altura:</span> {mano.altura}</p>
            <p><span>Idade:</span> {mano.idade}</p>
            <p><span>Cabelo:</span> {mano.cabelo}</p>
            <p><span>Sobre:</span> {mano.sobre}</p>
          </div>
        </li>
        </>
    )
}