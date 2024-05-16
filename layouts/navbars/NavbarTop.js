'use client'
// import node module libraries
import React, { useState } from 'react';
import { Menu, Map, Navigation } from 'react-feather';
import Link from 'next/link';
import {
	Nav,
	Navbar,
	Modal
} from 'react-bootstrap';
import { Geolocation } from 'sub-components';

// import sub components
import QuickMenu from 'layouts/QuickMenu';

const NavbarTop = (props) => {
	// State to manage modal visibility
	const [showModal, setShowModal] = useState(false);
	// Function to toggle modal visibility
	const toggleModal = () => setShowModal(!showModal);
	return (
		<Navbar expanded="lg" className="navbar-classic navbar navbar-expand-lg">
			<div className='d-flex justify-content-between w-100'>
				<div className="d-flex align-items-center">
					<Link
						href="#"
						id="nav-toggle"
						className="nav-icon me-2 icon-xs"
						onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}>
						<Menu size="18px" />
					</Link>
					<div className="ms-lg-3 d-none d-md-none d-lg-block">
						<Link
							href="#"
							id="nav-toggle"
							alt="Map"
							className="nav-icon me-2 icon-xs"
							onClick={toggleModal}>
							<Map size="32px" />
						</Link>
					</div>
				</div>

				{/* Quick Menu */}
				<Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
					<QuickMenu />
				</Nav>
			</div>
			{/* Geolocation modal */}
			<Modal show={showModal} onHide={toggleModal} centered size="xl">
				<Modal.Header closeButton>
					<Modal.Title>Geolocation</Modal.Title>
					<div className="ms-lg-3 d-none d-md-none d-lg-block">
						<Link
							href="/pages/maps"
							id="nav-toggle"
							alt="Map"
							className="nav-icon me-2 icon-xs"
							onClick={toggleModal}>
							<Navigation size="32px" />
						</Link>
					</div>
				</Modal.Header>
				<Modal.Body>
					<Geolocation />
				</Modal.Body>
			</Modal>

			{/* Custom CSS for larger modal */}
			<style jsx global>{`
        .modal-xl {
          max-width: 80%; /* Adjust the width percentage as needed */
        }
      `}</style>
		</Navbar>
	);
};

export default NavbarTop;
