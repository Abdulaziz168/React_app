import React from "react";
import 'C:/Users/1/Desktop/App/React Folder/second/my_app/src/style.css'

const Sidebar = () => {
    return (
        <React.StrictMode>

            <nav id={"sidebar"} className={"d-block vh-100"}>
                <ul>
                    <li>
                        <div className="home-icon bi bi-house-heart-fill">

                        </div>
                    </li>
                    <li>
                        <div className="about-icon bi bi-basket3">
                            <div className="head">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bi bi-chat-left-heart">

                        </div>
                    </li>
                    <li>
                        <div className="bi bi-messenger w-100 ">
                        </div>
                    </li>
                </ul>
            </nav>


        </React.StrictMode>
    )
}

export default Sidebar