import React, { useState, useEffect } from "react";
import { useContract, useDirectListings } from "@thirdweb-dev/react";
import MintButton from "@/components/MintButton";
import {
  MUMBAI_DIGITIZE_ETH_ADDRESS,
  MUMBAI_MARKETPLACE_ADDRESS,
} from "@/constant/addresses";
import { PackNFTCard } from "@/components/PackNFT";
import { useAddress } from "@thirdweb-dev/react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useLocalStorage } from "usehooks-ts";
import { User } from "@prisma/client";
import { USER_LOCAL_STORAGE_KEY } from "@/config";

export default function index() {
  return (
    <div>
      <Head>
        <title>Admin | Digitize.eth</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <div
        className="container"
        style={{
          marginTop: 100,
        }}
      >
        <h1
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 20,
          }}
        >
          Admin View
        </h1>

        <div
          className="row"
          style={{
            padding: 20,
          }}
        >
          <div className="row actionRow">
            <div className="col-sm">order #</div>
            <div className="col-sm">Details</div>
            <div className="col-sm">
              <button className="btn btn-primary">Approve</button>
            </div>
            <div className="col-sm">
              <button className="btn btn-danger">Reject</button>
            </div>
          </div>

          <div className="row actionRow">
            <div className="col-sm">order #</div>
            <div className="col-sm">Details</div>
            <div className="col-sm">
              <button className="btn btn-primary">Approve</button>
            </div>
            <div className="col-sm">
              <button className="btn btn-danger">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
