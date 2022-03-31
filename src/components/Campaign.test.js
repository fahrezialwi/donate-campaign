import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Campaign from './Campaign';

const data = {
  campaigner: "Kitabisa.com",
  campaigner_badge: "https://assets.kitabisa.com/images/icon__verified-user.svg",
  campaigner_is_verified: true,
  campaigner_type: "PERSONAL",
  category_name: "Bencana Alam",
  custom_fb_pixel: "",
  days_remaining: 0,
  donation_percentage: 0.357227,
  donation_received: 178613497,
  donation_target: 500000000,
  expired: 2147483647,
  id: 94597,
  image: "https://img.staging.kitabisa.cc/size/664x357/0f9a7205-79ef-49c9-a95a-49347fbd00a6.jpg",
  is_featured: 0,
  is_forever_running: true,
  is_open_goal: false,
  order: 1,
  parent_project_id: 0,
  request_userdata: false,
  short_url: "bisabangkit",
  title: "#BisaBangkit Bersama Kitabisa",
}

test('check wording terkumpul', () => {
  render(<Campaign campaign={data}/>);
  const text = screen.getByText(/Terkumpul/);
  expect(text).toBeInTheDocument();
});

test('check wording sisa hari', () => {
  render(<Campaign campaign={data}/>);
  const text = screen.getByText(/Sisa Hari/);
  expect(text).toBeInTheDocument();
});

test('check wording currency', () => {
  render(<Campaign campaign={data}/>);
  const text = screen.getByText(/Rp /);
  expect(text).toBeInTheDocument();
});