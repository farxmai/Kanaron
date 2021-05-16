import React from "react";
import { Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { userLogOut } from "../../services/authHandlers";
import "./Header.css";

function Header({ user }) {
  return (
    <header>
      <Navbar bg="dark" expand="md" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faDiceD20} /> Kanaron
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <NavLink className="nav-link" exact to="/">Генератор</NavLink> */}
            <NavLink className="nav-link" to="/races">
              Расы
            </NavLink>
            <NavLink className="nav-link" to="/classes">
              Классы
            </NavLink>
            <NavLink className="nav-link" to="/articles">
              Статьи
            </NavLink>
            <NavLink className="nav-link" to="/tools">
              Инструментарий
            </NavLink>
            <NavLink className="nav-link" to="/about">
              О проекте
            </NavLink>
          </Nav>
          {!user ? (
            <NavLink className="btn btn-dark" to="/login">
              Войти
            </NavLink>
          ) : (
            <DropdownButton
              variant="dark"
              id="dropdown-basic"
              alignRight
              title={user.login}
            >
              <Dropdown.Item as="button">
                <Link to="/dashboard/profile">Профиль</Link>
              </Dropdown.Item>
              <Dropdown.Item as="button">
                <Link to="/dashboard/characters">Ваши персонажи</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button" onClick={userLogOut}>
                Выйти
              </Dropdown.Item>
              {user.permission === "master" && (
                <>
                  <Dropdown.Divider />
                  <Dropdown.Item as="button">
                    <Link to="/dashboard/master">Администрирование</Link>
                  </Dropdown.Item>
                </>
              )}
            </DropdownButton>
          )}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
