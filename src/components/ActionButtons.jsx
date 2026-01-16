import React from 'react';

const ActionButtons = () => {
    const styles = {
        container: {
            background: 'var(--color-secondary)',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            color: '#fff',
        },
        header: {
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--spacing-sm)',
            display: 'block',
        },
        grid: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        button: {
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: 'none',
            color: '#fff',
            fontWeight: '600',
            fontSize: '0.75rem',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'opacity 0.2s',
        },
        waterBtn: { background: '#175CD3' }, // Blue
        aeratorBtn: { background: '#12B76A' }, // Green
        feederBtn: { background: '#F79009' }, // Orange
    };

    return (
        <div style={styles.container}>
            <span style={styles.header}>Override</span>
            <div style={styles.grid}>
                <button style={{ ...styles.button, ...styles.waterBtn }}>WATER</button>
                <button style={{ ...styles.button, ...styles.aeratorBtn }}>AERATOR</button>
                <button style={{ ...styles.button, ...styles.feederBtn }}>FEEDER</button>
            </div>
        </div>
    );
};

export default ActionButtons;
