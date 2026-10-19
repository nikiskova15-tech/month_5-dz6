import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div style={{ width: "900px", margin: "0 auto" }}>
            <header
                style={{
                    width: "900px",
                    margin: "0 auto",
                    display: "flex",
                    gap: "24px",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#464646",
                    height: "100px",
                }}
            >
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "#000",
                        textDecoration: "none",
                    })}
                >
                    Главная
                </NavLink>

                <NavLink
                    to="/create"
                    style={({ isActive }) => ({
                        color: isActive ? "red" : "#000",
                        textDecoration: "none",
                    })}
                >
                    Товары
                </NavLink>
            </header>

            <main style={{ width: "900px", margin: "0 auto" }}>
                <Outlet />
            </main>

            <footer style={{ width: "900px", margin: "0 auto" }}>
            </footer>
        </div>
    );
};

export default MainLayout;