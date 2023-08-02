import styled from '@emotion/styled';

// TODO token 반영

export const MapContainer = styled.div({
  width: '100vw',
  height: '100vh',
});

export const ReturnButton = styled.div({
  width: '61px',
  height: '75px',
  borderRadius: '8px',
  border: '1.2px solid #E8E8E8',
  backgroundColor: ' #FEFBF2',

  position: 'fixed',
  right: '12px',
  bottom: '16px',
  zIndex: 10,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '8px',
});

export const ButtonLabel = styled.div({
  color: '#252525',
  fontSize: '8px',
  fontWeight: '800',
});
