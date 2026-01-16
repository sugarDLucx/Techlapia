import React from 'react';

const FeedingSchedule = () => {
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
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.75rem',
        },
        th: {
            textAlign: 'left',
            color: 'var(--color-text-muted)',
            paddingBottom: '8px',
            borderBottom: '1px solid var(--color-text-muted)',
        },
        td: {
            padding: '8px 0',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
        }
    };

    const schedule = [
        { date: '1/1/2026', time: '9:00 AM', feeds: '4 g', weight: '20 g' },
        { date: '1/1/2026', time: '12:00 PM', feeds: '4 g', weight: '20 g' },
        { date: '1/1/2026', time: '3:00 PM', feeds: '4 g', weight: '20 g' },
    ];

    return (
        <div style={styles.container}>
            <span style={styles.header}>Feeding Schedule</span>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Date</th>
                        <th style={styles.th}>Time</th>
                        <th style={styles.th}>Feeds</th>
                        <th style={styles.th}>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((row, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{row.date}</td>
                            <td style={styles.td}>{row.time}</td>
                            <td style={styles.td}>{row.feeds}</td>
                            <td style={styles.td}>{row.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FeedingSchedule;
