import React, {Component} from "react";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Sidebar from "./components/sidebar";
class App extends React.Component {
    render() {
        return (
            <React.StrictMode>

                <div className={'container w-100 h-50 border border-4 rounded-start shadow p-3 mb-5 bg-body rounded'}>
                    <Navbar/>
                    <h1 className="title text-center my-5 text-light  w-50 mx-auto" >

                        Hello From React
                    </h1>
                    <Sidebar/>
                    <About />
                    < Home/>
                    < Footer/>
                </div>
            </React.StrictMode>

        )
    }
}


export default App;
