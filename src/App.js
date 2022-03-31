import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import Campaign from './components/Campaign'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App () {
  const [campaigns, setCampaigns] = useState([]);
  const [sortedCampaigns, setSortedCampaigns] = useState([]);
  const [sortingState, setSortingState] = useState('donation-goal');

  const getCampaignsData = async () => {
    try {
      // The provided API (on server side) should accepting request from localhost, so use Chrome extension called Allow CORS,
      // or use 'https://cors-anywhere.herokuapp.com/' at the start of endpoint (please request access first on https://cors-anywhere.herokuapp.com)
      // The CORS error can cause a warning like this while testing the app: 
      // [UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error: Network Error".]

      // const res = await axios.get('https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json');
      const res = await axios.get('https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json');
      if (res.data.data.length > 0) {
        console.log(res)
        setCampaigns(res.data.data);
        setSortedCampaigns(res.data.data);
      }
    } catch (err) {
       throw (err);
    }
  };
   
  useEffect(() => {
    getCampaignsData();
  }, []);

  const sortByDonationGoal = () => {
    let duplicateArr = [...campaigns];
    let sortedDonation = duplicateArr.sort((a, b) => {
      return a.donation_target - b.donation_target;
    })
    setSortedCampaigns(sortedDonation);
  } 

  const sortByDaysLeft = () => {
    let duplicateArr = [...campaigns];
    let sortedDays = duplicateArr.sort((a, b) => {
      return a.days_remaining - b.days_remaining;
    })
    setSortedCampaigns(sortedDays);
  }

  const toggleSorting = () => {
    if (sortingState === 'donation-goal'){
      sortByDaysLeft()
      setSortingState('days-left');
    } else if (sortingState === 'days-left') {
      sortByDonationGoal()
      setSortingState('donation-goal');
    }
  }
 
  const renderCampaign = () => {
    if (sortedCampaigns.length > 0) {
      return sortedCampaigns.map((el, index) => {
        return (
          <Campaign
            key={index}
            campaign={el}
          />
        )
      });
    } else {
      return <Col>No Data</Col>
    }
  }

  return (
    <div className="app">
      <Container>
        <header className="header">
          <Row>
            <Col
              md="8"
              sm="12"
              className="text-left"
            >
              <img src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png" alt="Kitabisa Logo"/>
              <h2 className="d-inline-block align-middle">Kitabisa</h2>
            </Col>
            <Col
              md="4"
              sm="12"
              className="text-right"
            >
              <button
                className="btn color-light-blue mt-3"
                onClick={() => toggleSorting()}
                data-testid="button-sort"
              >
                {sortingState === 'donation-goal' ? 'Sorting by Days Left' : 'Sorting by Donation Goal'}
              </button> 
            </Col>
          </Row>
        </header>
        <main>
          <Row>
            {renderCampaign()}
          </Row>
        </main>
      </Container>
    </div>
  );
}

export default App;
