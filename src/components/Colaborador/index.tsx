import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
  colaborador: {
    nome: string;
    cargo: string;
    imagem: string;
    favorite: boolean;
    id: string;
  };
  corCabecalho: string;
  aoDeletar: () => void;
  aoFavoritar: (id: string) => void;
}

export const Colaborador = ({
  colaborador,
  corCabecalho,
  aoDeletar,
  aoFavoritar,
}: ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }
  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletarColaborador"
        onClick={aoDeletar} // Passando a função corretamente
      />
      <div className="cabecalho" style={{ backgroundColor: corCabecalho }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorite ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;

