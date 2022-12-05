import React, { useState } from 'react';
import { Table, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { AdventDay } from '../../components/Custom/adventDay';
import path from 'path';
import axios from 'axios';

const Advent = () => {

    const [message, setMessage] = useState(null);

    React.useEffect(() => {
        const baseURL = path.join(process.cwd(), 'api');
        axios.get(path.join(baseURL, 'advent')).then((response) => {
          const data = response.data.results;
           data.unshift(
            {day: '', content: '', title: ''},
            {day: '',content: '', title: ''},
            {day: '',content: '', title: ''})
            setMessage(data);
        });
      }, []);

    const [modalContent, setModalContent] = useState('');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const showAdventDay = (day, content) => {
        const today = new Date().getDate()
        if (day > today) {
            setModalContent(`It's not Dec ${day} yet! No peeksies!!`)
            toggle()
        } else {
            setModalContent(content)
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
                            onClick={() => showAdventDay(message[i].day, message[i].content)}
                        >
                            <AdventDay
                                day={adventItem.day}
                                content={adventItem.content}
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
            <h1>Advent</h1>
            {message?.length > 0 ? 
            <Table bordered responsive>
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
            >
                <ModalHeader
                    toggle={toggle}
                >
                    It&apos;s the most wonderful time of the year!
                </ModalHeader>
                <ModalBody>
                    {modalContent}
                </ModalBody>
                <ModalFooter>
                    <Button className='btn btn-success' onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default Advent;