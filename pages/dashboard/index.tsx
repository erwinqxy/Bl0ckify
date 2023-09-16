import React from 'react'
import { ConnectWallet } from '@thirdweb-dev/react';
import { useAddress } from "@thirdweb-dev/react";
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function index() {
	const address = useAddress();
	return (
		<>
			<Head>
				<title>Dashboard | Digitize.eth</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />

			<div className='container' style={{
				marginTop: 100
			}}>
				<h1 style={{
					fontSize: 30,
					fontWeight: "bold",
					marginLeft: 20
				}}>Welcome Back</h1>
				<div className='row' style={{
					borderBottom: "1px solid grey",
					padding: 20
				}}>
					<p>{address ? <div style={{
						backgroundColor: "#111111",
						padding: 20,
						borderRadius: 12
					}}>
						{address.substring(0, 6).concat('...')}{address.substring(address.length - 5, address.length - 1)}
					</div> : "Not signed in"}</p>
				</div>
				<div className='row' style={{
					padding: 20
				}}>
					<div style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center"
					}}><h4>Your Items</h4> <button style={{
						marginLeft: 20
					}} className='btn btn-outline-primary'>Mint New</button></div>
				</div>
			</div>
		</>
	)
}
