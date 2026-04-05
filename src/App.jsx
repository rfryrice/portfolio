import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react';
import LandingAnimation from './components/LandingAnimation';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import reactLogo from './assets/react.svg'
import swbadgeLogo from './assets/CSWP.svg'
import './App.css'

import TextReveal from './components/TextReveal'
import DNAHelixCanvas from './components/DNACanvas'
import STLViewer from './components/STLViewer';
import DNAThree from './components/DNAThree';
  

function App() {
  const [page, setPage] = useState(0); // 0: About, 1: Work, 2: Resume
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    if (!showLanding) return;
    const timer = setTimeout(() => setShowLanding(false), 7500);
    return () => clearTimeout(timer);
  }, [showLanding]);

  const renderContent = () => {
    switch (page) {
      case 0:
        return (
          <section id="center">

            {/* <DNAHelixCanvas width={1000} height={420} /> */}
            <DNAThree width={1000} height={420} />
            <TextReveal text="About Me" as="h2" />
            <p style={{maxWidth: 600, margin: '24px auto 0', textAlign: 'center'}}>Welcome to my portfolio! Here you can learn more about me, my work, and download my resume.</p>
          </section>
        );
      case 1:
        return (
          <section id="center">
            {/* Projects Title Animation */}
            <TextReveal text="Projects" as="h1" />
            {/* About Me Title Animation with delay after Projects */}
            {(() => {
              const h1Text = "Projects";
              const stagger = 0.03;
              const letterDuration = 0.45;
              const h1Delay = (h1Text.length - 1) * stagger + letterDuration;
              return <TextReveal text="About Me" as="h2" delay={h1Delay} />;
            })()}
            <h2 style={{marginTop: 32, textAlign: 'center'}}>3D Modeling & Design</h2>
            <div className="badge-paragraph-flex">
              <a id="badge-link" href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-36YQKV2DFZ" target="_blank" style={{ margin: '0 20px' }}>
                <img src={swbadgeLogo} alt="CSWP Badge" style={{ display: 'flex', margin: 0, width: 'auto', height: 'auto' }} />
              </a>
              <p style={{margin: '0 10px', textAlign: 'left'}}>I am a Certified Solidworks Professional in Mechanical Design (CSWP-MD).
                I enjoy 3D modeling and designing tools for everyday use.
                The badge is linked to the SW Verification platform. 
                I am available for <a id="upwork" href="https://www.upwork.com/freelancers/~01e75be5f3898833a8?mp_source=sharem">freelance work</a> and collaborations, so feel free to reach out if you have a project in mind or just want to chat about 3D design!
              </p>
            </div>
            <div style={{marginTop: 32}}>
              <STLViewer />
            </div>
          </section>
        );
      case 2:
        return (
          <section id="center">
            {/* Thesis Title Animation */}
            <TextReveal text="Thesis" as="h1" />
            <p style={{maxWidth: 900, margin: '24px auto 0', textAlign: 'center'}}>A year after graduating with my degree in Bioengineering, 
              I returned to university to gain research experience through a Master's program in Biological Sciences. My research interests are in Genetics and Synthetic Biology.
              The lab I joined was interested in starting a project involving CRISPR-based gene editing. I came up with the idea to knockout a gene in a Cricket model organism with the goal of fortifying global food sustainability efforts.
              </p>
            {/* Thesis Subtitle Animation with delay after h1 */}
            {(() => {
              const h1Text = "Thesis";
              const stagger = 0.03;
              const letterDuration = 0.45;
              const h1Delay = (h1Text.length - 1) * stagger + letterDuration;
              return <TextReveal text="Massive Crickets: Intrinsic and Extrinsic Modification of Cricket Gryllus lineaticeps" as="h2" delay={h1Delay} />;
            })()}
            <h3 style={{marginTop: 32, textAlign: 'center'}}>Abstract</h3>
            <h3 style={{marginTop: 32, textAlign: 'center'}}>Introduction</h3>
            <h3 style={{marginTop: 32, textAlign: 'center'}}>Methods</h3>
            <h3 style={{marginTop: 32, textAlign: 'center'}}>Results</h3>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <AnimatePresence>
        {showLanding && (
          <motion.div
            key="landing-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'linear-gradient(180deg, #f5f5f5 60%, #e0e7ef 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <LandingAnimation width={900} height={500} />
          </motion.div>
        )}
      </AnimatePresence>
      <Paper
        elevation={6}
        sx={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1200,
          height: 72,
          borderRadius: 0,
        }}
      >
        <BottomNavigation
          showLabels
          value={page}
          onChange={(_, newValue) => setPage(newValue)}
          sx={{
            height: '100%',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.10)',
          }}
        >
          <BottomNavigationAction label="About" icon={<InfoIcon />} />
          <BottomNavigationAction label="Projects" icon={<WorkIcon />} />
          <BottomNavigationAction label="Thesis" icon={<DescriptionIcon />} />
        </BottomNavigation>
      </Paper>
      <div style={{ paddingBottom: 88 }}>
        {renderContent()}
      </div>
    </>
  );
}

export default App
