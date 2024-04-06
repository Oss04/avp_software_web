import { Link } from "react-router-dom";

const Registrar = () => {
    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">Crea tu Cuenta y Administra tus <span className="text-black">Pacientes</span></h1>
            </div>
            <div className="mt-10 ml:mt-5 bg-white shadow-lg rounded-lg p-10">
                <form >
                    <div className="my-5">
                        <label className="text-gray-800 uppercase text-xl font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Tu Nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <div className="my-5">
                        <label className="text-gray-800 uppercase text-xl font-bold mt-3">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <div className="my-5">
                        <label className="text-gray-800 uppercase text-xl font-bold mt-3">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <div className="my-5">
                        <label className="text-gray-800 uppercase text-xl font-bold mt-3">
                            Repetir Password
                        </label>
                        <input
                            type="password"
                            placeholder="Repetir tu Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <input
                        type="submit"
                        value="Crear Usuario"
                        className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                    />
                </form>
                <nav className="mt-10 lg:flex lg:justify-between">
                    <Link
                        to="/"
                        className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
                    >
                        Inicia Sesión
                    </Link>
                    <Link
                        to="/olvide-password"
                        className="block text-center my-5 text-gray-500 transition hover:text-indigo-400"
                    >
                        Recuperar Password
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Registrar;