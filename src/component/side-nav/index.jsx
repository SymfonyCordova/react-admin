import React from 'react'
import { Link, NavLink } from 'react-router-dom'

class SideNav extends React.Component{
    render(){
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <NavLink exact activeClassName="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li className="active">
                            <Link to="/">
                                <i className="fa fa-sitemap"></i> 
                                <span>系统管理</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-users"></i>
                                        <span>用户管理</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-user"></i>
                                        <span>角色管理</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-ban"></i>
                                        <span>权限管理</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-ban"></i>
                                        <span>菜单管理</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-history"></i>
                                        <span>操作日志</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level collapse in">
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Link</a>
                                        </li>

                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/product">
                                <i className="fa fa-sitemap"></i>
                                <span>商品</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/product" activeClassName="active-menu">
                                        <i className="fa fa-users"></i>
                                        <span>商品管理</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/product-category" activeClassName="active-menu">
                                        <i className="fa fa-users"></i>
                                        <span>品类管理</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/order">
                                <i className="fa fa-sitemap"></i>
                                <span>订单</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/order" activeClassName="active-menu">
                                        <i className="fa fa-users"></i>
                                        <span>订单管理</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <Link to="/user">
                                <i className="fa fa-sitemap"></i>
                                <span>用户</span>
                                <span className="fa arrow"></span>
                            </Link>
                            <ul className="nav nav-second-level collapse in">
                                <li>
                                    <NavLink to="/user" activeClassName="active-menu">
                                        <i className="fa fa-users"></i>
                                        <span>用户管理</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideNav