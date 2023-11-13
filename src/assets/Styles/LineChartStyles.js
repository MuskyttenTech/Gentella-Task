// LineChartStyles.js
const lineChartStyles = {
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "2px solid #E6E9ED",
    },
    graphTitleContainer: {
      display: "flex",
    },
    graphTitle: {
      fontSize: "1.75rem",
      padding: "10px",
      color: "#73879C",
      fontFamily: "Arial",
      fontWeight: "normal",
    },
    graphSubtitle: {
      fontSize: "1.25rem",
      padding: "5px",
      p: 2.2,
      fontWeight: "400",
      color: "#73879C",
      fontFamily: "Arial",
      height: 10,
    },
    calendarContainer: {
      border: "1px solid #ccc",
      cursor: "pointer",
      margin: "09px 11px",
      background: "#fff",
    },
    calendarButton: {
      marginTop: '2px',
      color: "#BDBDBD",
    },
    calendarText: {
      color: "#BDBDBD",
      marginTop: '4px',
      paddingLeft: '2px',
    },
    gridContainer: {
      display: "flex",
      padding: "5px",
    },
    graphContainer: {
      height: "280px",
      paddingRight: "20px",
    },
    campaignContainer: {
      height: "300px",
      paddingRight: "20px",
    },
    campaignHeader: {
      borderBottom: "2px solid #E6E9ED",
      mb: '10px',
    },
    campaignTitle: {
      fontSize: "18px",
      fontWeight: "400",
      padding: "10px",
      fontFamily: "Arial",
      color: "#73879C",
    },
    campaignName: {
      color: "#73879C",
      fontFamily: "Arial",
      fontSize: "13px",
      fontWeight: "400",
      paddingLeft: "15px",
    },
    linearProgress: {
      height: "10px",
      mb: "15px",
      mt: '5px',
      marginLeft: "15px",
      marginRight: "15px",
      backgroundColor: "#F5F5F5",
      "& .MuiLinearProgress-bar": {
        backgroundColor: "#1ABB9C",
      },
    },
  };
  
  export default lineChartStyles;
  