import React from 'react'
import { Link } from 'react-router-dom'

class SideNav extends React.Component{
    render(){
        return (
            <div className="navbar-default navbar-side">
                <div className="sidebar-collapse">
                    <ul className="nav">
                        <li>
                            <Link className="active-menu" to="/">
                                <i className="fa fa-dashboard"></i>
                                <span>首页</span>
                            </Link>
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
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideNav