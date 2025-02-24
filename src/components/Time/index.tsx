import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import { IColaborador } from "../../shared/interfaces/IColaborador";

interface TimeProps {
  id?: string;
  titulo: string;
  cor: string;
  colaboradores: IColaborador[];
  aoDeletar: (id: string) => void;
  mudarCor: (cor: string, id: string) => void;
  aoFavoritar: (id: string) => void;
}

export const Time = ({
  id,
  titulo,
  cor,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}: TimeProps) => {
  const estiloSection = {
    backgroundColor: hexToRgba(cor, "0.6"),
  };
  const estiloTitulo = {
    borderColor: cor,
  };

  return (
    colaboradores.length > 0 && (
      <section style={estiloSection} className="time">
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores-container">
          <input
            onChange={(evento) => id && mudarCor(evento.target.value, id)}
            value={cor}
            type="color"
            className="input-cor"
          />
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              data={colaborador.data} 
              corCabecalho={colaborador.corCabecalho}
              aoDeletar={() => aoDeletar(colaborador.id)}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section> 
    )
  );
};
