import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { readToken, removeToken } from "@/lib/tokenfunc";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const BookAppointment = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [email, setEmail] = useState("");
  const [navHovered, setNavHovered] = useState(false);
  const isLoggedIn = username !== null;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    let tokenData = readToken();
    if (tokenData) {
      setUsername(tokenData.name);
      setEmail(tokenData.email);
    }
  }, []);

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    const response = await fetch(`/api/getTimeSlots?date=${date.toISOString()}`);
    const data = await response.json();
    setTimeSlots(data.timeSlots);
  };

  const handleBooking = async () => {
    if (!selectedTimeSlot) {
      setConfirmationMessage("Please select a time slot.");
      return;
    }

    try {
      const response = await fetch('/api/bookAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: selectedDate, timeSlot: selectedTimeSlot, email }),
      });

      const data = await response.json();
      if (data.success) {
        setConfirmationMessage(`Your appointment is confirmed for ${selectedDate.toDateString()} at ${selectedTimeSlot} `);
      } else {
        setConfirmationMessage("The selected time slot has already been taken! Please choose another time.");
      }
    } catch (error) {
      setConfirmationMessage("Error sending confirmation. Please try again.");
    }
  };

  useEffect(() => {
    let tokenData = readToken();
    if (tokenData) {
      setUsername(tokenData.name);
    }
  }, []);

  const handleLogout = () => {
    removeToken();
    router.push("/");
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleNavHover = () => {
    setNavHovered(true);
  };

  const handleNavLeave = () => {
    setNavHovered(false);
  };
  return (
    <>
       {/* Navbar */}
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${navHovered ? "bg-hover" : "bg-dark"}`}
        style={{
          transition: "background-color 0.3s",
          backgroundColor: navHovered ? "#333" : "transparent", // Changed the hover color to dark grey
        }}
        onMouseEnter={handleNavHover}
        onMouseLeave={handleNavLeave}
      >
        <div className="container">
          <Link href="/dashboard" legacyBehavior>
            <a className="navbar-brand d-flex align-items-center">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="d-inline-block align-top rounded-circle"
              />
              <span className="ms-2 fw-bold fs-3 text-primary">Astrology</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>

                )}
              </li>
              <li className="nav-item">
                <Link href="/bookAppointment" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Book Appointment </a>
                </Link>
              </li>
         

              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">About Us</a>
                </Link>
              </li>





              <li className="nav-item">
                <Link href="/blog" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Blogs</a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Contact Us</a>
                </Link>
              </li>


              <li className="nav-item">
                <Link href="/yourCart" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Cart</a>
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle fw-semibold text-light ${dropdownOpen ? "show" : ""
                        }`}
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                      onClick={toggleDropdown}
                    >
                      {username}
                    </a>
                    <ul
                      className={`dropdown-menu dropdown-menu-end border-0 shadow ${dropdownOpen ? "show" : ""
                        }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href="/edit-profile" legacyBehavior>
                          <a className="dropdown-item">Edit Profile</a>
                        </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            {/* Search bar */}
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>


      <br></br>
      <br></br>
      <br></br>

      <section className="booking-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-dark mb-4">Select a Date & Time</h2>
          <div className="calendar-section d-flex justify-content-around align-items-start">
            <div>
              <DatePicker selected={selectedDate} onChange={handleDateChange} inline minDate={new Date()} />
              <p className="time-zone">Time zone: Eastern time - US & Canada</p>
            </div>

            {selectedDate && (
              <div className="time-slots-section">
                <h5 className="fw-bold mb-4">Available Time Slots</h5>
                <ul className="list-group">
                  {timeSlots.length > 0 ? (
                    timeSlots.map((slot, index) => (
                      <li key={index} className="list-group-item time-slot-item">
                        <input
                          type="radio"
                          id={`timeslot-${index}`}
                          name="timeslot"
                          value={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                        />
                        <label htmlFor={`timeslot-${index}`}>{slot}</label>
                      </li>
                    ))
                  ) : (
                    <li className="list-group-item">No time slots available for this date.</li>
                  )}
                </ul>
                {selectedTimeSlot && (
                  <button className="btn btn-primary mt-4" onClick={handleBooking}>
                    Confirm
                  </button>
                )}
              </div>
            )}
          </div>

          {confirmationMessage && (
            <div className="alert alert-success mt-4">
              {confirmationMessage}
            </div>
          )}
        </div>
      </section>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

          

      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </footer>

      <style jsx>{`
        .booking-section {
          background-color: #f9f9f9;
          padding: 1rem;
          border-radius: 10px;
        }

        .calendar-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .time-slots-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-left: 1px solid lightblue;
          padding-left: 5rem;
        }

        .list-group-item {
          padding: 1rem;
          border: 1px solid lightblue;
          border-radius: 10px;
          margin-bottom: 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-link i {
  font-size: 1.2rem;  /* Adjust the size */
  color: white;     /* Adjust the color */

  margin-right: 0.1rem;  /* Add some spacing if necessary */
}
        .time-slot-item:hover {
          background-color: lightblue;
          border-color: black;
        }

        .btn-primary {
          background-color: #1890ff;
          border-color: #1890ff;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        }

        .time-zone {
          margin-top: 20px;
          color: #888;
          font-size: 0.875rem;
        }
      `}</style>
    </>
  );
};


export default BookAppointment;
