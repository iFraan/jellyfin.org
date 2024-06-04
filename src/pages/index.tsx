import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import HomepageFeatures from '../components/home/HomepageFeatures';
import ClientSection from '../components/home/ClientSection';
import CallToAction from '../components/home/CallToAction';
import FreedomSection from '../components/home/FreedomSection';
import Hero from '../components/common/Hero';
import InActionSection from '../components/home/InActionSection';
import Logo from '@theme/Logo';

import styles from './index.module.scss';
import LogoWhiteNoText from '../../static/images/logo-white-notext.svg';
import ArrowDownIcon from '../../static/images/icons/arrow-down.svg';
import HomeLayout from '../components/layout/HomeLayout';

const links = [
  { href: '/blog', name: 'Blog' },
  { href: '/docs', name: 'Documentation' },
  { href: '/', name: 'Community' }
];

export default function Home() {
  return (
    <Layout
      title={`The Free Software Media System`}
      description='The volunteer-built media solution that puts you in control of your media. Stream to any device from your own server, with no strings attached.'
    >
      <HomeLayout>
        <div className={styles['hero-content-wrap']}>
          <div className={styles['hero-content']}>
            <LogoWhiteNoText style={{ width: '6em', height: '6em' }} />
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '3.5em' }}>Your own media universe.</div>
            <button
              style={{
                backgroundColor: 'purple',
                padding: '0.5em',
                paddingLeft: '1.5em',
                paddingRight: '1.5em',
                borderRadius: '2em',
                border: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em'
              }}
            >
              <ArrowDownIcon />
              <div style={{ fontFamily: 'Figtree', fontWeight: 600, fontSize: '1.1em' }}>Install Jellyfin</div>
            </button>
          </div>
          <div className={styles['features-content']}>
            <div style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5em' }}>Jellyfin is...</div>
            <div style={{ height: '10vh' }}>Jellyfin is...</div>
          </div>
        </div>
      </HomeLayout>
      {/* <Hero title='The Free Software Media System' large>
        <p className='hero__text margin-vert--lg'>
          Jellyfin is the volunteer-built media solution that puts <em>you</em> in control of your media. Stream to any
          device from your own server, with no strings attached. Your media, your server, your way.
        </p>
        <div className='hero__buttons'>
          <a href='https://demo.jellyfin.org/stable' className='button button--lg button--secondary button--outline'>
            See it in Action
          </a>
          <Link to='/downloads/server' className='button button--lg button--primary'>
            Download Now
          </Link>
        </div>
      </Hero>
      <main>
        <HomepageFeatures />
        <ClientSection />
        <InActionSection />
        <FreedomSection />
        <CallToAction />
      </main> */}
    </Layout>
  );
}
