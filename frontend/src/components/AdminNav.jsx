import { Link } from "react-router-dom";

const AdminNav = () => {
    return (
        <nav className="flex gap-3">
            <Link
                to="/admin/perfil"
                className="font-bold text-gray-500 uppercase"
            >Perfil</Link>
            <Link
                to="/admin/cambiar-password"
                className="font-bold text-gray-500 uppercase"
            >Cambiar Password</Link>
        </nav>
    )
}

export default AdminNav;