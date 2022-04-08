import React, {Component} from 'react';

import Sidebar from "../../components/TopNav/TopNav";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/backdrop/Backdrop";
import DrawerCloseButton from "../../components/SideDrawer/DrawerCloseButton";

import "./Home.css";
import logo from "../../assets/myLogo.png";

class Home extends Component {
        state = {
                sideDrawerOpen: false
        };

        drawerToggleClickHandler = () => {
                this.setState((prevState) => {
                        return {sideDrawerOpen: !prevState.sideDrawerOpen};
                });
        };

        backdropClickHandler = () => {
                this.setState({sideDrawerOpen: false});
        };

        render() {
                let backdrop;

                if (this.state.sideDrawerOpen) {
                        backdrop = <Backdrop click={this.backdropClickHandler}/>;
                }
                return (
                    <div style={{height: '100%'}}>
                            <main>
                                    {this.props.children}
                            </main>
                            <Sidebar drawerClickHandler={this.drawerToggleClickHandler}/>
                            <SideDrawer show={this.state.sideDrawerOpen}/>
                            <DrawerCloseButton show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                            {backdrop}
                            <div className={'home_title'} style={{marginTop: '80px'}}>
                                    HOME
                                    <div className={"home_paragraph"}>
                                            Howdy! I am Kile and welcome to my website. This was a project I decided to take on for a multitude of reasons. One was
                                            to explore HTML and Javascript as well as the frameworks available for website development. Another reason was to
                                            gain experience with a frontend development, as prior to this project I have only worked backend. Lastly, I enjoy
                                            programming and am always looking to learn something new with it. You can learn more about be in the following tabs
                                            at the top of the screen or navigate via the sidebar on the left hand side.
                                    </div>
                            </div>
                            <img className={'logo'} src={logo} alt={"Logo"}/>
                    </div>
                );
        }
}

export default Home;