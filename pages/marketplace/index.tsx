import { useContract, useDirectListings } from "@thirdweb-dev/react";
import {
  MUMBAI_DIGITIZE_ETH_ADDRESS,
  MUMBAI_MARKETPLACE_ADDRESS,
} from "../../constant/addresses";
import { PackNFTCard } from "../../components/PackNFT";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Loading from "@/components/Loading";
import { GetServerSideProps } from "next";
import prisma from "@/lib/prisma";
import { Trade } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const trades = await prisma.trade.findMany();

  return {
    props: {
      trades: trades || [],
    },
  };
};

export default function MarketPlace({ trades }: { trades: Trade[] }) {
  const { contract: marketplace } = useContract(
    MUMBAI_MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: directListings } = useDirectListings(marketplace, {
    tokenContract: MUMBAI_DIGITIZE_ETH_ADDRESS,
  });

  return (
    <>
      <Head>
        <title> Marketplace | Bl0ckify</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <Navbar />
      <div
        className='container'
        style={{
          marginTop: 100,
        }}
      >
        <h4>Marketplace</h4>
        <div className='row mt-2'>
          {!!directListings ? (
            directListings
              ?.filter((listing) => listing.status === 4)
              ?.map((listing, index) => (
                <div className='card' key={index}>
                  <PackNFTCard
                    contractAddress={listing.assetContractAddress}
                    tokenId={listing.tokenId}
                    disallowTradeAndBuy={false}
                    ownerAddress={listing.creatorAddress}
                    status={listing.status.toString()}
                    cardsTraded={new Set(trades.map((trade) => trade.tokenId))}
                  />
                </div>
              ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
