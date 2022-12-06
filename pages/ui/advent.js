import React, { useState } from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { AdventDay } from '../../components/Custom/adventDay';
import path from 'path';
import axios from 'axios';

const Advent = () => {

    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState();
    const [modalContent, setModalContent] = useState();
    const [modalTitle, setModalTitle] = useState();
    const [modalImage, setModalImage] = useState();
    const [modalDay, setModalDay] = useState();

    React.useEffect(() => {
        const baseURL = path.join(process.cwd(), 'api');
        axios.get(path.join(baseURL, 'advent')).then((response) => {
            const data = response.data.results;
            data.unshift(
                {day: '', content: '', title: ''},
                {day: '',content: '', title: ''},
                {day: '',content: '', title: ''}
            );
            setMessage(data);
        });
    }, []);
    
    const toggle = () => setModal(!modal);

    const closeModal = () => {
        setModalContent(null);
        setModalTitle(null);
        setModalImage(null);
        setModalDay(null);
        toggle();
    }

    const showAdventDay = (day, content, image, title) => {
        // const today = new Date().getDate()
        const today = 30
        if (day > today) {
            setModalContent(`It's not Dec ${day} yet! No peeksies!!`)
            toggle()
        } else {
            setModalContent(content)
            setModalImage(image)
            setModalTitle(title)
            setModalDay(day)
            toggle()
        }  
    }

    const getRowContent = (startIndex, endIndex) => {
        let contentArray = []
        for (let i=startIndex; i<endIndex; i++){
            const adventItem = message[i];
            contentArray.push(
                <td>
                    {message[i].content && 
                        <button 
                            className={i % 2 == 0 ? 'btn btn-success' : 'btn btn-danger'}
                            style={{width: '100%', height: '100%'}}
                            onClick={() => showAdventDay(message[i].day, message[i].content, message[i].image, message[i].title)}
                        >
                            <AdventDay
                                day={adventItem.day}
                            />
                        </button>
                    }
                </td>
            )
        }
        return contentArray;
    }

    return (
        <>
            <h1>Christmas Activities Advent Calendar</h1>
            {message?.length > 0 ? 
            <Table bordered responsive style={{height: "75vh", tableLayout:'fixed'}}>
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {getRowContent(0,7)}
                    </tr>
                    <tr>
                        {getRowContent(7,14)}
                    </tr>
                    <tr>
                        {getRowContent(14,21)}
                    </tr>
                    <tr>
                        {getRowContent(21,28)}
                    </tr>
                </tbody>
            </Table>:
            <div class="d-flex justify-content-center">
                <div className="spinner-border text-center" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
            }
            
            <Modal isOpen={modal}
                toggle={toggle}
                size='lg'
            >
                <ModalHeader
                    toggle={closeModal}
                >
                    Advent activity for December {modalDay}
                </ModalHeader>
                <ModalBody>
                    <h1>{modalTitle}</h1>
                    <div>{modalContent}</div>
                    <br/>
                    <img src={modalImage} className="w-50 rounded-2" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-success' onClick={closeModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Advent;