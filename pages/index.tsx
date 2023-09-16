import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { ConnectWallet } from '@thirdweb-dev/react';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitize your physical collectibles into NFTs | Digitize.eth</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
        <div
          className='container-fluid'
          style={{
            maxWidth: 1150,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <a
            className='navbar-brand'
            style={{
              fontWeight: 'bold',
            }}
            href='#'
          >
            Digitize.eth
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' style={{ fontWeight: 'bold' }} href='#'>
                  Start Trading
                </a>
              </li>
            </ul>
            <form className='d-flex'>
              <ConnectWallet />
            </form>
          </div>
        </div>
      </nav>
      <div
        className={`${styles.center} container`}
        style={{
          marginTop: 100,
        }}
      >
        <div
          className='row'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='col-sm'>
            <h1
              style={{
                fontSize: 70,
                fontWeight: 'bold',
              }}
            >
              Digitize your physical collectibles into NFTs
            </h1>
          </div>
          <div className='col-sm'>
            <img
              className='landingImage'
              style={{
                width: '100%',
                maxWidth: 400,
                padding: 30,
              }}
              src={'/image1.png'}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: 100,
          }}
        >
          <div className='row'>
            <div
              style={{
                border: '2px solid white',
                borderRadius: 6,
                padding: 20,
                margin: 30,
              }}
              className='col-sm'
            >
              <div className='row'>
                <img
                  width={150}
                  src='https://i.psacard.com/psacard/images/resources/gradingstandards/1952-topps-mickey-mantel-psa-pr-1.png'
                />
              </div>
              <div className='row'>
                <div className='col-sm-9'>
                  <h3>Card content</h3>
                  <p>More card content</p>
                </div>
                <div className='col-sm-3'>Info</div>
              </div>
            </div>
            <div
              style={{
                border: '2px solid white',
                borderRadius: 6,
                padding: 20,
                margin: 30,
              }}
              className='col-sm'
            >
              <div className='row'>
                <img
                  width={150}
                  src='https://i.psacard.com/psacard/images/resources/gradingstandards/grdstd-qualifier-mkr-big.png'
                />
              </div>
              <div className='row'>
                <div className='col-sm-9'>
                  <h3>Card content</h3>
                  <p>More card content</p>
                </div>
                <div className='col-sm-3'>Info</div>
              </div>
            </div>
            <div
              style={{
                border: '2px solid white',
                borderRadius: 6,
                padding: 20,
                margin: 30,
              }}
              className='col-sm'
            >
              <div className='row'>
                <img
                  width={150}
                  src='https://i.psacard.com/psacard/images/resources/gradingstandards/grdstd-qualifier-oc-big.png'
                />
              </div>
              <div className='row'>
                <div className='col-sm-9'>
                  <h3>Card content</h3>
                  <p>More card content</p>
                </div>
                <div className='col-sm-3'>Info</div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div
              style={{
                border: '2px solid white',
                borderRadius: 6,
                padding: 20,
                margin: 30,
              }}
              className='col-sm'
            >
              <div className='row'>
                <img
                  width={150}
                  src='https://i.psacard.com/psacard/images/resources/gradingstandards/grdstd-qualifier-pd-big.png'
                />
              </div>
              <div className='row'>
                <div className='col-sm-9'>
                  <h3>Card content</h3>
                  <p>More card content</p>
                </div>
                <div className='col-sm-3'>Info</div>
              </div>
            </div>
            <div
              style={{
                border: '2px solid white',
                borderRadius: 6,
                padding: 20,
                margin: 30,
              }}
              className='col-sm'
            >
              <div className='row'>
                <img
                  width={150}
                  src='https://i.psacard.com/psacard/images/resources/gradingstandards/grdstd-qualifier-of-big.png'
                />
              </div>
              <div className='row'>
                <div className='col-sm-9'>
                  <h3>Card content</h3>
                  <p>More card content</p>
                </div>
                <div className='col-sm-3'>Info</div>
              </div>
            </div>
            <div
              style={{
                border: '2px solid white',
                borderRadius: 6,
                padding: 20,
                margin: 30,
              }}
              className='col-sm'
            >
              <div className='row'>
                <img
                  width={150}
                  src='https://i.psacard.com/psacard/images/resources/gradingstandards/1952-topps-mickey-mantel-psa-pr-1.png'
                />
              </div>
              <div className='row'>
                <div className='col-sm-9'>
                  <h3>Card content</h3>
                  <p>More card content</p>
                </div>
                <div className='col-sm-3'>Info</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
