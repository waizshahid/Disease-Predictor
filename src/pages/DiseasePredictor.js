import { AnnouncementCard, TodosCard } from 'components/Card';
import HorizontalAvatarList from 'components/HorizontalAvatarList';
import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import ProductMedia from 'components/ProductMedia';
import SupportTicket from 'components/SupportTicket';
import UserProgressTable from 'components/UserProgressTable';
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
import axios from 'axios'
import { Bar, Line } from 'react-chartjs-2';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Badge,
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
  Table,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import {Button,TextField, FormControlLabel, Grid, MenuItem, Select,FormControl, InputLabel} from '@material-ui/core'

const today = new Date();

export default class DiseasePredictor extends React.Component {
  state = {
    imageUploaded: true,
    scanImage: '',
    firstName : '',
    lastName : '',
    cityName: '',
    insuranceID: '',
    dob : '',
    model : '',
  };
  componentDidMount() {

  }


  ScanImage = (event) => {
    event.preventDefault();
    console.log(this.state.imageUploaded,this.state.scanImage,this.state.firstName,this.state.lastName,this.state.insuranceID,this.state.dob,this.state.model)
    let form_data = new FormData();
    form_data.append('photo', this.state.scanImage);
    let url = 'http://localhost:5000/prediction';
    axios.post(url + '?model='+this.state.model+'&fname='+this.state.firstName+'&lname='+this.state.lastName+'&ins_ID='+this.state.insuranceID+'&city='+this.state.cityName+'&dob='+this.state.dob, form_data)
     .then(function (response) {
       console.log(response);
     })
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value})
  }

  handleImageChange = (e) => {
    this.setState({
      scanImage: e.target.files[0],
      imageUploaded : false,
    })
    console.log(e.target.files[0].name)
  };



  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    return (
      <Page
        className="DiseasePredictor"
        title="Disease Predictor"
      >
      <Col xl={6} lg={12} md={12}>
      <form onSubmit={this.ScanImage} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={this.state.firstName}
                onChange={this.handleChange('firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={this.state.lastName}
                onChange={this.handleChange('lastName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                name="insuranceID"
                variant="outlined"
                required
                fullWidth
                id="insuranceID"
                label="Insurance ID"
                autoFocus
                value={this.state.insuranceID}
                onChange={this.handleChange('insuranceID')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City Name"
                name="city"
                value={this.state.city}
                onChange={this.handleChange('city')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="date"
                fullWidth
                required
                label="Date of birth"
                type="date"
                value={this.state.dob}
                onChange={this.handleChange('dob')}
                InputLabelProps={{
                  shrink: true,
                }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Disease Model
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                labelWidth='0'
                value={this.state.model}
                onChange={this.handleChange('model')}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="malaria">Malaria</MenuItem>
                <MenuItem value="spiral">Spiral</MenuItem>
                <MenuItem value="wave">Wave</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
                <input
                style={{display: 'none'}}
                  accept="image/*"
                  id="outlined-button-file"
                  multiple
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={this.handleImageChange}
                />
                <label htmlFor="outlined-button-file">
                  <Button variant="outlined" component="span">
                    Upload
                  </Button>
                </label>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Button
                  disabled={this.state.imageUploaded}
                  type="submit"
                  value="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Scan
                </Button>
                </Grid>
               </Grid>
               </form>
        </Col>
       

       
      </Page>
    );
  }
}
