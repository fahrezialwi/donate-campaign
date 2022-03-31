import React from 'react';
import { Row, Col } from 'reactstrap';

function Campaign ({campaign}) {
  return (
    <Col
      md="4"
      sm="6"
      className="mb-4"
      data-testid="campaign"
    >
      <Row>
        <Col className="campaign-image"> 
          <img src={campaign.image} alt={campaign.title}/>
        </Col>
      </Row>
      
      <Row>
        <Col className="mt-3">
          <h5 className="campaign-title">{campaign.title}</h5>
        </Col>
      </Row>

      <Row>
        <Col className="my-2">
          <div className="progress-donation">
            <div
              className={ campaign.donation_percentage >= 1 ? 'progress-pink' : 'progress-grey'}
              style={{ width: campaign.donation_percentage >= 1 ? '100%' : campaign.donation_percentage * 100 + '%'}} 
            ></div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-left">
          <div>
            Terkumpul
          </div>
          <div>
            {campaign.donation_received.toLocaleString("id-ID", {style:"currency", currency:"IDR", minimumFractionDigits: 0})}
          </div>
        </Col>
        <Col className="text-right">
          <div>
            Sisa Hari
          </div>
          <div>
            {campaign.days_remaining}
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default Campaign;