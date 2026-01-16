import React from 'react';
import Layout from '../components/Layout.jsx';
import NotificationPanel from '../components/NotificationPanel.jsx';
import FeedingSchedule from '../components/FeedingSchedule.jsx';
import ActionButtons from '../components/ActionButtons.jsx';
import Navigation from '../components/Navigation.jsx';

// Helper Component for Sensor Strips (Visual match for PDF)
const SensorStrip = ({ label, value, status }) => (
    <div style={{
        background: '#1570EF', // Blue background per PDF
        borderRadius: '4px',
        padding: '6px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        fontSize: '0.65rem'
    }}>
        <span>{label}: {value}</span>
        <span style={{ opacity: 0.8 }}>| {status}</span>
    </div>
);

const Dashboard = ({ onNavigate }) => {
    const styles = {
        cameraOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.1, // Placeholder effect
        },
        cameraText: {
            position: 'relative',
            zIndex: 2,
            fontWeight: '600',
            color: '#000',
            background: 'rgba(255,255,255,0.8)',
            padding: '8px 16px',
            borderRadius: '20px',
        },
        sidebarContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            height: '100%'
        },
        header: {
            background: '#1D2939',
            color: '#fff',
            padding: '10px',
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '4px'
        },
        logoText: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            letterSpacing: '1px',
            fontFamily: 'var(--font-family-display)'
        },
        date: {
            fontSize: '0.65rem',
            color: 'var(--color-text-muted)',
            marginTop: '2px'
        }
    };

    return (
        <Layout
            sidebar={
                <div style={styles.sidebarContainer}>
                    {/* Header */}
                    <div style={styles.header}>
                        <div style={styles.logoText}>TECHLAPIA</div>
                        <div style={styles.date}>12:00 AM 1/1/2026</div>
                    </div>

                    {/* Top Section: Tilapia Count (Left) & Sensors (Right) */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '8px' }}>

                        {/* Tilapia Count Card */}
                        <div style={{
                            background: '#101828',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                background: '#1D2939',
                                color: '#98A2B3',
                                fontSize: '0.65rem',
                                padding: '6px',
                                textAlign: 'center',
                                fontWeight: 'bold'
                            }}>
                                Tilapia Count
                            </div>
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2.5rem',
                                fontWeight: 'bold',
                                color: '#fff',
                                padding: '10px'
                            }}>
                                15
                            </div>
                        </div>

                        {/* Sensor List (Compact) */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <SensorStrip label="Temperature" value="25° C" status="Normal" />
                            <SensorStrip label="Turbidity" value="50 mg/L" status="Normal" />
                            <SensorStrip label="pH Level" value="6.5" status="Normal" />
                            <SensorStrip label="Water Level" value="75 cm" status="Normal" />
                        </div>
                    </div>

                    <NotificationPanel />
                    <FeedingSchedule />
                    <ActionButtons />

                    {/* Footer Navigation */}
                    <Navigation onNavigate={onNavigate} activePage="dashboard" />
                </div>
            }
        >
            <div style={{ width: '100%', height: '100%', background: '#fff', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={styles.cameraOverlay} />
                <span style={styles.cameraText}>LIVE-FEED FROM CAMERA MODULE</span>
            </div>
        </Layout>
    );
};

export default Dashboard;
