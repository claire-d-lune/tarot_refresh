import React from "react";

const Navbar = () => {

    return (
        <div className="navbar bg-purple-400 outline-2 outline-black">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Tera's Card Library</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://media.licdn.com/dms/image/D5635AQFn_IRPLtCR8Q/profile-framedphoto-shrink_200_200/0/1682286770153?e=1683057600&v=beta&t=XbfnBD9d8DaGXHfiNyGpaATVoYIVKJ5gkpld5OWBAzw" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar