import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
import Signup from 'components/Signup'
import { IconWidget, NumberWidget } from 'components/Widget';
import {FaStethoscope,FaPersonBooth,FaPlusCircle, FaMinusCircle} from "react-icons/fa";
import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from 'demos/dashboardPage';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdBubbleChart,
  MdInsertChart,
  MdPersonPin,
  MdPieChart,
  MdRateReview,
  MdShare,
  MdShowChart,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardDeck,
  CardGroup,
  CardHeader,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Table
} from 'reactstrap';
import { getColor } from 'utils/colors';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);

export default class HomePage extends React.Component {
  state = {
    
  };
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };

  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="HomePage"
        title="AFS Home"
      >
        <Row>
          <Col lg="12" md="12" sm="12" xs="12">
            <Row>
            <Col key={1} lg={3} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor="primary"
                icon={FaStethoscope}
                title="Doctors"
              />
            </Col>

            <Col key={1} lg={3} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor="primary"
                icon={FaPersonBooth}
                title="Patients"
              />
            </Col>
            <Col key={1} lg={3} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor="primary"
                icon={FaPlusCircle}
                title="Positive Scans"
              />
            </Col>
            <Col key={1} lg={3} md={6} sm={6} xs={12} className="mb-3">
              <IconWidget
                bgColor="primary"
                icon={FaMinusCircle}
                title="Negative Scans"
              />
            </Col>
            </Row>
            </Col>
        </Row>
        <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>History</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Pateint Name</th>
                    <th>Disease Scan</th>
                    <th>Results</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>12/01/2022</td>
                    <td>Mark Otto</td>
                    <td>Parkinsons</td>
                    <td>Positive</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>12/01/2022</td>
                    <td>Amy Thornton</td>
                    <td>Malaria</td>
                    <td>Negative</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>12/01/2022</td>
                    <td>Larry Bird</td>
                    <td>Parkinsons</td>
                    <td>Negative</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
       

       
      </Page>
    );
  }
}
