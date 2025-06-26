// src/front/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		sessionStorage.removeItem("token");
		navigate("/login");
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">GameStore</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/signup">Registro</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/login">Login</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/private">Privado</Link>
						</li>
						<li className="nav-item">
							<button className="btn btn-outline-light ms-3" onClick={handleLogout}>
								Cerrar sesión
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

