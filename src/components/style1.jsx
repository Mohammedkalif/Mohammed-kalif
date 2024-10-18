export const headerContainer = (isMobile) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: isMobile ? '10px 13px' : '0 20px',
  height: '60px',
  backgroundColor: isMobile ? '#f2f4f6' : '#FFFFFF',
  borderBottom: isMobile ? 'none' : '1px solid #E4EAEE',
});

export const leftSection = (isMobile) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom : isMobile ? '10px': '0'
});

export const actionsTitle = (isMobile) => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: isMobile ? '18px' : '25px',
  color: 'black',
  fontWeight: 'bold',
});

export const notificationCount = {
  marginLeft: '5px',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '14px',
  borderRadius: '50%',
  padding: '5px 8px',
};

export const centerSection = (isMobile) => ({
  flex: 1,
  display: 'flex',
  justifyContent: isMobile ? 'space-between' : 'center',   alignItems: 'center',
  flexDirection: 'row',
});

export const searchBarBox = (isMobile) => ({
  position: 'relative',
  width: isMobile ? 'calc(100% - 50px)' : '370px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: isMobile ? 'flex-start' : 'center', 
  marginLeft:isMobile?'0':'270px',
});


export const searchInput = (isMobile) => ({
  width: '100%',
  height: '40px',
  background: isMobile ? '#FFFFFF' : '#f2f4f6',
  borderRadius: '8px',
  padding: '0 10px',
  paddingLeft: '35px',  
  border: '1px solid #E4EAEE',
  color: 'black',
  boxSizing: 'border-box',
  fontSize: isMobile ? '14px' : 'auto',
});


export const searchIconStyle = (isMobile) => ({
  position: 'absolute',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: isMobile ? '#000' : '#A0A0A0',
  pointerEvents: 'none',
});

export const filterButton = {
  height: '40px',
  width: '40px',
  borderRadius: '8px',
  border: '1px solid #E4EAEE',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '13px',
};


  
  export const rightSection = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };
  
  export const verticalLine = {
    height: '20px',
    width: '1px',
    backgroundColor: '#E4EAEE',
    margin: '0 10px',
  };
  
  export const profileIconStyle = { 
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    marginLeft: '15px',
  };