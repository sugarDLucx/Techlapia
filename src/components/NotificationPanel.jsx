import React from 'react';

/**
 * NotificationPanel Component
 * Displays system alerts.
 */
const NotificationPanel = () => {
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
        alertBox: {
            background: '#1D2939', // Darker background
            border: '1px solid var(--color-text-muted)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
            minHeight: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        title: {
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '4px'
        },
        message: {
            fontSize: '0.9rem',
            fontWeight: 'bold',
            lineHeight: '1.2'
        }
    };

    return (
        <div style={styles.container}>
            <span style={styles.header}>Notification</span>
            <div style={styles.alertBox}>
                <div style={styles.title}>ALL WATER QUALITY</div>
                <div style={styles.message}>PARAMETERS ARE WITHIN NORMAL RANGE</div>
            </div>
        </div>
    );
};

export default NotificationPanel;
