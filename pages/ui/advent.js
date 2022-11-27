import { Table } from 'reactstrap'
import { AdventDay } from '../../components/Custom/adventDay';

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
    },{
        day: '26',
        content: '26th day of advent'
    },{
        day: '27',
        content: '27th day of advent'
    },{
        day: '28',
        content: '28th day of advent'
    },{
        day: '29',
        content: '29th day of advent'
    },{
        day: '30',
        content: '30th day of advent'
    },{
        day: '31',
        content: '31st day of advent'
    }
]
const Advent = () => {

    const getRowContent = (startIndex, endIndex) => {
        let contentArray = []
        for (let i=startIndex; i<endIndex; i++){
            const adventItem = ADVENT_DATA[i];
            contentArray.push(
                <td>
                    <AdventDay
                        day={adventItem.day}
                        content={adventItem.content}
                    />
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
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
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
                    <tr>
                        {getRowContent(28,35)}
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Advent;