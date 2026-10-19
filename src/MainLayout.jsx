import { NavLink, Outlet } from "react-router-dom"
import cls from './MainLayout.module.scss'


const MainLayout = () => {
  return (
    <div className={cls.app}>
        <header className={`${cls.header} ${cls.app}`}>
            <NavLink to='/'>Главная</NavLink>
            <NavLink to='/create'>Каталог</NavLink>
        </header>

        <main className={cls.app}>
            <Outlet />
        </main>

        <footer className={cls.app}>2026 Geeks Shop</footer>
    </div>
  )
}

export default MainLayout