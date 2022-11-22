import { useState } from 'react';
import Sidebar from "./layout-components/Sidebar";
import Header from './layout-components/Header';
import { Container } from 'reactstrap';

export const FullLayout = ({children}) => {
    const [open, setOpen] = useState(false);
    const showMobilemenu = () => {
      setOpen(!open);
    };

    return (
        <main>
            <div className="pageWrapper d-md-block d-lg-flex">
                {/******** Sidebar **********/}
                <aside
                className={`sidebarArea shadow bg-white ${
                    !open ? "" : "showSidebar"
                }`}
                >
                <Sidebar showMobilemenu={() => showMobilemenu()} />
                </aside>
                {/********Content Area**********/}

                <div className="contentArea">
                {/********header**********/}
                <Header showMobmenu={() => showMobilemenu()} />

                {/********Middle Content**********/}
                <Container className="p-4 wrapper" fluid>
                    <div>{children}</div>
                </Container>
                </div>
            </div>
        </main>
    )
}