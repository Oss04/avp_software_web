import usePacientes from "../hook/usePacientes"
import Paciente from "./Paciente"
const ListadoPacientes = () => {

  const { pacientes } = usePacientes()

  return (
    <>
      {pacientes.length ?
        (
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-center text-lg mb-10 font-bold">
              Administra tus <span className="text-indigo-800">Pacientes y Citas</span>
            </p>
            {pacientes.map(paciente => (
              <Paciente
                key={paciente._id}
                paciente={paciente}
              />
            ))}
          </>
        )
        :
        (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Comienza Agregando {''}<span className="text-indigo-800 font-bold">Pacientes</span></p>
          </>
        )
      }
    </>
  )
}

export default ListadoPacientes