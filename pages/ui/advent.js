import { Table, Button, Modal, ModalBody } from 'reactstrap'
import { AdventDay } from '../../components/Custom/adventDay';
import { useState } from 'react';

const ADVENT_DATA = [
    {
        day: '',
        content: ''
    },{
        day: '',
        content: ''
    },{
        day: '',
        content: ''
    },{
        day: '1',
        content: '1st day of advent'
    },{
        day: '2',
        content: '2nd day of advent'
    },{
        day: '3',
        content: '3rd day of advent'
    },{
        day: '4',
        content: '4th day of advent'
    },{
        day: '5',
        content: '5th day of advent'
    },{
        day: '6',
        content: '6th day of advent'
    },{
        day: '7',
        content: '7th day of advent'
    },{
        day: '8',
        content: '8th day of advent'
    },{
        day: '9',
        content: '9th day of advent'
    },{
        day: '10',
        content: '10th day of advent'
    },{
        day: '11',
        content: '11th day of advent'
    },{
        day: '12',
        content: '12th day of advent'
    },{
        day: '13',
        content: '13th day of advent'
    },{
        day: '14',
        content: '14th day of advent'
    },{
        day: '15',
        content: '15th day of advent'
    },{
        day: '16',
        content: '16th day of advent'
    },{
        day: '17',
        content: '17th day of advent'
    },{
        day: '18',
        content: '18th day of advent'
    },{
        day: '19',
        content: '19th day of advent'
    },{
        day: '20',
        content: '20th day of advent'
    },{
        day: '21',
        content: '21st day of advent'
    },{
        day: '22',
        content: '22nd day of advent'
    },{
        day: '23',
        content: '23rd day of advent'
    },{
        day: '24',
        content: '24th day of advent'
    },{
        day: '25',
        content: '25th day of advent'
    }
]

const Advent = () => {

    const [modalContent, setModalContent] = useState('');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const showAdventDay = (day, content) => {
        const today = new Date().getDate()
        console.log(today)
        if (day > today) {
            setModalContent('No peeksies!!')
            toggle()
        }{
            setModalContent(content)
            toggle()
        }  
    }

    const getRowContent = (startIndex, endIndex) => {
        let contentArray = []
        for (let i=startIndex; i<endIndex; i++){
            const adventItem = ADVENT_DATA[i];
            contentArray.push(
                <td>
                    {ADVENT_DATA[i].content && 
                        <button 
                            className={i % 2 == 0 ? 'btn btn-success' : 'btn btn-danger'}
                            onClick={() => showAdventDay(ADVENT_DATA[i].day, ADVENT_DATA[i].content)}
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
            </Table>
            <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 500 }}>
                <ModalBody>
                    {modalContent}
                </ModalBody>
            </Modal>
        </>
    )
}

export default Advent;