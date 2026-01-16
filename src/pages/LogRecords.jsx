import React, { useState } from 'react';
import Navigation from '../components/Navigation.jsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const LogRecords = ({ onNavigate }) => {
    const [logs, setLogs] = useState([
        { id: 1, date: '1/1/2026', len: '40 mm', feed: '4 g', w: '20 g', pop: 20, temp: '25° C', ph: 6.5, lvl: '75 cm', turb: '50 mg/L' },
        { id: 2, date: '1/1/2026', len: '40 mm', feed: '4 g', w: '20 g', pop: 20, temp: '25° C', ph: 6.5, lvl: '75 cm', turb: '50 mg/L' },
        { id: 3, date: '1/2/2026', len: '40 mm', feed: '4 g', w: '20 g', pop: 20, temp: '25° C', ph: 6.5, lvl: '75 cm', turb: '50 mg/L' },
        { id: 4, date: '1/2/2026', len: '40 mm', feed: '4 g', w: '20 g', pop: 20, temp: '25° C', ph: 6.5, lvl: '75 cm', turb: '50 mg/L' },
        { id: 5, date: '1/3/2026', len: '40 mm', feed: '4 g', w: '20 g', pop: 20, temp: '25° C', ph: 6.5, lvl: '75 cm', turb: '50 mg/L' },
        { id: 6, date: '1/3/2026', len: '40 mm', feed: '4 g', w: '20 g', pop: 20, temp: '25° C', ph: 6.5, lvl: '75 cm', turb: '50 mg/L' },
    ]);

    const [selectedId, setSelectedId] = useState(null);

    const handleSavePDF = () => {
        const doc = new jsPDF();
        doc.text("Techlapia Log Records", 14, 15);

        const tableColumn = ["Date", "Length", "Feed", "Weight", "Pop", "Temp", "pH", "Lvl", "Turb"];
        const tableRows = logs.map(log => [
            log.date, log.len, log.feed, log.w, log.pop, log.temp, log.ph, log.lvl, log.turb
        ]);

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20,
        });

        doc.save("techlapia_logs.pdf");
    };

    const handleDelete = () => {
        if (selectedId) {
            setLogs(logs.filter(log => log.id !== selectedId));
            setSelectedId(null);
        }
    };

    const styles = {
        container: {
            background: 'var(--color-primary)',
            height: '100vh',
            padding: 'var(--spacing-md)',
            display: 'flex',
            flexDirection: 'column',
            color: '#fff'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 16px',
            background: '#101828',
            borderBottom: '4px solid #fff',
            marginBottom: '10px'
        },
        logo: {
            fontFamily: 'var(--font-family-display)',
            fontSize: '1.2rem',
            fontWeight: 'bold'
        },
        tableContainer: {
            flex: 1,
            overflow: 'auto',
            background: '#fff',
            borderRadius: '8px',
            padding: '0',
            color: '#000',
            position: 'relative'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.8rem',
            textAlign: 'center'
        },
        th: {
            padding: '8px',
            background: '#f2f4f7',
            borderBottom: '2px solid #e4e7ec',
            fontWeight: 'bold',
            position: 'sticky', top: 0
        },
        td: {
            padding: '8px',
            borderBottom: '1px solid #e4e7ec',
            cursor: 'pointer'
        },
        selectedRow: {
            background: '#e0f2fe'
        },
        sidebar: {
            width: '180px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginLeft: '12px'
        },
        actionBtn: {
            padding: '10px',
            borderRadius: '8px',
            border: 'none',
            color: '#fff',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '0.75rem'
        },
        saveBtn: { background: '#12B76A' },
        deleteBtn: { background: '#F04438' },
        layout: {
            display: 'flex',
            height: 'calc(100% - 60px)'
        },
        sidebarHeader: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.logo}>TECHLAPIA</div>
                <div>&nbsp;</div>
            </div>

            <div style={styles.layout}>
                {/* Table */}
                <div style={styles.tableContainer}>
                    <table style={styles.table}>
                        <thead>
                            <tr>
                                <th style={styles.th}>Date</th>
                                <th style={styles.th}>Length</th>
                                <th style={styles.th}>Feed</th>
                                <th style={styles.th}>Weight</th>
                                <th style={styles.th}>Pop</th>
                                <th style={styles.th}>Temp</th>
                                <th style={styles.th}>pH</th>
                                <th style={styles.th}>Lvl</th>
                                <th style={styles.th}>Turb</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log) => (
                                <tr
                                    key={log.id}
                                    style={selectedId === log.id ? styles.selectedRow : {}}
                                    onClick={() => setSelectedId(log.id)}
                                >
                                    <td style={styles.td}>{log.date}</td>
                                    <td style={styles.td}>{log.len}</td>
                                    <td style={styles.td}>{log.feed}</td>
                                    <td style={styles.td}>{log.w}</td>
                                    <td style={styles.td}>{log.pop}</td>
                                    <td style={styles.td}>{log.temp}</td>
                                    <td style={styles.td}>{log.ph}</td>
                                    <td style={styles.td}>{log.lvl}</td>
                                    <td style={styles.td}>{log.turb}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Sidebar with Actions Aligned Top */}
                <div style={styles.sidebar}>
                    <div style={styles.sidebarHeader}>
                        <button style={{ ...styles.actionBtn, ...styles.saveBtn }} onClick={handleSavePDF}>
                            SAVE AS PDF
                        </button>
                        <button
                            style={{ ...styles.actionBtn, ...styles.deleteBtn, opacity: selectedId ? 1 : 0.5 }}
                            onClick={handleDelete}
                            disabled={!selectedId}
                        >
                            DELETE
                        </button>
                    </div>

                    {/* Updated Navigation Call: activePage="logs" */}
                    <Navigation onNavigate={onNavigate} activePage="logs" />
                </div>
            </div>
        </div>
    );
};

export default LogRecords;
